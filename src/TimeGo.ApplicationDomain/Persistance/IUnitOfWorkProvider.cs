using System.Transactions;

namespace TimeGo.ApplicationDomain.Persistance
{
    public interface IUnitOfWorkProvider
    {
        IUnitOfWork Current { get; }
        IUnitOfWork BeginUnitOfWork();
        IUnitOfWork BeginUnitOfWork(IsolationLevel isolationLevel);
    }
}
