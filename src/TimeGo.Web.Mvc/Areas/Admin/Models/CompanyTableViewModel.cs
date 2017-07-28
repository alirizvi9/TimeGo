using System.Collections.Generic;
using TimeGo.ApplicationDomain.Entities;

namespace TimeGo.Web.Mvc.Areas.Admin.Models
{
    public class CompanyTableViewModel
    {
        public List<Company> Companies { get; set; }

        public EditCompanyViewModel SelectedCompany { get; set; }

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