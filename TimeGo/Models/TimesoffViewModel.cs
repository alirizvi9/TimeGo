using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Web.Mvc;

namespace TimeGo.Models
{
    public class TimeoffViewModel : BaseViewModel
    {
        public List<Data.TimeoffRequest> TimeoffRequests { get; set; }
        [Required]
        public DateTime StartDate { get; set; }
        [Required]
        public DateTime EndDate { get; set; }
        [Required]
        public DateTime ReturningToWork { get; set; }
        public String Reason { get; set; }
    }
}
