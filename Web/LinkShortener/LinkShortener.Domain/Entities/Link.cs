namespace LinkShortener.Domain.Entities
{
    public class Link
    {
        public string Id { get; set; }

        public required string SourceLink { get; set; }

        public DateTime? ExpireAt { get; set; }
    }
}
