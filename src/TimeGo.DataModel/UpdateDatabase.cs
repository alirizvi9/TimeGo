using FluentMigrator;
using System;
using System.Reflection;
using FluentMigrator.Runner;
using FluentMigrator.Runner.Announcers;
using FluentMigrator.Runner.Initialization;
using FluentMigrator.Runner.Processors;

namespace TimeGo.DataModel
{
    public class UpdateDatabase {
        public UpdateDatabase(String ConnectionString) {
            var announcer = new TextWriterAnnouncer(s => System.Console.WriteLine(s));
            var assembly = Assembly.GetAssembly(typeof(SchemaChanges.frm_20170221_1442));

            var migrationContext = new RunnerContext(announcer) { Namespace = "TimeGo.DataModel.SchemaChanges" };

            IMigrationProcessorOptions options = new ProcessorOptions {
                PreviewOnly = false,
                Timeout = 60
            };



            var factory = new FluentMigrator.Runner.Processors.SqlServer.SqlServer2008ProcessorFactory();
            var processor = factory.Create(ConnectionString, announcer, options);


            var runner = new MigrationRunner(assembly, migrationContext, processor);
            runner.MigrateUp();
        }
    }
}
