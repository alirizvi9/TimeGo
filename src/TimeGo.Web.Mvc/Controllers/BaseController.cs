using System;
using System.Web.Mvc;
using TimeGo.Data;
using TimeGo.Web.Mvc.Infrastructure.Services.Interfaces;
using TimeGo.Web.Mvc.Models;

namespace TimeGo.Web.Mvc.Controllers
{
    public class BaseController : Controller {
        protected TimeGoEntities _context;
        protected ICompanyService _companyService;

        public BaseController(TimeGoEntities context, ICompanyService companyService)
        {
            _companyService = companyService;
            _context = context;
        }

        public void PopulateModel(BaseViewModel Model) {
            if (Session["LoginId"] == null)
                return;

            Model.LoginId = (int)Session["LoginId"];
            Model.LoginName = (String)Session["LoginName"];
            Model.RoleId = (int)Session["RoleId"];

            Model.CompanyId = (int)Session["CompanyId"];
            Model.CompanyName = (String)Session["CompanyName"];
            Model.CompanyURL = (String)Session["CompanyURL"];

        }


        public ActionResult Expired(String CompanyURL) {
            if (CompanyURL == null)
                return RedirectPermanent("/");
            else
                return RedirectPermanent("/"+ CompanyURL);
        }

        public Company Company
        {
            get
            {
                var url = Url.RequestContext.HttpContext.Request.Url.AbsoluteUri;
                return _companyService.GetCompanyFromUrl(url);
            }
        }
    }
}