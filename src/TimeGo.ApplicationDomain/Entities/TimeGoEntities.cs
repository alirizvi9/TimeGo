using System.Data.Entity;
using TimeGo.ApplicationDomain.Entities.Mappings;

namespace TimeGo.ApplicationDomain.Entities
{
    public class TimeGoEntities : DbContext
    {
        public TimeGoEntities()
            : base("name=TimeGoEntities")
        {
        }

        public TimeGoEntities(string connectionString)
            : base(connectionString)
        {
        }

        public virtual DbSet<ApprovalStatus> ApprovalStatus { get; set; }
        public virtual DbSet<Company> Companies { get; set; }
        public virtual DbSet<CompanyApproved> CompanyApproved { get; set; }
        public virtual DbSet<Email> Emails { get; set; }
        public virtual DbSet<Employee> Employees { get; set; }
        public virtual DbSet<EmployeeRate> EmployeeRates { get; set; }
        public virtual DbSet<LockStatus> LockStatus { get; set; }
        public virtual DbSet<Period> Periods { get; set; }
        public virtual DbSet<Role> Roles { get; set; }
        public virtual DbSet<SubscriptionPlan> SubscriptionPlans { get; set; }
        public virtual DbSet<Task> Tasks { get; set; }
        public virtual DbSet<TaskAllowed> TaskAllowed { get; set; }
        public virtual DbSet<TimeoffRequest> TimeoffRequests { get; set; }
        public virtual DbSet<Timesheet> Timesheets { get; set; }
        public virtual DbSet<TimesheetLine> TimesheetLines { get; set; }
        public virtual DbSet<Timezone> Timezones { get; set; }

        protected override void OnModelCreating(DbModelBuilder modelBuilder)
        {
            modelBuilder.Configurations.Add(new ApprovalStatusMap());
            modelBuilder.Configurations.Add(new CompanyMap());
            modelBuilder.Configurations.Add(new CompanyApprovedMap());
            modelBuilder.Configurations.Add(new EmailMap());
            modelBuilder.Configurations.Add(new EmployeeMap());
            modelBuilder.Configurations.Add(new EmployeeRateMap());
            modelBuilder.Configurations.Add(new LockStatusMap());
            modelBuilder.Configurations.Add(new PeriodMap());
            modelBuilder.Configurations.Add(new RoleMap());
            modelBuilder.Configurations.Add(new SubscriptionPlanMap());
            modelBuilder.Configurations.Add(new TaskMap());
            modelBuilder.Configurations.Add(new TaskAllowedMap());
            modelBuilder.Configurations.Add(new TimeoffRequestMap());
            modelBuilder.Configurations.Add(new TimesheetLineMap());
            modelBuilder.Configurations.Add(new TimesheetMap());
            modelBuilder.Configurations.Add(new TimezoneMap());
        }
    }
}
