using System;
using Contacts.Server.Models;

namespace Contacts.Server.Services;

public interface IContactsService
{
    public List<Contact> GetContacts();
    public Contact CreateContact(Contact contact);
    public Contact EditContact(Contact contact);
    public List<Contact> DeleteContact(List<Contact> contacts);
};
