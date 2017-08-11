namespace TimeGo.ApplicationDomain.Models
{
    public class PagingModel
    {
        public string OrderBy { get; set; }
        public int Page { get; set; }
        public int PageSize { get; set; }
    }
}
