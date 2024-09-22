using MediatR;

namespace LinkShortener.Application.Queries
{
    public record GetLinksQuery : IRequest<IEnumerable<string>>;
}
