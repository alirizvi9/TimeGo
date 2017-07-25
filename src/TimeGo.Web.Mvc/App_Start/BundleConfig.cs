using System.Web.Optimization;

namespace TimeGo.Web.Mvc
{
    public class BundleConfig
    {
        // For more information on bundling, visit http://go.microsoft.com/fwlink/?LinkId=301862
        public static void RegisterBundles(BundleCollection bundles)
        {
            //SignUp pages and Super Admin
            bundles.Add(new ScriptBundle("~/bundles/static")
                .Include(
                    "~/Content/scrips/jquery.min.js",
                    "~/Content/scrips/tether.min.js",
                    "~/Content/scrips/bootstrap.min.js",
                    "~/Content/scrips/pace.min.js"));

            bundles.Add(new StyleBundle("~/bundles/static").Include(
                    "~/Content/css/font-awesome.min.css",
                    "~/Content/css/simple-line-icons.css",
                    "~/Content/css/glyphicons.css",
                    "~/Content/css/glyphicons-filetypes.css",
                    "~/Content/css/glyphicons-social.css",
                    "~/Content/css/style.css",
                    "~/Content/css/TimeGo.css"));

            //TimeGo App
            bundles.Add(new ScriptBundle("~/bundles/timego")
                .IncludeDirectory("~/Content/", "*.chunk.js")
                .Include(
                    "~/Content/timego/inline.bundle.js",
                    "~/Content/timego/polyfills.bundle.js",
                    "~/Content/timego/scripts.bundle.js",
                    "~/Content/timego/styles.bundle.js",
                    "~/Content/timego/vendor.bundle.js",
                    "~/Content/timego/main.bundle.js"));

            bundles.Add(new StyleBundle("~/bundles/timego").Include(
                    "~/Content/timego/assets/css/font-awesome.min.css",
                    "~/Content/timego/assets/css/simple-line-icons.css",
                    "~/Content/timego/assets/css/glyphicons.css",
                    "~/Content/timego/assets/css/glyphicons-filetypes.css",
                    "~/Content/timego/assets/css/glyphicons-social.css"));
        }
    }
}
