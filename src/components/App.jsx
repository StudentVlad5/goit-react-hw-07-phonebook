import ContactForm from './ContactForms/ContactForm';
import ContactList from './ContactList/ContactList';

export default function App () {

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 20,
        color: '#010101'
      }}>
<ContactForm/>
<div className="list_section">
<ContactList/>
</div>
  </div>
  )
}
