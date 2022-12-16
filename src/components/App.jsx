import ContactForm from './ContactForms/ContactForm';
import ContactList from './ContactList/ContactList';

export default function App () {

  return (
    <div
      style={{
        display: 'flex',
        flexDirection:'column',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 32,
        color: '#010101'
      }}>
<ContactForm/>
<div className="list_section">
<ContactList/>
</div>
  </div>
  )
}
