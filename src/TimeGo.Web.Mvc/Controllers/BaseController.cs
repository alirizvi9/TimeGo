using System;
using System.Web.Mvc;
using TimeGo.Web.Mvc.Models;

namespace TimeGo.Web.Mvc.Controllers
{
    public class BaseController : Controller {
        protected Data.TimeGoEntities Context = new Data.TimeGoEntities();

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
    }
}