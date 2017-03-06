using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace TimeGo.Models {
    public class UserViewModel : BaseViewModel {
        public Data.Employee Employee { get; set; }
    }
}