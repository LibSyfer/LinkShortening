using LinkShortener.Domain.Entities;

namespace LinkShortener.Application.Interfaces
{
    public interface ILinkRepository
    {
        Task<IEnumerable<Link>> GetAllAsync(CancellationToken cancellationToken = default);

        Task<Link?> GetByIdAsync(string id, CancellationToken cancellationToken = default);

        Task<string> CreateAsync(Link link, CancellationToken cancellationToken = default);
    }
}
