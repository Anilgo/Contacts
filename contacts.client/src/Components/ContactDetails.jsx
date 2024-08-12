import React from 'react';
import './ContactDetails.css';

const ContactDetails = ({ contact, onBack }) => {
  return (
    <div className="contact-details">
      <h2>Contact Details</h2>
      <form>
        <div>
          <label>Name:</label>
          <input type="text" value={contact.name} readOnly />
        </div>
        <div>
          <label>Phone Number:</label>
          <input type="text" value={contact.phoneNumber} readOnly />
        </div>
        <div>
          <label>Email:</label>
          <input type="text" value={contact.email} readOnly />
        </div>
        <div>
          <label>Company:</label>
          <input type="text" value={contact.company} readOnly />
        </div>
        <button type="button" onClick={onBack}>Back to Contacts</button>
      </form>
    </div>
  );
};

export default ContactDetails;
