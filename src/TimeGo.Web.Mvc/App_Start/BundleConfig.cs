using System.Web.Optimization;

namespace TimeGo.Web.Mvc
{
    public class BundleConfig
    {
        // For more information on bundling, visit http://go.microsoft.com/fwlink/?LinkId=301862
        public static void RegisterBundles(BundleCollection bundles)
        {
            //SignUp pages and Super Admin
            bundles.Add(new ScriptBundle("~/bundles/staticJs")
                .Include(
                    "~/Content/scripts/jquery-2.2.4.min.js",
                    "~/Content/scripts/jquery.validate.min.js",
                    "~/Content/scripts/bootstrap.min.js",
                    "~/Content/scripts/tether.min.js",
                    "~/Content/scripts/app.js",
                    "~/Content/scripts/daterangepicker.min.js",
                    "~/Content/scripts/select2.min.js",
                    "~/Content/scripts/jquery.maskedinput.min.js",
                    "~/Content/scripts/moment.min.js",
                    "~/Content/scripts/advanced-forms.js"));

            bundles.Add(new StyleBundle("~/bundles/staticCss").Include(
                    "~/Content/css/font-awesome.css",
                    "~/Content/css/simple-line-icons.css",
                    "~/Content/css/glyphicons.css",
                    "~/Content/css/glyphicons-filetypes.css",
                    "~/Content/css/glyphicons-social.css",
                    "~/Content/css/style.css"));

            //TimeGo App
            bundles.Add(new ScriptBundle("~/bundles/timegoJs")
                .Include(
                    "~/Content/scripts/jquery-2.2.4.min.js",
                    "~/Content/scripts/jquery.validate.min.js",
                    "~/Content/timego/inline.bundle.js",
                    "~/Content/timego/polyfills.bundle.js",
                    "~/Content/timego/styles.bundle.js",
                    "~/Content/timego/vendor.bundle.js",
                    "~/Content/timego/main.bundle.js",
                    "~/Content/timego/common.chunk.js",
                    "~/Content/timego/dashboard.module.chunk.js",
                    "~/Content/timego/period.module.chunk.js",
                    "~/Content/timego/profile.module.chunk.js",
                    "~/Content/timego/tasks.module.chunk.js",
                    "~/Content/timego/timeoff.module.chunk.js",
                    "~/Content/timego/timesheets.module.chunk.js",
                    "~/Content/timego/users.module.chunk.js",
                    "~/Content/scripts/tether.min.js",
                    "~/Content/scripts/bootstrap.min.js",
                    "~/Content/scripts/app.js"));

            bundles.Add(new StyleBundle("~/bundles/timegoCss").Include("~/Content/css/font-awesome.css",
                    "~/Content/css/simple-line-icons.css",
                    "~/Content/css/glyphicons.css",
                    "~/Content/css/glyphicons-filetypes.css",
                    "~/Content/css/glyphicons-social.css"));
        }
    }
}
