const Persons = ({contactList}) => {
  return (
    <div>
      {contactList.map(person => 
       <p key={person.id}>{person.name} {person.number}</p> )}
    </div>
  )
}

export default Persons