using System;

namespace TimeGo.ApplicationDomain.Models.Users
{
    public class UsersListItemViewModel
    {
        public long Id { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string Email { get; set; }
        public string Phone { get; set; }
        public string Last4Ss { get; set; }
        public bool IsAdmin { get; set; }
        public bool IsActive { get; set; }
        public bool IsOvertimeCalculated { get; set; }
        public bool IsRegistrate { get; set; }
        public DateTime? InviteOn { get; set; }
    }
}
