using System.Linq;
using TimeGo.Data;

namespace TimeGo.ApplicationDomain
{
    public class CompanyService : ICompanyService
    {
        private readonly TimeGoEntities _context;

        public CompanyService(TimeGoEntities context)
        {
            _context = context;
        }
        public Company GetCompanyFromUrl(string url)
        {
            var subDomain = url.Split('.')[0].Replace("http://", "").Replace("https://", "");
            var company = _context.Companies.Where(c => c.TimeGoURL == subDomain).FirstOrDefault();
            return company;
        }
    }
}