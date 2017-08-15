using PagedList;

namespace TimeGo.Web.Mvc.Areas.Admin.Models
{
    public class TableViewModel<T>
    {
        public StaticPagedList<T> List { get; set; }

        public string SortBy { get; set; }
        public bool IsAscending { get; set; }

        public string SortExpression
        {
            get { return string.Format("{0} {1}", SortBy, IsAscending ? "asc" : "desc"); }
        }

        public bool SortOrder(string newSortBy)
        {
            return newSortBy != SortBy || !IsAscending;
        }
    }
}