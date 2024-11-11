using System;
using Contacts.Server.Data;
using Contacts.Server.Models;
using Microsoft.EntityFrameworkCore;
using Microsoft.VisualBasic;

namespace Contacts.Server.Services;

public class ContactsService : IContactsService
{

    private readonly ContactsDataContext _context;

    public ContactsService(ContactsDataContext context)
{
        _context = context;
    }


    public async Task<Contact> CreateContact(Contact contact)
    {
        await _context.AddAsync(contact);
        await _context.SaveChangesAsync();
        return contact;
    }

    public async Task<List<Contact>> DeleteContact(List<Contact> contacts)
    {

        _context.Contacts.RemoveRange(contacts);
        await _context.SaveChangesAsync();
        return contacts;
    }

    public async Task<Contact> EditContact(Contact contact)
    {
        Contact? existingContact = await _context.Contacts.FindAsync(contact.ID);
        if (existingContact == null)
        {
            return null;
        }
        existingContact.Name = contact.Name;
        existingContact.PhoneNumber = contact.PhoneNumber;
        existingContact.Email = contact.Email;
        existingContact.Company = contact.Company;

        await _context.SaveChangesAsync();
        return existingContact;
    }

    public async Task<List<Contact>> GetContacts()
    {
        List<Contact> contactsList = await _context.Contacts.ToListAsync();
        return contactsList;
    }
};