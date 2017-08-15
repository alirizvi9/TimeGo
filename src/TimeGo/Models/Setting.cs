using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;


namespace TimeGo.Models
{


    public class AdminSetting: BaseViewModel {
        public string Key { get; set; }
        public string Caption { get; set; }
        public string Value { get; set; }
    }
    
}
