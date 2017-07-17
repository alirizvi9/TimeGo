using System;
using System.IO;
using System.Reflection;

namespace TimeGo.Tests.Base.Extensions
{
    public static class AssemblyExtensions
    {
        public static string LoadResourceAsText(this Assembly assembly, string resourceName)
        {
            using (var stream = assembly.GetManifestResourceStream(resourceName))
            {
                if (stream == null)
                    throw new InvalidOperationException($"Resource with name {resourceName} is not found");

                using (var reader = new StreamReader(stream))
                {
                    return reader.ReadToEnd();
                }
            }
        }

        public static string GetCurrentExecutingDirectory(this Assembly assembly)
        {
            string filePath = new Uri(Assembly.GetExecutingAssembly().CodeBase).LocalPath;
            return Path.GetDirectoryName(filePath);
        }
    }
}