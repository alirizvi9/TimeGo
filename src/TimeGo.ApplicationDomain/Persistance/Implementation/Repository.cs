using System;
using System.Data.Entity;
using System.Linq;
using System.Linq.Expressions;

namespace TimeGo.ApplicationDomain.Persistance.Implementation
{
    public class Repository : IRepository
    {
        private readonly DbContext _context;

        public Repository(DbContext context)
        {
            _context = context;
        }

        public void Add<T>(T item) where T : class, IIdentifiable
        {
            _context.Set<T>().Add(item);
        }

        public void Delete<T>(object id) where T : class, IIdentifiable
        {
            var item = Find<T>(id);
            _context.Set<T>().Remove(item);
        }

        public void Delete<T>(T item) where T : class, IIdentifiable
        {
            _context.Set<T>().Remove(item);
        }

        public T Find<T>(object id) where T : class, IIdentifiable
        {
            return _context.Set<T>().SingleOrDefault(x => x.Id == id);
        }

        public T FindForUpdate<T>(object id) where T : class, IIdentifiable
        {
            return _context.Set<T>().SingleOrDefault(x => x.Id == id);
        }

        public IQueryable<T> Find<T>() where T : class, IIdentifiable
        {
            return _context.Set<T>();
        }

        public IQueryable<T> Find<T>(Expression<Func<T, bool>> predicate) where T : class, IIdentifiable
        {
            return _context.Set<T>().Where(predicate);
        }

        public T Clone<T>(object id) where T : class, IIdentifiable
        {
            var item = Find<T>(id);
            _context.Entry(item).State = EntityState.Detached;
            _context.Set<T>().Add(item);
            return item;
        }

        public void Save()
        {
            _context.SaveChanges();
        }
    }
}
