namespace Contacts.Server.Models
{
    public class Contact
    {
        public int ID { get; set; }
        public string? Name { get; set; }
        public string? PhoneNumber { get; set; }
        public string? Email { get; set; }
        public string? Company { get; set; }
    }
}
