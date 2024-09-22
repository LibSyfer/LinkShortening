using LinkShortener.Application.Interfaces;
using MediatR;

namespace LinkShortener.Application.Queries
{
    public class GetLinksQueryHandler : IRequestHandler<GetLinksQuery, IEnumerable<string>>
    {
        private readonly ILinkRepository _linkRepository;

        public GetLinksQueryHandler(ILinkRepository linkRepository)
        {
            _linkRepository = linkRepository;
        }

        public async Task<IEnumerable<string>> Handle(GetLinksQuery request, CancellationToken cancellationToken)
        {
            var links = await _linkRepository.GetAllAsync(cancellationToken);
            return links.Select(e => e.SourceLink).AsEnumerable();
        }
    }
}
