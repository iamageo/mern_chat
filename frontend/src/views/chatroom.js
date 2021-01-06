import React from 'react';
import io from 'socket.io-client'

// import { Container } from './styles';

function chatroom({match}) {
  const chatroomId = match.params.id;

  const socket = io("http://localhost:8000", {
      query: {
          token: localStorage.getItem("token")
      }
  })

  return (
      <div>
          chatroom
      </div>
  )
}

export default chatroom;