using System;
using System.Collections.Generic;

namespace TimeGo.ApplicationDomain.Extensions
{
    public static class NumberExtensions
    {
        public static void Times(this int i, Action<int> action)
        {
            for (var n = 0; n < i; n++) action(n);
        }

        public static void Times(this int i, Action action)
        {
            i.Times(x => action());
        }

        public static IEnumerable<T> Times<T>(this int i, Func<int,T> func)
        {
            var linkedList = new LinkedList<T>();
            for (var n = 0; n < i; ++n)
                linkedList.AddLast(func(n));
            return linkedList;
        }

        public static IEnumerable<T> Times<T>(this int i, Func<T> func)
        {
            var linkedList = new LinkedList<T>();
            i.Times(() => { linkedList.AddLast(func()); });
            return linkedList;
        }

        public static IEnumerable<int> To(this int from, int to)
        {
            if (from <= to)
                for (var i = from; i <= to; i++) yield return i;
            else
                for (var i = from; i >= to; i--) yield return i;
        }

        public static bool Between(this int num, int left, int right)
        {
            return num >= left && num <= right;
        }

        public static int CompareTo(this long? num, long? value)
        {
            if (!num.HasValue && value.HasValue)
                return -1;
            if (num.HasValue && !value.HasValue)
                return 1;
            return num?.CompareTo(value.Value) ?? 0;
        }

        public static string ToLetters(this int index)
        {
            if (index < 0)
                throw new ArgumentException("index < 0");

            var result = string.Empty;
            while (--index >= 0)
            {
                result = (char) ('A' + index % 26) + result;
                index /= 26;
            }

            return result;
        }

    }
}