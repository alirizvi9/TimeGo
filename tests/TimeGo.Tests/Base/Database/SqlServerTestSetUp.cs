using System.Reflection;
using TimeGo.ApplicationDomain.Entities;
using TimeGo.Tests.Base.Extensions;

namespace TimeGo.Tests.Base.Database
{
    public class SqlServerTestSetUp : IDbSetUp
    {
        private const string DropAllTablesResourceName = "TimeGo.Tests.Base.Database.MsSqlDropAllTables.sql";
        private readonly TimeGoEntities _context;

        public SqlServerTestSetUp(string connectionString)
        {
           _context = new TimeGoEntities(connectionString);
        }

        public void SetUp()
        {
            DropAllTables();

            _context.Database.Create();
        }

        public void TearDown()
        {
            DropAllTables();
        }

        private void DropAllTables()
        {
            var script = Assembly.GetAssembly(typeof(SqlServerTestSetUp)).LoadResourceAsText(DropAllTablesResourceName);
            _context.Database.ExecuteSqlCommand(script);
        }
    }
}