using System;
using Contacts.Server.Models;

namespace Contacts.Server.Services;

public class ContactsService : IContactsService
{

    private static readonly List<Contact> ContactsList = new List<Contact>
        {
            new Contact { ID = 1, Name = "John Doe", PhoneNumber = "123-456-7890", Email = "john.doe@example.com", Company = "Example Inc." },
            new Contact { ID = 2, Name = "Jane Smith", PhoneNumber = "987-654-3210", Email = "jane.smith@example.com", Company = "Sample LLC" },
            new Contact { ID = 4, Name = "Alice Johnson", PhoneNumber = "555-123-4567", Email = "alice.johnson@example.com", Company = "Tech Solutions" },
            new Contact { ID = 5, Name = "Bob Brown", PhoneNumber = "555-234-5678", Email = "bob.brown@example.com", Company = "Innovatech" },
            new Contact { ID = 6, Name = "Charlie Davis", PhoneNumber = "555-345-6789", Email = "charlie.davis@example.com", Company = "Creative Minds" },
            new Contact { ID = 7, Name = "Diana Evans", PhoneNumber = "555-456-7890", Email = "diana.evans@example.com", Company = "Design Pro" },
            new Contact { ID = 8, Name = "Ethan Foster", PhoneNumber = "555-567-8901", Email = "ethan.foster@example.com", Company = "BuildIt" },
            new Contact { ID = 9, Name = "Fiona Green", PhoneNumber = "555-678-9012", Email = "fiona.green@example.com", Company = "GreenTech" },
            new Contact { ID = 10, Name = "George Harris", PhoneNumber = "555-789-0123", Email = "george.harris@example.com", Company = "Harris & Co." },
            new Contact { ID = 11, Name = "Hannah Irving", PhoneNumber = "555-890-1234", Email = "hannah.irving@example.com", Company = "Irving Solutions" },
            new Contact { ID = 12, Name = "Ian Jackson", PhoneNumber = "555-901-2345", Email = "ian.jackson@example.com", Company = "Jackson Enterprises" },
            new Contact { ID = 13, Name = "Julia King", PhoneNumber = "555-012-3456", Email = "julia.king@example.com", Company = "King's Tech" },
            new Contact { ID = 14, Name = "Kevin Lee", PhoneNumber = "555-123-4567", Email = "kevin.lee@example.com", Company = "Lee Innovations" },
            new Contact { ID = 15, Name = "Laura Martinez", PhoneNumber = "555-234-5678", Email = "laura.martinez@example.com", Company = "Martinez Design" },
            new Contact { ID = 16, Name = "Michael Nelson", PhoneNumber = "555-345-6789", Email = "michael.nelson@example.com", Company = "Nelson & Co." },
            new Contact { ID = 17, Name = "Nina Owens", PhoneNumber = "555-456-7890", Email = "nina.owens@example.com", Company = "Owens Tech" },
            new Contact { ID = 18, Name = "Oscar Perez", PhoneNumber = "555-567-8901", Email = "oscar.perez@example.com", Company = "Perez Solutions" },
            new Contact { ID = 19, Name = "Paula Quinn", PhoneNumber = "555-678-9012", Email = "paula.quinn@example.com", Company = "Quinn Enterprises" },
            new Contact { ID = 20, Name = "Robert Smith", PhoneNumber = "555-789-0123", Email = "robert.smith@example.com", Company = "Smith & Sons" },
            new Contact { ID = 21, Name = "Sophia Turner", PhoneNumber = "555-890-1234", Email = "sophia.turner@example.com", Company = "Turner Innovations" }
        };

    public Contact CreateContact(Contact contact)
    {
        var _contact = contact;
        if (_contact is null)
            return null;
        _contact.ID = ContactsList.LastOrDefault().ID + 1;
        ContactsList.Add(_contact);
        return _contact;
    }

    public List<Contact> DeleteContact(List<Contact> contacts)
    {
        List<Contact> deletedContacts = new List<Contact>();
        foreach (var contact in contacts)
        {
            var existingContact = ContactsList.Find(c => c.ID == contact.ID);
            if (existingContact != null)
            {
                deletedContacts.Add(existingContact);
                ContactsList.Remove(existingContact);
            }
        }
        return deletedContacts;
    }

    public Contact EditContact(Contact contact)
    {
        var existingContact = ContactsList.Find(c => c.ID == contact.ID);
        if (existingContact == null)
        {
            return null;
        }
        existingContact.Name = contact.Name;
        existingContact.PhoneNumber = contact.PhoneNumber;
        existingContact.Email = contact.Email;
        existingContact.Company = contact.Company;
        return existingContact;
    }

    public List<Contact> GetContacts()
    {
        return ContactsList;
    }
};