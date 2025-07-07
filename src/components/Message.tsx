import React from 'react'

interface MessageProps {
  message?: string
}

const Message: React.FC<MessageProps> = ({ message }) => {
  if (!message) return null
  return <div className="message">{message}</div>
}

export default Message