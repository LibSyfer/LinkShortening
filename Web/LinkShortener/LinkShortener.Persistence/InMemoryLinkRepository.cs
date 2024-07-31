using LinkShortener.Application.Interfaces;
using LinkShortener.Domain.Entities;
using NanoidDotNet;

namespace LinkShortener.Persistence
{
    public class InMemoryLinkRepository : ILinkRepository
    {
        private List<Link> _links;

        public InMemoryLinkRepository()
        {
            _links = new List<Link>();
        }

        public Task<IEnumerable<Link>> GetAllAsync(CancellationToken cancellationToken = default)
        {
            return Task.FromResult(_links.AsEnumerable());
        }

        public async Task<string> CreateAsync(Link link, CancellationToken cancellationToken = default)
        {
            link.Id = await Nanoid.GenerateAsync(Nanoid.Alphabets.LettersAndDigits, 6);
            _links.Add(link);
            return link.Id;
        }

        public Task<Link?> GetByIdAsync(string id, CancellationToken cancellationToken = default)
        {
            return Task.FromResult(_links.Find(e => e.Id == id));
        }
    }
}
