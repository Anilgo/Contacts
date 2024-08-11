using Microsoft.AspNetCore.Mvc;
using YourNamespace.Models;
using System.Collections.Generic;

namespace YourNamespace.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class ContactsController : ControllerBase
    {
        private static readonly List<Contact> Contacts = new List<Contact>
        {
            new Contact { Name = "John Doe", PhoneNumber = "123-456-7890", Email = "john.doe@example.com", Company = "Example Inc." },
            new Contact { Name = "Jane Smith", PhoneNumber = "987-654-3210", Email = "jane.smith@example.com", Company = "Sample LLC" }
        };

        [HttpGet]
        public IEnumerable<Contact> Get()
        {
            return Contacts;
        }

        [HttpPost]
        public IActionResult Post([FromBody] Contact contact)
        {
            Contacts.Add(contact);
            return CreatedAtAction(nameof(Get), new { id = contact.Name }, contact);
        }
    }
}
