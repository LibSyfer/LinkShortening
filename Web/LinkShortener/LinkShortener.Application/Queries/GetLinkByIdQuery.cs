using LinkShortener.Domain.Entities;
using MediatR;

namespace LinkShortener.Application.Queries
{
    public record GetLinkByIdQuery(string Id) : IRequest<Link?>;
}
