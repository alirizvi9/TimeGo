using System.Collections.Generic;

namespace TimeGo.ApplicationDomain.Models
{
    public class ResultsModel<T>
    {
        public List<T> Results { get; set; }
        public long Count { get; set; }
        public long Page { get; set; }
    }
}
