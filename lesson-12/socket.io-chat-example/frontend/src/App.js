import {useState, useEffect, useCallback} from "react";
import {nanoid} from "nanoid";
import io from "socket.io-client";

import Chat from "./components/Chat/Chat";
import ChatForm from "./components/ChatForm/ChatForm";
import SigninChatForm from "./components/SigninChatForm/SigninChatForm";

import './App.css';

const socket = io.connect("http://localhost:4000")

function App() {
  const [nickname, setNickname] = useState("");
  const [messages, setMessages] = useState([]);

  const addNewMessage = (type, message) => {
    setMessages(prevMessages => {
      const newMessage = {
        id: nanoid(),
        type,
        message
      }

      return [newMessage, ...prevMessages]
    })
  } 

  useEffect(()=> {
    // windows.addEventListener("keydown")
    socket.on("chat-message", (message)=> {
      addNewMessage("user", message);
    })
  }, [])

  const addNickname = useCallback(({name}) => setNickname(name), []);

  const addMessage = ({message}) => {
    addNewMessage("you", message);
    socket.emit("chat-message", message);
  }

  return (
    <div className="App">
      {!nickname && <SigninChatForm onSubmit={addNickname} />}
      {nickname && <ChatForm onSubmit={addMessage} />}
      {nickname && <Chat items={messages} />}
    </div>
  )
}

export default App;
