using System;
using System.Transactions;

namespace TimeGo.ApplicationDomain.Persistance.Implementation
{
    public class UnitOfWork : IUnitOfWork
    {
        private Action _onFail;
        private Action _onSuccess;
        private readonly TransactionScope _transactionScope;

        public UnitOfWork()
        {
            _transactionScope = new TransactionScope(TransactionScopeOption.Required, TimeSpan.FromSeconds(60));
        }

        public UnitOfWork(IsolationLevel isolationLevel)
        {
            var transactionOptions = new TransactionOptions {IsolationLevel = isolationLevel, Timeout = TimeSpan.FromSeconds(60) };
            _transactionScope = new TransactionScope(TransactionScopeOption.Required, transactionOptions);
        }

        public void Dispose()
        {
            _transactionScope?.Dispose();
        }

        public void OnSuccess(Action onSuccess)
        {
            _onSuccess = onSuccess;
        }

        public void OnFail(Action onFail)
        {
            _onFail = onFail;
        }

        public void Success()
        {
            _transactionScope?.Complete();
            _onSuccess?.Invoke();
        }

        public void Fail()
        {
            _onFail?.Invoke();
        }
    }
}
