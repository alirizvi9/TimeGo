//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated from a template.
//
//     Manual changes to this file may cause unexpected behavior in your application.
//     Manual changes to this file will be overwritten if the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace TimeGo.Data
{
    using System;
    using System.Collections.Generic;
    
    public partial class TaskAllowed
    {
        public int TaskAllowedId { get; set; }
        public Nullable<int> TaskId { get; set; }
        public Nullable<int> EmployeeId { get; set; }
        public Nullable<bool> IsActive { get; set; }
    
        public virtual Employee Employee { get; set; }
        public virtual Task Task { get; set; }
    }
}