function Message({ message }) {
  return (
    <div className="message">
      <strong>{message.user}</strong>
      <p>{message.text}</p>
    </div>
  );
}

export default Message;