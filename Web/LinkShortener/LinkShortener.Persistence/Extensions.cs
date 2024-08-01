using LinkShortener.Application.Interfaces;
using Microsoft.Extensions.DependencyInjection;

namespace LinkShortener.Persistence
{
    public static class Extensions
    {
        public static IServiceCollection AddDataProvider(this IServiceCollection services)
        {
            services.AddSingleton<ILinkRepository, InMemoryLinkRepository>();

            return services;
        }
    }
}
