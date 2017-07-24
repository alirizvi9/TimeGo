using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace TimeGo.ApplicationDomain.Extensions
{
    public static class RandomExtensions
    {
        public const string StandardDictionary = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
        public const string PasswordDictionary = "012345679ABCDEF";

        public static bool NextBoolean(this Random random)
        {
            return random.Next(0, 2) == 0;
        }

        public static byte NextByte(this Random random)
        {
            var bytes = new byte[1];
            random.NextBytes(bytes);
            return bytes[0];
        }

        public static T NextItem<T>(this Random random, IEnumerable<T> enumerable)
        {
            var array = enumerable.ToArray();
            return array.ElementAtOrDefault(random.Next(array.Count()));
        }

        public static string NextString(this Random random, string dictionary = StandardDictionary, int length = 8, string shouldStartWith = "")
        {
            const int byteSize = 0x100;
            var allowedCharSet = new HashSet<char>(dictionary).ToArray();
            if (byteSize < allowedCharSet.Length)
                throw new ArgumentException($"allowedChars may contain no more than {byteSize} characters.");

            // Guid.NewGuid and System.Random are not particularly random. By using a
            // cryptographically-secure random number generator, the caller is always
            // protected, regardless of use.
            using (var rng = new System.Security.Cryptography.RNGCryptoServiceProvider())
            {
                var result = new StringBuilder(length);
                result.Append(shouldStartWith);
                var buf = new byte[128];
                while (result.Length < length)
                {
                    rng.GetBytes(buf);
                    for (var i = 0; i < buf.Length && result.Length < length; ++i)
                    {
                        // Divide the byte into allowedCharSet-sized groups. If the
                        // random value falls into the last group and the last group is
                        // too small to choose from the entire allowedCharSet, ignore
                        // the value in order to avoid biasing the result.
                        var outOfRangeStart = byteSize - (byteSize % allowedCharSet.Length);
                        if (outOfRangeStart <= buf[i])
                            continue;
                        result.Append(allowedCharSet[buf[i] % allowedCharSet.Length]);
                    }
                }
                return result.ToString();
            }
        }
    }
}