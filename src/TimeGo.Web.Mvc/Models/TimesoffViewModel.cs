using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using TimeGo.ApplicationDomain.Entities;

namespace TimeGo.Web.Mvc.Models
{
    public class TimeoffViewModel : BaseViewModel
    {
        public List<TimeoffRequest> TimeoffRequests { get; set; }
        [Required]
        public DateTime? StartDate { get; set; }
        [Required]
        public DateTime? EndDate { get; set; }
        [Required]
        public DateTime? ReturningToWork { get; set; }
        public String Reason { get; set; }
    }
}
