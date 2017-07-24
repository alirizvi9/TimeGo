using System;
using System.IO;
using System.Net;
using System.Net.Mail;
using Nustache.Core;
using TimeGo.ApplicationDomain.Entities;
using TimeGo.ApplicationDomain.Models.Email;

namespace TimeGo.ApplicationDomain.Services.Implementation
{
    public class EmailService : IEmailService
    {
        private const string InspectionComplete = "inspection_complete";

        private readonly IHttpContextProvider _httpContextProvider;
        private readonly TimeGoSettings _settings;

        public EmailService(IHttpContextProvider httpContextProvider, TimeGoSettings settings)
        {
            if (settings == null)
                throw new ArgumentNullException(nameof(settings));

            _httpContextProvider = httpContextProvider;
            _settings = settings;
        }

        public void SendWelcomeEmail(Employee user)
        {
            var emailModel = new BaseEmailModel(user, _settings) {Subject = Resource.WelcomeEmail};
            SendEmail(emailModel, "WelcomeEmail");
        }

        public void SendConfirmEmail(Employee user, string code)
        {
            var url = $"http://{_settings.SiteUrl}/Account/ConfirmEmail?userId={user.Id}&code={code}";
            var emailModel = new ConfirmEmailModel(user, _settings, url) {Subject = Resource.ConfirmEmailTitle};
            SendEmail(emailModel, "ConfirmEmail");
        }

        public void SendForgotPasswordEmail(Employee user, string code)
        {
            var url = $"http://{_settings.SiteUrl}/Account/ResetPassword?userId={user.Id}&code={code}";
            var emailModel = new ForgotPasswordEmailModel(user, _settings, url);
            emailModel.Subject = Resource.ForgotPasswordEmail;
            SendEmail(emailModel, "ChangePasswordEmail");
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
                var smtpClient = new SmtpClient()
                {
                    Host = "smtp.gmail.com",
                    Port = 587,
                    EnableSsl = true,
                    Credentials = new NetworkCredential("TimeGoTest","Testpassword"),
                    DeliveryMethod = SmtpDeliveryMethod.Network
                };
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
