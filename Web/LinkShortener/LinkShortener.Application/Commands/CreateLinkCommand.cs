using MediatR;

namespace LinkShortener.Application.Commands
{
    public record CreateLinkCommand(string SourceLink, DateTime? ExpireAt) : IRequest<string>;
}
