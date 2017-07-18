using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace TimeGo.Web.Mvc.Models
{
    public class BaseEmailModel
    {
        public string SendFrom { get; set; }
        public string SendTo { get; set; }
        public string ReplyTo { get; set; }
        public string SendFromName { get; set; }
        public string SendToName { get; set; }
        public string ReplyToName { get; set; }
        public string Subject { get; set; }
    }
}