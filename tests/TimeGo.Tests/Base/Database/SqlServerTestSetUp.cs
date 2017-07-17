using System.Data.SqlClient;
using System.Reflection;
using TimeGo.Tests.Base.Extensions;

namespace TimeGo.Tests.Base.Database
{
    public class SqlServerTestSetUp : IDbSetUp
    {
        private const string DropAllTablesResourceName = "TimeGo.Tests.Base.Database.MsSqlDropAllTables.sql";
        private readonly string _connectionString;

        public SqlServerTestSetUp(string connectionString)
        {
            _connectionString = connectionString;
        }

        public void SetUp()
        {
            DropAllTables();

            //_initializer.CreateSchema();
        }

        public void TearDown()
        {
            DropAllTables();
        }

        private void DropAllTables()
        {
            using (var connection = new SqlConnection(_connectionString))
            {
                connection.Open();
                using (var command = connection.CreateCommand())
                {
                    command.CommandText = Assembly.GetAssembly(typeof(SqlServerTestSetUp)).LoadResourceAsText(DropAllTablesResourceName);
                    command.ExecuteNonQuery();
                }
            }
        }
    }
}