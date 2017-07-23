using Microsoft.AspNet.SignalR;
using Microsoft.AspNet.SignalR.Hubs;
using TimeGo.ApplicationDomain.Persistance;

namespace TimeGo.ApplicationDomain.SignalR.Implementation
{
    public class CollaborationHub : Hub, ICollaborationHub
    {
        private readonly IUnitOfWorkProvider _unitOfWorkProvider;
        private readonly IRepository _repository;
        private readonly IHubConnectionContext<dynamic> _clients;
        private readonly TimeGoSettings _settings;

        public CollaborationHub(
            IUnitOfWorkProvider unitOfWorkProvider, 
            IRepository repository, 
            IHubConnectionContext<dynamic> clients,
            TimeGoSettings settings)
        {
            _unitOfWorkProvider = unitOfWorkProvider;
            _repository = repository;
            _clients = clients;
            _settings = settings;
        }
    }
}