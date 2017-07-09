using System;
using System.Linq;
using System.Linq.Expressions;

namespace TimeGo.ApplicationDomain.Persistance
{
    public interface IRepository
    {
        void Add<T>(T item) where T : class, IIdentifiable;
        void Delete<T>(T item) where T : class, IIdentifiable;
        void Delete<T>(object id) where T : class, IIdentifiable;
        T Find<T>(object id) where T : class, IIdentifiable;
        T FindForUpdate<T>(object id) where T : class, IIdentifiable;
        IQueryable<T> Find<T>() where T : class, IIdentifiable;
        IQueryable<T> Find<T>(Expression<Func<T, bool>> predicate) where T : class, IIdentifiable;
        T Clone<T>(object id) where T : class, IIdentifiable;
        void Save();
    }
}
