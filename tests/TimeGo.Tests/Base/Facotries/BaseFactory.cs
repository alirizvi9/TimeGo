using System;
using TimeGo.ApplicationDomain.Persistance;

namespace TimeGo.Tests.Base.Facotries
{
    public abstract class BaseFactory<T> : IFactory<T> where T : class, IIdentifiable
    {
        private readonly IRepository _repository;
        protected int Counter { get; private set; }

        protected BaseFactory(IRepository repository)
        {
            _repository = repository;
            Counter = 0;
        }

        public T Create(Action<T> initialization)
        {
            var entity = Build(initialization);
            _repository.Add(entity);
            return entity;
        }

        public T Build(Action<T> initialization)
        {
            Counter++;

            var entity = CreateNew();
            initialization(entity);
            OnInitialized(entity);
            return entity;
        }

        protected abstract T CreateNew();
        protected virtual void OnInitialized(T entity) { }
    }
}