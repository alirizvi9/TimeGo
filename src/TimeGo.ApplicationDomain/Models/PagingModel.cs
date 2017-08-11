namespace TimeGo.ApplicationDomain.Models
{
    public class PagingModel
    {
        public string OrderBy { get; set; }
        public int Page { get; set; }
        public int PageSize { get; set; }
        public string SearchQuery { get; set; }
        public bool IsAscending { get; set; }
        public string SortExpression
        {
            get { return string.Format("{0} {1}", OrderBy, IsAscending ? "asc" : "desc"); }
        }
    }
}
