using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using TimeGo.ApplicationDomain.Entities;

namespace TimeGo.Models {
    public class UserViewModel : BaseViewModel {
        public Employee Employee { get; set; }
    }
}