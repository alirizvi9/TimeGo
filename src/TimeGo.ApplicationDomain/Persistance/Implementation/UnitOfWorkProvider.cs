using System.Transactions;

namespace TimeGo.ApplicationDomain.Persistance.Implementation
{
    public class UnitOfWorkProvider : IUnitOfWorkProvider
    {
        private UnitOfWork _unitOfWork;

        public UnitOfWorkProvider()
        {
            _unitOfWork = new UnitOfWork();
        }

        public IUnitOfWork Current => _unitOfWork;

        public IUnitOfWork BeginUnitOfWork()
        {
            return _unitOfWork = new UnitOfWork();
        }

        public IUnitOfWork BeginUnitOfWork(IsolationLevel isolationLevel)
        {
            return _unitOfWork = new UnitOfWork(isolationLevel);
        }
    }
}
