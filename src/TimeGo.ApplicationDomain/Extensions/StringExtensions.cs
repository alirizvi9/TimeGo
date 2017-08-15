using System;
using System.Linq;
using System.Text.RegularExpressions;
using System.Web;

namespace TimeGo.ApplicationDomain.Extensions
{
    public static class StringExtensions
    {
        private static readonly Regex HtmlRegex = new Regex("<.*?>", RegexOptions.Compiled);
        private static readonly Regex Upcase = new Regex("([A-Z])");

        public static string ToTitleCase(this string str)
        {
            var words = str.Split(' ');

            return string.Join(" ", words.Select(RaiseFirstLetter).ToArray());
        }

        public static string SplitCamel(this string str)
        {
            return Upcase.Replace(str, " $1").Trim();
        }

        private static string RaiseFirstLetter(string word)
        {
            var first = word[0];
            first = char.ToUpper(first);

            return first + word.Substring(1);
        }

        public static string MaxChars(this string text, int maxChars, string ellipsis = "...", int ellipsisLength = 3)
        {
            if (string.IsNullOrWhiteSpace(text)) return text;

            if (text.Length > maxChars)
            {
                text = string.Concat(text.Substring(0, maxChars - ellipsisLength), ellipsis);
            }
            return text;
        }

        public static string StripHtmlTags(this string source)
        {
            return HtmlRegex.Replace(source, string.Empty);
        }

        public static string AddQueryString(this string url, string name, object value)
        {
            url = url ?? "";

            var join = '?';
            if (url.Contains('?'))
                join = '&';

            return string.Concat(url, join, name, "=", HttpUtility.UrlEncode(value.ToString()));
        }

        public static string Duplicate(this string src, char character, int count)
        {
            return new string(character, count);
        }

        public static T AsEnum<T>(this string enumName)
        {
            return (T) Enum.Parse(typeof(T), enumName, true);
        }

        public static long AsLong(this string text)
        {
            return long.Parse(text);
        }

        public static long? AsLongSafe(this string text)
        {
            long result;
            return long.TryParse(text, out result) ? result : (long?) null;
        }

        public static long AsLongSafe(this string text, long defaultValue)
        {
            long result;
            return long.TryParse(text, out result) ? result : defaultValue;
        }

        public static DateTime? TryAsDateTime(this string text)
        {
            if (text == null)
                throw new ArgumentException("text");

            DateTime result;
            return DateTime.TryParse(text, out result) ? (DateTime?) result : null;
        }

        public static bool? TryAsBool(this string text)
        {
            var intValue = AsIntSafe(text);
            if (intValue.HasValue)
            {
                if (intValue.Value == 0)
                    return false;
                if (intValue.Value == 1)
                    return true;
            }

            bool result;
            return bool.TryParse(text, out result) ? (bool?) result : null;
        }

        public static int AsInt(this string text)
        {
            return int.Parse(text);
        }

        public static int? AsIntSafe(this string text)
        {
            int result;
            return int.TryParse(text, out result) ? result : (int?) null;
        }

        public static int AsIntSafe(this string text, int defaultValue)
        {
            int result;
            return int.TryParse(text, out result) ? result : defaultValue;
        }

        public static TimeSpan AsTimeSpanSafe(this string text, TimeSpan defaultValue)
        {
            TimeSpan result;
            return TimeSpan.TryParse(text, out result) ? result : defaultValue;
        }

        public static bool AsBool(this string text)
        {
            if (string.IsNullOrEmpty(text))
                return false;

            var intValue = AsIntSafe(text);
            if (intValue.HasValue)
            {
                if (intValue.Value == 0)
                    return false;
                if (intValue.Value == 1)
                    return true;
            }

            return bool.Parse(text);
        }

        public static decimal AsDecimal(this string text)
        {
            return decimal.Parse(text);
        }

        public static bool IsNumeric(this string text)
        {
            if (text == null)
                throw new ArgumentNullException(nameof(text));

            if (text.Length == 0 || text == "-")
                return false;

            var value = text;
            if (value.StartsWith("-"))
                value = value.Remove(0, 1);

            return value.All(char.IsDigit);
        }

        public static string Safe(this string text, string defaultValue)
        {
            return text ?? defaultValue;
        }

        public static string Safe(this string text)
        {
            return text.Safe(string.Empty);
        }

        public static string Truncate(this string text, int maxLength)
        {
            return text.Length <= maxLength ? text : text.Substring(0, maxLength);
        }
    }


}