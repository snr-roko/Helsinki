const Notification = ({completedMessage, errorMessage}) => {
  if(!completedMessage && !errorMessage) return null
  if(completedMessage) return <div className="successful-notification">{completedMessage}</div> 
  if(errorMessage) return <div className="error-notification">{errorMessage}</div>
  }
export default Notification