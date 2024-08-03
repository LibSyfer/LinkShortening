using LinkShortener.Application.Commands;
using LinkShortener.Application.Queries;
using MediatR;
using Microsoft.AspNetCore.Mvc;

namespace LinkShortener.API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class LinkController : ControllerBase
    {
        private readonly ILogger<LinkController> _logger;
        private readonly IMediator _mediator;

        public LinkController(ILogger<LinkController> logger, IMediator mediator)
        {
            _logger = logger;
            _mediator = mediator;
        }


        /// <summary>
        /// Get all links in system.
        /// </summary>
        /// <returns></returns>
        [HttpGet]
        [ActionName(nameof(GetAllAsync))]
        public async Task<ActionResult> GetAllAsync()
        {
            return Ok(await _mediator.Send(new GetLinksQuery()));
        }

        /// <summary>
        /// Add new link in system.
        /// </summary>
        /// <param name="command">New link params.</param>
        /// <returns></returns>
        [HttpPut]
        [ActionName(nameof(CreateAsync))]
        public async Task<ActionResult> CreateAsync(CreateLinkCommand command)
        {
            var createdLinkId = await _mediator.Send(command);
            if (createdLinkId == null)
            {
                return BadRequest();
            }

            return CreatedAtAction(nameof(GetByIdAync), new { id = createdLinkId }, new { Id = createdLinkId });

        }

        /// <summary>
        /// Get link by id.
        /// </summary>
        /// <param name="id">Link id.</param>
        /// <returns></returns>
        [HttpGet("{id}")]
        [ActionName(nameof(GetByIdAync))]
        public async Task<ActionResult> GetByIdAync(string id)
        {
            var sourceLink = await _mediator.Send(new GetLinkByIdQuery(id));
            if (sourceLink == null)
            {
                return NotFound();
            }

            return Ok(new { sourceLink });
        }
    }
}
