using Microsoft.AspNetCore.Mvc;
using Contacts.Server.Models;
using Contacts.Server.Services;


namespace Contacts.Server.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class ContactsController : ControllerBase
    {
        private readonly IContactsService _contactsService;

        public ContactsController(IContactsService contactsService)
        {
            _contactsService = contactsService;
        }

        [HttpGet]
        public async Task<ActionResult<List<Contact>>> GetContacts()
        {
            var result = _contactsService.GetContacts();
            if (result is null)
                return NotFound("No Contacts");
            return Ok(result);
        }

        [HttpPost]
        public async Task<ActionResult> CreateContact([FromBody] Contact contact)
        {
            var result = _contactsService.CreateContact(contact);
            if (result is null)
                return NotFound();
            return Ok();
        }

        [HttpPut]
        public async Task<ActionResult> EditContact([FromBody] Contact contact)
        {
            var result = _contactsService.EditContact(contact);
            if (result is null)
                NotFound(result);
            return Ok(result);
        }

        [HttpDelete]
        public async Task<ActionResult> DeleteMany([FromBody] List<Contact> contacts)
        {
            var result = _contactsService.DeleteContact(contacts);
            if (result is null)
                return NotFound("No Contacts Deleted");
            return Ok(result);

        }

    }
}
