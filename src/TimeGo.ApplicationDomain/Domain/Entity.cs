using System;
using System.Collections.Generic;
using System.Linq;
using System.Reflection;
using TimeGo.ApplicationDomain.Persistance;

namespace TimeGo.ApplicationDomain.Domain
{
    public abstract class Entity<T, TK> : BaseObject, IIdentifiable<TK> where T : Entity<T, TK>
    {
        private DateTime _createdOn;

        public virtual DateTime CreatedOn
        {
            get
            {
                if (_createdOn == DateTime.MinValue)
                    _createdOn = DateTime.UtcNow;
                return _createdOn;
            }
            set => _createdOn = value;
        }

        public virtual int TimeStamp { get; protected set; }
        public virtual TK Id { get; protected set; }

        object IIdentifiable.Id => Id;

        #region BaseObject overrides

        private int? _cachedHashcode;

        /// <summary>
        ///     The property getter for SignatureProperties should ONLY compare the properties which make up
        ///     the "domain signature" of the object.
        ///     If you choose NOT to override this method (which will be the most common scenario),
        ///     then you should decorate the appropriate property(s) with [DomainSignature] and they
        ///     will be compared automatically.  This is the preferred method of managing the domain
        ///     signature of entity objects.
        /// </summary>
        /// <remarks>
        ///     This ensures that the entity has at least one property decorated with the
        ///     [DomainSignature] attribute.
        /// </remarks>
        protected override IEnumerable<PropertyInfo> GetTypeSpecificSignatureProperties()
        {
            return GetType().GetProperties()
                .Where(p => Attribute.IsDefined(p, typeof (DomainSignatureAttribute), true));
        }

        public override bool Equals(object obj)
        {
            var compareTo = obj as Entity<T, TK>;

            if (ReferenceEquals(this, compareTo))
                return true;

            if (compareTo == null || !(GetType() == compareTo.GetTypeUnproxied()))
                return false;

            if (HasSameNonDefaultIdAs(compareTo))
                return true;

            // Since the Ids aren't the same, one of them must be transient to 
            // compare domain signatures; because if both are persisted entity, 
            // and tehy don't have the same nondefault id's, then they cannot be the same object.
            return (IsTransient() || compareTo.IsTransient()) &&
                   HasSameObjectSignatureAs(compareTo);
        }

        public override int GetHashCode()
        {
            if (_cachedHashcode.HasValue)
                return _cachedHashcode.Value;

            if (IsTransient())
            {
                _cachedHashcode = base.GetHashCode();
            }
            else
            {
                unchecked
                {
                    // It's possible for two objects to return the same hash code based on 
                    // identically valued properties, even if they're of two different types, 
                    // so we include the object's type in the hash calculation
                    var hashCode = GetType().GetHashCode();
                    _cachedHashcode = (hashCode*HashMultiplier) ^ Id.GetHashCode();
                }
            }

            return _cachedHashcode.Value;
        }

        /// <summary>
        ///     Returns true if self and the provided entity have the same Id values
        ///     and the Ids are not of the default Id value
        /// </summary>
        private bool HasSameNonDefaultIdAs(Entity<T, TK> compareTo)
        {
            return !IsTransient() &&
                   !compareTo.IsTransient() &&
                   Id.Equals(compareTo.Id);
        }

        /// <summary>
        ///     Transient objects are not associated with an item already in storage.  For instance,
        ///     a Customer is transient if its Id is 0.  It's virtual to allow NHibernate-backed
        ///     objects to be lazily loaded.
        /// </summary>
        public virtual bool IsTransient()
        {
            return Id.Equals(default(TK));
        }

        #endregion
    }
}