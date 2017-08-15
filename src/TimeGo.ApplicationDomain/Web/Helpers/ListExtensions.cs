using System.Collections;
using System.Collections.Generic;
using System.Linq;

// ReSharper disable CheckNamespace
namespace System.Web.Mvc
// ReSharper restore CheckNamespace
{
    public static class ListExtensions
    {
        public static SelectList ToSelectList<T>(this IEnumerable<T> collection)
        {
            return collection.ToSelectList("Key", "Value", null);
        }

        public static SelectList ToSelectList<T>(this IEnumerable<T> collection, string selectedValue)
        {
            return collection.ToSelectList("Key", "Value", selectedValue);
        }

        public static SelectList ToSelectList<T>(this IEnumerable<T> collection,
            string dataValueField, string dataTextField)
        {
            return collection.ToSelectList(dataValueField, dataTextField, null);
        }

        public static SelectList ToSelectList<T>(this IEnumerable<T> collection,
            Func<T, object> valueProperty, Func<T, object> textProperty)
        {
            return collection.ToSelectList(valueProperty, textProperty, null);
        }

        public static SelectList ToSelectList<T>(this IEnumerable<T> collection,
            Func<T, object> valueProperty, Func<T, object> textProperty, object selectedValue)
        {
            return
                new SelectList(
                    collection.ToList()
                        .Select(x => new {Value = valueProperty(x).ToString(), Text = textProperty(x)})
                        .ToList(), "Value", "Text", selectedValue);
        }

        public static SelectList ToSelectList<T>(this IEnumerable<T> collection,
            string dataValueField, string dataTextField, object selectedValue)
        {
            return new SelectList(collection.ToList(), dataValueField, dataTextField, selectedValue);
        }

        public static MultiSelectList ToMultiSelectList<T>(this IEnumerable<T> collection,
            Func<T, object> valueProperty, Func<T, object> textProperty, IEnumerable selectedValues)
        {
            return
                new MultiSelectList(
                    collection.ToList()
                        .Select(x => new {Value = valueProperty(x).ToString(), Text = textProperty(x)})
                        .ToList(), "Value", "Text", selectedValues.Cast<object>().Select(x => x.ToString()));
        }
    }
}