using LinkShortener.Application.Interfaces;
using LinkShortener.Domain.Entities;
using MediatR;

namespace LinkShortener.Application.Queries
{
    public class GetLinkByIdQueryHandler : IRequestHandler<GetLinkByIdQuery, Link?>
    {
        private readonly ILinkRepository _linkRepository;

        public GetLinkByIdQueryHandler(ILinkRepository linkRepository)
        {
            _linkRepository = linkRepository;
        }

        public Task<Link?> Handle(GetLinkByIdQuery request, CancellationToken cancellationToken)
        {
            return _linkRepository.GetByIdAsync(request.Id, cancellationToken);
        }
    }
}
