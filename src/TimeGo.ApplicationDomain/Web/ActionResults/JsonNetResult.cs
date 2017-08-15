using System;
using System.Web.Mvc;
using Newtonsoft.Json;

namespace TimeGo.ApplicationDomain.Web.ActionResults
{
    public class JsonNetResult : JsonResult
    {
        public override void ExecuteResult(ControllerContext context)
        {
            if (context == null)
                throw new ArgumentNullException(nameof(context));

            if (JsonRequestBehavior == JsonRequestBehavior.DenyGet && string.Equals(context.HttpContext.Request.HttpMethod, "GET", StringComparison.OrdinalIgnoreCase))
                throw new InvalidOperationException("Get JSON not allowed");

            var response = context.HttpContext.Response;
            response.ContentType = string.IsNullOrEmpty(ContentType) ? "application/json" : ContentType;
            if (ContentEncoding != null)
                response.ContentEncoding = ContentEncoding;
            if (Data == null)
                return;

            var serializerSettings = new JsonSerializerSettings { NullValueHandling = NullValueHandling.Ignore };
            if (RecursionLimit.HasValue)
                serializerSettings.MaxDepth = RecursionLimit.Value;

            response.Write(JsonConvert.SerializeObject(Data, serializerSettings));
        }
    }
}
