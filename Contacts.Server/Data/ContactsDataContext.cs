using System;
using Contacts.Server.Models;
using Microsoft.EntityFrameworkCore;

namespace Contacts.Server.Data;

public class ContactsDataContext : DbContext
{
    public ContactsDataContext(DbContextOptions<ContactsDataContext> options) : base(options)
    {

    }


    protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
    {
        base.OnConfiguring(optionsBuilder);
        optionsBuilder.UseSqlServer("Server=DESKTOP-3EN3O01\\SQLEXPRESS;DataBase=ContactsDB;Integrated Security=True;Connect Timeout=30;Encrypt=True;Trust Server Certificate=True;Application Intent=ReadWrite;Multi Subnet Failover=False");
    }
    public DbSet<Contact> Contacts { get; set; }
}
