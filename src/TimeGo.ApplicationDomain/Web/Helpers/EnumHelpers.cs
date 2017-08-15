using System;
using System.Linq;
using System.Web.Mvc;
using TimeGo.ApplicationDomain.Extensions;

// ReSharper disable CheckNamespace
namespace FreeSurvey.Web.Helpers
// ReSharper restore CheckNamespace
{
    public static class EnumHelpers
    {
        public static SelectList ToSelectList<TEnum>()
        {
            var values = from TEnum e in Enum.GetValues(typeof (TEnum))
                select new {ID = e, Name = e.ToString().SplitCamel()};

            return new SelectList(values, "Id", "Name");
        }

        public static string ToLowerString(object value)
        {
            return value.ToString().ToLower();
        }
    }
}