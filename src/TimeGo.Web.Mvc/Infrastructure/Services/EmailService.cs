using Nustache.Core;
using System;
using System.IO;
using System.Net.Mail;
using TimeGo.ApplicationDomain.Services;
using TimeGo.Web.Mvc.Infrastructure.Services.Interfaces;
using TimeGo.Web.Mvc.Models;

namespace TimeGo.Web.Mvc.Infrastructure.Services
{
    public class EmailService : IEmailService
    {
        private const string InspectionComplete = "inspection_complete";
        private readonly IHttpContextProvider _httpContextProvider;
        private readonly TimeGoServiceConfiguration _settings;

        public EmailService(IHttpContextProvider httpContextProvider, TimeGoServiceConfiguration settings)
        {
            if (settings == null)
                throw new ArgumentNullException("settings");

            _httpContextProvider = httpContextProvider;
            _settings = settings;
        }

        public void SendWelcomeEmail()
        {

        }

        public void SendConfirmEmail()
        {

        }

        protected void SendEmail<T>(T model, string templateName, bool sendAsHtml = false) where T : BaseEmailModel
        {
            var sendFrom = model.SendFrom.Trim();
            var sendTo = model.SendTo.Trim();
            var replyTo = model.ReplyTo.Trim();

            //Please use smtp4dev to debug emails 
            var emailBodyText = RenderEmailTemplate(model, templateName);
            var from = !string.IsNullOrEmpty(model.SendFromName) ? new MailAddress(sendFrom, model.SendFromName) : new MailAddress(sendFrom);
            var to = !string.IsNullOrEmpty(model.SendToName) ? new MailAddress(sendTo, model.SendToName) : new MailAddress(sendTo);

            MailMessage message;
            if (!string.IsNullOrEmpty(replyTo))
            {
                var reply = !string.IsNullOrEmpty(model.ReplyToName) ? new MailAddress(replyTo, model.ReplyToName) : new MailAddress(replyTo);
                message = new MailMessage(from, to)
                {
                    ReplyToList = { reply },
                    Body = emailBodyText,
                    Subject = model.Subject
                };
            }
            else
            {
                message = new MailMessage(from, to)
                {
                    Body = emailBodyText,
                    Subject = model.Subject
                };
            }

            try
            {
                var smtpClient = new SmtpClient();
                smtpClient.Send(message);
            }
            catch (Exception ex)
            {

            }
        }

        protected string RenderEmailTemplate<T>(T model, string templateName) where T : BaseEmailModel
        {
            var templatePath = Path.Combine(_httpContextProvider.MapPath(_settings.EmailTemplateLocation), templateName + ".nustache");
            return Render.FileToString(templatePath, model);
        }
    }
}
