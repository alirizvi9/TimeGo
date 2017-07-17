using System;

namespace TimeGo.ApplicationDomain.Persistance
{
    public interface IAuditable : ICreateAuditable, IEditAuditable
    {
    }

    public interface ICreateAuditable
    {
        string CreatedBy { get; set; }
        DateTime CreatedOn { get; set; }
    }

    public interface IEditAuditable
    {
        string ModifiedBy { get; set; }
        DateTime? ModifiedOn { get; set; }
    }
}
