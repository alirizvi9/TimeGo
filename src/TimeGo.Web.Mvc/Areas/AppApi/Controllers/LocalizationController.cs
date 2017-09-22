

using System;
using System.Collections.Generic;
using System.Globalization;
using System.Linq;
using System.Reflection;
using System.Resources;
using System.Web.Http;
using System.Web.Http.Cors;

namespace TimeGo.Web.Mvc.Areas.AppApi.Controllers
{
    [EnableCors(origins: "*", headers: "*", methods: "*")]
    public class LocalizationController : BaseApiController
    {
        [HttpGet]
        [Route("i18n/{lng}")]
        public IHttpActionResult Get(string lng)
        {
            return Json(ResourceToDictionary(typeof(Resource), lng));
        }

        private static Dictionary<string, string> ResourceToDictionary(Type resource, string languageCode)
        {
            CultureInfo culture = CultureInfo.GetCultureInfo(languageCode);
            ResourceManager rm = new ResourceManager(resource);
            PropertyInfo[] pis = resource.GetProperties(BindingFlags.Public | BindingFlags.Static);
            IEnumerable<KeyValuePair<string, string>> values =
                from pi in pis
                where pi.PropertyType == typeof(string)
                select new KeyValuePair<string, string>(
                    pi.Name,
                    rm.GetString(pi.Name, culture));
            Dictionary<string, string> dictionary = values.ToDictionary(k => k.Key, v => v.Value);
            return dictionary;
        }
    }
}