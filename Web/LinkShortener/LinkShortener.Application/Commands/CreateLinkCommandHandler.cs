using LinkShortener.Application.Interfaces;
using LinkShortener.Domain.Entities;
using MediatR;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace LinkShortener.Application.Commands
{
    public class CreateLinkCommandHandler : IRequestHandler<CreateLinkCommand, string>
    {
        private readonly ILinkRepository _linkRepository;

        public CreateLinkCommandHandler(ILinkRepository linkRepository)
        {
            _linkRepository = linkRepository;
        }

        public Task<string> Handle(CreateLinkCommand request, CancellationToken cancellationToken)
        {
            var link = new Link
            {
                SourceLink = request.SourceLink
            };

            return _linkRepository.CreateAsync(link);
        }
    }
}
