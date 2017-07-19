using System.Collections.Generic;
using TimeGo.ApplicationDomain.Models.ViewModels;
using TimeGo.Data;

namespace TimeGo.ApplicationDomain
{
    public interface IAccountService
    {
        ViewError SignUp(SignUpViewModel model);
        List<Timezone> GetTimeZones();
    }
}
