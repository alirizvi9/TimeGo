using System.Web.Mvc;

namespace TimeGo.ApplicationDomain.Web.ActionFilters
{
    public abstract class ModelStateTempDataTransfer : ActionFilterAttribute
    {
        protected static readonly string DefaultKey = typeof (ModelStateTempDataTransfer).FullName;

        protected ModelStateTempDataTransfer()
        {
            Key = DefaultKey;
        }

        public string Key { get; set; }
    }
}