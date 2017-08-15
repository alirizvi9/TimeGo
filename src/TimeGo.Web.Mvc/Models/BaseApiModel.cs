namespace TimeGo.Web.Mvc.Models
{
    public class BaseApiModel
    {
        public bool IsSuccess { get; set; }
        public dynamic Id { get; set; }
        public dynamic Data { get; set; }
        public string Message { get; set; }
    }
}