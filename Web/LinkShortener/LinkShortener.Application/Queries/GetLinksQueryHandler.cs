using LinkShortener.Application.Interfaces;
using LinkShortener.Domain.Entities;
using MediatR;

namespace LinkShortener.Application.Queries
{
    public class GetLinksQueryHandler : IRequestHandler<GetLinksQuery, IEnumerable<Link>>
    {
        private readonly ILinkRepository _linkRepository;

        public GetLinksQueryHandler(ILinkRepository linkRepository)
        {
            _linkRepository = linkRepository;
        }

        public Task<IEnumerable<Link>> Handle(GetLinksQuery request, CancellationToken cancellationToken)
        {
            return _linkRepository.GetAllAsync(cancellationToken);
        }
    }
}
