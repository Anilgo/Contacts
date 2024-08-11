import { useEffect, useState } from 'react';
import './App.css';

function App() {
    const [contacts, setContacts] = useState();

    useEffect(() => {
        populateContactData();
    }, []);

    const contents = contacts === undefined
        ? <p><em>Loading... Please refresh once the ASP.NET backend has started. See <a href="https://aka.ms/jspsintegrationreact">https://aka.ms/jspsintegrationreact</a> for more details.</em></p>
        : <table className="table table-striped" aria-labelledby="tableLabel">
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Phone Number</th>
                    <th>Email</th>
                    <th>Company</th>
                </tr>
            </thead>
            <tbody>
                {contacts.map(contact =>
                    <tr key={contact.email}>
                        <td>{contact.name}</td>
                        <td>{contact.phoneNumber}</td>
                        <td>{contact.email}</td>
                        <td>{contact.company}</td>
                    </tr>
                )}
            </tbody>
        </table>;

    return (
        <div>
            <h1 id="tableLabel">Contacts</h1>
            <p>This component demonstrates fetching data from the server.</p>
            {contents}
        </div>
    );
    
    async function populateContactData() {
        const response = await fetch('/contacts');
        const data = await response.json();
        setContacts(data);
    }
}

export default App;