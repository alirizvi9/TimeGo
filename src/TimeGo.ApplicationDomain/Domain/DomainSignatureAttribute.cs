using System;

namespace TimeGo.ApplicationDomain.Domain
{
    /// <summary>
    ///     Marker attribute to indicate that a property is part of an entity's domain signature
    /// </summary>
    [AttributeUsage(AttributeTargets.Property)]
    public sealed class DomainSignatureAttribute : Attribute
    {
    }
}