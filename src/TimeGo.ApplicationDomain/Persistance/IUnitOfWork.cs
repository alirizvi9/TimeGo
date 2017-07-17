using System;

namespace TimeGo.ApplicationDomain.Persistance
{
    public interface IUnitOfWork : IDisposable
    {
        void OnSuccess(Action onSuccess);
        void OnFail(Action onFail);
        void Success();
        void Fail();
    }
}
