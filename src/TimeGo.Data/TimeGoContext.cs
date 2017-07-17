namespace TimeGo.Data
{
    using System;
    using System.Data.Entity;
    using System.ComponentModel.DataAnnotations.Schema;
    using System.Linq;

    public partial class TimeGoContext : DbContext
    {
        public TimeGoContext()
            : base("name=TimeGoContext")
        {
        }

        public virtual DbSet<ApprovalStatus> ApprovalStatus { get; set; }
        public virtual DbSet<Company> Company { get; set; }
        public virtual DbSet<CompanyApproved> CompanyApproved { get; set; }
        public virtual DbSet<Email> Email { get; set; }
        public virtual DbSet<Employee> Employee { get; set; }
        public virtual DbSet<EmployeeRates> EmployeeRates { get; set; }
        public virtual DbSet<LockStatus> LockStatus { get; set; }
        public virtual DbSet<Period> Period { get; set; }
        public virtual DbSet<Role> Role { get; set; }
        public virtual DbSet<SubscriptionPlan> SubscriptionPlan { get; set; }
        public virtual DbSet<Task> Task { get; set; }
        public virtual DbSet<TaskAllowed> TaskAllowed { get; set; }
        public virtual DbSet<TimeoffRequests> TimeoffRequests { get; set; }
        public virtual DbSet<Timesheet> Timesheet { get; set; }
        public virtual DbSet<TimesheetLine> TimesheetLine { get; set; }
        public virtual DbSet<Timezone> Timezone { get; set; }

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
                .HasMany(e => e.Timesheet)
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
                .HasMany(e => e.TimesheetLine)
                .WithOptional(e => e.Timesheet)
                .WillCascadeOnDelete();
        }
    }
}
