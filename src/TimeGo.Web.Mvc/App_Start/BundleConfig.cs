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
                    "~/Content/scrips/jquery.js",
                    "~/Content/scrips/bootstrap.js",
                    "~/Content/scrips/tether.js"));

            bundles.Add(new StyleBundle("~/bundles/staticCss").Include(
                    "~/Content/css/font-awesome.css",
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
