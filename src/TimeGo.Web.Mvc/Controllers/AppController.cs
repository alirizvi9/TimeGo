﻿using System.Web.Mvc;

namespace TimeGo.Web.Mvc.Controllers
{
    [AllowAnonymous]
    public class AppController : Controller
    {
        [Route("TimeGoApp")]
        public ActionResult Run()
        {
            return View();
        }
    }
}
