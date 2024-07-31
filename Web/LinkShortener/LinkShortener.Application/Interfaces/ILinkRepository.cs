using LinkShortener.Domain.Entities;

namespace LinkShortener.Application.Interfaces
{
    public interface ILinkRepository
    {
        Task<IEnumerable<Link>> GetAllAsync();

        Task<Link?> GetByIdAsync(string id);

        Task<string> CreateAsync(Link link);
    }
}
