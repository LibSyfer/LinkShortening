using LinkShortener.Application.Interfaces;
using LinkShortener.Domain.Entities;
using MediatR;

namespace LinkShortener.Application.Queries
{
    public class GetLinkByIdQueryHandler : IRequestHandler<GetLinkByIdQuery, string?>
    {
        private readonly ILinkRepository _linkRepository;

        public GetLinkByIdQueryHandler(ILinkRepository linkRepository)
        {
            _linkRepository = linkRepository;
        }

        public async Task<string?> Handle(GetLinkByIdQuery request, CancellationToken cancellationToken)
        {
            var link = await _linkRepository.GetByIdAsync(request.Id, cancellationToken);
            return link?.SourceLink;
        }
    }
}
