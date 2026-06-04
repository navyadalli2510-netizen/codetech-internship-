import { useState, useEffect, useRef } from "react";
import { db } from "../firebase";
import Message from "./Message";
import "../App.css";

import {
  collection,
  addDoc,
  query,
  orderBy,
  onSnapshot,
} from "firebase/firestore";

function Chat() {
  const [messages, setMessages] = useState([]);
  const [text, setText] = useState("");
  const [username, setUsername] = useState("");
  const [joined, setJoined] = useState(false);

  const messagesEndRef = useRef(null);

  useEffect(() => {
    const q = query(collection(db, "messages"), orderBy("createdAt"));

    const unsubscribe = onSnapshot(q, (snapshot) => {
      const data = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setMessages(data);
    });

    return () => unsubscribe();
  }, []);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const sendMessage = async () => {
    if (!text.trim()) return;

    await addDoc(collection(db, "messages"), {
      user: username,
      text,
      createdAt: Date.now(),
    });

    setText("");
  };

  if (!joined) {
    return (
      <div className="join-screen">
        <div className="join-box">
          <h1>💬 Chat Room</h1>
          <p>Enter your name to continue</p>

          <input
            type="text"
            placeholder="Your username"
            onChange={(e) => setUsername(e.target.value)}
          />

          <button
            onClick={() => username.trim() && setJoined(true)}
          >
            Join Chat
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="chat-wrapper">
      <div className="chat-header">
        <h2>🔥 Real-Time Chat</h2>
        <span>Logged in as {username}</span>
      </div>

      <div className="chat-box">
        {messages.map((msg) => (
          <div
            key={msg.id}
            className={`message ${
              msg.user === username ? "own" : ""
            }`}
          >
            <div className="meta">{msg.user}</div>
            <div className="text">{msg.text}</div>
          </div>
        ))}

        <div ref={messagesEndRef} />
      </div>

      <div className="chat-input">
        <input
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Type a message..."
          onKeyDown={(e) => e.key === "Enter" && sendMessage()}
        />

        <button onClick={sendMessage}>Send</button>
      </div>
    </div>
  );
}

export default Chat;