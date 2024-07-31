using LinkShortener.Domain.Entities;
using MediatR;

namespace LinkShortener.Application.Queries
{
    public record GetLinksQuery : IRequest<IEnumerable<Link>>;
}
