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
    
    public partial class EmployeeRate
    {
        public int RateId { get; set; }
        public Nullable<int> CompanyId { get; set; }
        public Nullable<int> EmployeeId { get; set; }
        public System.DateTime EffectiveStartDate { get; set; }
        public Nullable<System.DateTime> EffectiveEndDate { get; set; }
        public float RateAmount { get; set; }
        public Nullable<int> UpdatedById { get; set; }
        public Nullable<System.DateTime> UpdatedOn { get; set; }
    
        public virtual Employee Employee { get; set; }
    }
}
