﻿using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace TimeGo.Models
{
    public class BaseViewModel
    {
        public int LoginId { get; set; }
        public string LoginName { get; set; }
        public int RoleId { get; set; }
        public int CompanyId { get; set; }
        public string CompanyName { get; set; }
        public string CompanyURL { get; set; }
        
    }
}
