using System.Data.Entity;

namespace TimeGo.Data
{
    public class TimeGoEntities : DbContext
    {
        public TimeGoEntities()
            : base("name=TimeGoEntities")
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
            modelBuilder.Entity<ApprovalStatus>()
                .HasMany(e => e.TimeoffRequests)
                .WithRequired(e => e.ApprovalStatus)
                .WillCascadeOnDelete(false);

            modelBuilder.Entity<ApprovalStatus>()
                .HasMany(e => e.Timesheet)
                .WithRequired(e => e.ApprovalStatus)
                .WillCascadeOnDelete(false);

            modelBuilder.Entity<ApprovalStatus>()
                .HasMany(e => e.TimesheetLine)
                .WithRequired(e => e.ApprovalStatus)
                .WillCascadeOnDelete(false);

            modelBuilder.Entity<CompanyApproved>()
                .HasMany(e => e.Company)
                .WithRequired(e => e.CompanyApproved)
                .WillCascadeOnDelete(false);

            modelBuilder.Entity<Employee>()
                .HasMany(e => e.Employee1)
                .WithOptional(e => e.Employee2)
                .HasForeignKey(e => e.UpdatedById);

            modelBuilder.Entity<Employee>()
                .HasMany(e => e.Task)
                .WithOptional(e => e.Employee)
                .HasForeignKey(e => e.Approver1Id);

            modelBuilder.Entity<Employee>()
                .HasMany(e => e.Task1)
                .WithOptional(e => e.Employee1)
                .HasForeignKey(e => e.Approver2Id);

            modelBuilder.Entity<Employee>()
                .HasMany(e => e.Period)
                .WithOptional(e => e.Employee)
                .HasForeignKey(e => e.UpdatedById);

            modelBuilder.Entity<Employee>()
                .HasMany(e => e.Timesheets)
                .WithOptional(e => e.Employee)
                .HasForeignKey(e => e.EmployeeId);

            modelBuilder.Entity<Employee>()
                .HasMany(e => e.Timesheet1)
                .WithOptional(e => e.Employee1)
                .HasForeignKey(e => e.RevisedById);

            modelBuilder.Entity<Employee>()
                .HasMany(e => e.Timesheet2)
                .WithOptional(e => e.Employee2)
                .HasForeignKey(e => e.ApprovedById);

            modelBuilder.Entity<Employee>()
                .HasMany(e => e.TimesheetLine)
                .WithOptional(e => e.Employee)
                .HasForeignKey(e => e.RevisedById);

            modelBuilder.Entity<Employee>()
                .HasMany(e => e.TimesheetLine1)
                .WithOptional(e => e.Employee1)
                .HasForeignKey(e => e.ApprovedById);

            modelBuilder.Entity<LockStatus>()
                .HasMany(e => e.Timesheet)
                .WithRequired(e => e.LockStatus)
                .WillCascadeOnDelete(false);

            modelBuilder.Entity<LockStatus>()
                .HasMany(e => e.TimesheetLine)
                .WithRequired(e => e.LockStatus)
                .WillCascadeOnDelete(false);

            modelBuilder.Entity<SubscriptionPlan>()
                .HasMany(e => e.Company)
                .WithRequired(e => e.SubscriptionPlan)
                .WillCascadeOnDelete(false);

            modelBuilder.Entity<Timesheet>()
                .HasMany(e => e.TimesheetLines)
                .WithOptional(e => e.Timesheet)
                .WillCascadeOnDelete();
        }
    }
}
