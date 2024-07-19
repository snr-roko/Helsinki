const ContactList = ({name, number, handleDelete}) => {
  return (
    <div>
      {name} {number} <button onClick={handleDelete}>Delete</button>
    </div>
  )
}

export default ContactList