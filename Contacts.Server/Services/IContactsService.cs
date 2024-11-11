using System;
using Contacts.Server.Models;

namespace Contacts.Server.Services;

public interface IContactsService
{
    public Task<List<Contact>> GetContacts();
    public Task<Contact> CreateContact(Contact contact);
    public Task<Contact> EditContact(Contact contact);
    public Task<List<Contact>> DeleteContact(List<Contact> contacts);
};
