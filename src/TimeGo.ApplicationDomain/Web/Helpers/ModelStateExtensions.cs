using System.Linq.Expressions;

// ReSharper disable CheckNamespace
namespace System.Web.Mvc
// ReSharper restore CheckNamespace
{
    public static class ModelStateExtensions
    {
        public static void AddModelError<T>(this ModelStateDictionary modelState,
            Expression<Func<T, object>> property,
            string message)
        {
            var expressionText = ExpressionHelper.GetExpressionText(property);
            modelState.AddModelError(expressionText, message);
        }
    }
}