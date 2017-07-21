using System.Web;
using System.Web.Optimization;

namespace TimeGo.Web.Mvc
{
    public class BundleConfig
    {
        // For more information on bundling, visit http://go.microsoft.com/fwlink/?LinkId=301862
        public static void RegisterBundles(BundleCollection bundles)
        {
            bundles.Add(new ScriptBundle("~/bundles/app")
                .IncludeDirectory("~/Content/", "*.chunk.js")
                .Include(
                      "~/Content/inline.bundle.js",
                      "~/Content/polyfills.bundle.js",
                      "~/Content/scripts.bundle.js",
                      "~/Content/styles.bundle.js",
                      "~/Content/vendor.bundle.js",
                      "~/Content/main.bundle.js"));

            bundles.Add(new StyleBundle("~/bundles/css").Include(
                      "~/Content/assets/css/font-awesome.min.css",
                      "~/Content/assets/css/simple-line-icons.css",
                      "~/Content/assets/css/glyphicons.css",
                      "~/Content/assets/css/glyphicons-filetypes.css",
                      "~/Content/assets/css/glyphicons-social.css"));
        }
    }
}
