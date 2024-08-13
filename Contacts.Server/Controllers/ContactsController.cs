using Microsoft.AspNetCore.Mvc;
using YourNamespace.Models;
using System.Collections.Generic;

namespace YourNamespace.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class ContactsController : ControllerBase
    {
        private static readonly List<Contact> Contacts = new List<Contact>
        {
            new Contact { Name = "John Doe", PhoneNumber = "123-456-7890", Email = "john.doe@example.com", Company = "Example Inc." },
            new Contact { Name = "Jane Smith", PhoneNumber = "987-654-3210", Email = "jane.smith@example.com", Company = "Sample LLC" },
            new Contact { Name = "Alice Johnson", PhoneNumber = "555-123-4567", Email = "alice.johnson@example.com", Company = "Tech Solutions" },
            new Contact { Name = "Bob Brown", PhoneNumber = "555-234-5678", Email = "bob.brown@example.com", Company = "Innovatech" },
            new Contact { Name = "Charlie Davis", PhoneNumber = "555-345-6789", Email = "charlie.davis@example.com", Company = "Creative Minds" },
            new Contact { Name = "Diana Evans", PhoneNumber = "555-456-7890", Email = "diana.evans@example.com", Company = "Design Pro" },
            new Contact { Name = "Ethan Foster", PhoneNumber = "555-567-8901", Email = "ethan.foster@example.com", Company = "BuildIt" },
            new Contact { Name = "Fiona Green", PhoneNumber = "555-678-9012", Email = "fiona.green@example.com", Company = "GreenTech" },
            new Contact { Name = "George Harris", PhoneNumber = "555-789-0123", Email = "george.harris@example.com", Company = "Harris & Co." },
            new Contact { Name = "Hannah Irving", PhoneNumber = "555-890-1234", Email = "hannah.irving@example.com", Company = "Irving Solutions" },
            new Contact { Name = "Ian Jackson", PhoneNumber = "555-901-2345", Email = "ian.jackson@example.com", Company = "Jackson Enterprises" },
            new Contact { Name = "Julia King", PhoneNumber = "555-012-3456", Email = "julia.king@example.com", Company = "King's Tech" },
            new Contact { Name = "Kevin Lee", PhoneNumber = "555-123-4567", Email = "kevin.lee@example.com", Company = "Lee Innovations" },
            new Contact { Name = "Laura Martinez", PhoneNumber = "555-234-5678", Email = "laura.martinez@example.com", Company = "Martinez Design" },
            new Contact { Name = "Michael Nelson", PhoneNumber = "555-345-6789", Email = "michael.nelson@example.com", Company = "Nelson & Co." },
            new Contact { Name = "Nina Owens", PhoneNumber = "555-456-7890", Email = "nina.owens@example.com", Company = "Owens Tech" },
            new Contact { Name = "Oscar Perez", PhoneNumber = "555-567-8901", Email = "oscar.perez@example.com", Company = "Perez Solutions" },
            new Contact { Name = "Paula Quinn", PhoneNumber = "555-678-9012", Email = "paula.quinn@example.com", Company = "Quinn Enterprises" },
            new Contact { Name = "Robert Smith", PhoneNumber = "555-789-0123", Email = "robert.smith@example.com", Company = "Smith & Sons" },
            new Contact { Name = "Sophia Turner", PhoneNumber = "555-890-1234", Email = "sophia.turner@example.com", Company = "Turner Innovations" }
        };

        [HttpGet]
        public ActionResult<IEnumerable<Contact>> GetContacts()
        {
            return Ok(Contacts);
        }

        [HttpPost]
        public IActionResult Post([FromBody] Contact contact)
        {
            Contacts.Add(contact);
            return Ok(contact);
        }
        [HttpPut]
        public IActionResult Put([FromBody] Contact contact)
        {
            var existingContact = Contacts.Find(c => c.Name == contact.Name);
            if (existingContact == null)
            {
                return NotFound();
            }
            existingContact.PhoneNumber = contact.PhoneNumber;
            existingContact.Email = contact.Email;
            existingContact.Company = contact.Company;
            return Ok(existingContact);
        }
  
        [HttpDelete]
        public IActionResult DeleteMany([FromBody] List<Contact> contacts)
        {
            foreach (var contact in contacts)
            {
                var existingContact = Contacts.Find(c => c.Name == contact.Name);
                if (existingContact != null)
                {
                    Contacts.Remove(existingContact);
                }
            }
            return Ok(contacts);
        }

    }
}
