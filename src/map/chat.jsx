import React, { useEffect, useState } from 'react';
import { MapView } from './map_view';
import { Link} from 'react-router-dom';

import "./chat.css";


class EventMessage {
  constructor(from, type, value) {
    this.from = from;
    this.type = type;
    this.value = value;
  }
}

export function Chat() {
  const [connected, setConnected] = useState(false);
  const [myName, setMyName] = useState('');
  const [newMsg, setNewMsg] = useState('');
  const [chatText, setChatText] = useState('');

  useEffect(() => {
    let port = window.location.port;
    const protocol = window.location.protocol === 'http:' ? 'ws' : 'wss';
    const socket = new WebSocket(`${protocol}://${window.location.hostname}:${port}/ws`);

    socket.onopen = (event) => {
      setConnected(true);
      appendMsg('system', 'websocket', 'connected');
    };

    socket.onclose = (event) => {
      setConnected(false);
      appendMsg('system', 'websocket', 'disconnected');
    };

    socket.onmessage = async (event) => {
      const text = await event.data.text();
      const chat = JSON.parse(text);
      appendMsg('friend', chat.name, chat.msg);
    };

    return () => {
      socket.close();
    };
  }, []);

  const appendMsg = (cls, from, msg) => {
    setChatText(
      `<div><span class="${cls}">${from}</span>: ${msg}</div>` + chatText
    );
  };

  const sendMessage = () => {
    const msg = newMsg.trim();
    if (msg) {
      appendMsg('me', 'me', msg);
      const name = myName.trim();
      socket.send(`{"name":"${name}", "msg":"${msg}"}`);
      setNewMsg('');
    }
  };

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      sendMessage();
    }
  };

  const handleNameChange = (event) => {
    setMyName(event.target.value);
  };

  const handleMsgChange = (event) => {
    setNewMsg(event.target.value);
  };

  return (
    <div>
      <h1>Welcome to the Chat Area</h1>
      <div className="name">
        <fieldset id="name-controls">
          <legend>My Name</legend>
          <input id="my-name" type="text" value={myName} onChange={handleNameChange} />
        </fieldset>
      </div>

      <fieldset id="chat-controls" disabled={!connected || !myName}>
        <legend>Chat</legend>
        <input id="newmsg" type="text" value={newMsg} onChange={handleMsgChange} onKeyPress={handleKeyPress} />
        <button onClick={sendMessage}>Send</button>
      </fieldset>

      <div id="chat-text" style={{ display: "none" }} dangerouslySetInnerHTML={{ __html: chatText }}></div>

      <Link to="/map">
        <button className="closing">Close</button>
      </Link>
    </div>
  );
}









// class EventMessage {
//   constructor(from, type, value) {
//     this.from = from;
//     this.type = type;
//     this.value = value;
//   }
// }


// export class Chat {
//   events = [];
//   handlers = [];

//   constructor() {
//     let port = window.location.port;
//     const protocol = window.location.protocol === 'http:' ? 'ws' : 'wss';
//     this.socket = new WebSocket(`${protocol}://${window.location.hostname}:${port}/ws`);
//     this.socket.onopen = (event) => {
//       appendMsg('system', 'websocket', 'connected');
//     };
//     this.socket.onclose = (event) => {
//       appendMsg('system', 'websocket', 'disconnected');
//       document.querySelector('#name-controls').disabled = true;
//       document.querySelector('#chat-controls').disabled = true;
//     };
//     this.socket.onmessage = async (event) => {
//       const text = await event.data.text();
//       const chat = JSON.parse(text);
//       appendMsg('friend', chat.name, chat.msg);
//       broadcastEvent('friend', chat.name, chat.msg);
//     };    
//     // Send message on enter keystroke
// const input = document.querySelector('#new-msg');
// input.addEventListener('keydown', (e) => {
//   if (e.key === 'Enter') {
//     sendMessage();
//   }
// });
// // Disable chat if no name provided
// const chatControls = document.querySelector('#chat-controls');
// const myName = document.querySelector('#my-name');
// myName.addEventListener('keyup', (e) => {
//   chatControls.disabled = myName.value === '';
// });


// return (
//   <div>
//           <h1>Welcome to the Chat Area</h1>
//           <div className="name">
//               <fieldset id="name-controls">
//                 <legend>My Name</legend>
//                 <input id="my-name" type="text" />
//               </fieldset>
//             </div>

//             <fieldset id="chat-controls" disabled>
//               <legend>Chat</legend>
//               <input id="newmsg" type="text" />
//               <button onClick={sendMessage()}>Send</button>
//             </fieldset>
//             <div id="chat-text" style={{display: "none"}}></div>
//             <Link to="/map">
//           <button className="closing" onClick={CloseChat}>Close</button>
//           </Link>
//       </div>
// )





//   }

//   broadcastEvent(from, type, value) {
//     const event = new EventMessage(from, type, value);
//     socket.send(JSON.stringify(event));
//   }

//   // Create one long list of messages
//   appendMsg(cls, from, msg) {
//   const chatText = document.querySelector('#chat-text');
//   chatText.innerHTML =
//     `<div><span class="${cls}">${from}</span>: ${msg}</div>` +
//     chatText.innerHTML;
// }

// sendMessage() {
//   const msgEl = document.querySelector('#newmsg');
//   const msg = msgEl.value;
//   if (!!msg) {
//     appendMsg('me', 'me', msg, 'white-text');
//     const name = document.querySelector('#my-name').value;
//     socket.send(`{"name":"${name}", "msg":"${msg}"}`);
//     msgEl.value = '';
//   }
// }

// return (
//   <div>
//     <h1>Welcome to the Chat Area</h1>
//       <div className="name">
//           <fieldset id="name-controls">
//             <legend>My Name</legend>
//                 <input id="my-name" type="text" />
//               </fieldset>
//             </div>

//             <fieldset id="chat-controls" disabled>
//               <legend>Chat</legend>
//               <input id="newmsg" type="text" />
//               <button onClick={sendMessage()}>Send</button>
//             </fieldset>
//             <div id="chat-text" style={{display: "none"}}></div>
//             <Link to="/map">
//           <button className="closing" onClick={CloseChat}>Close</button>
//           </Link>
//       </div>
// }











// export function ChatArea () {

//   const protocol = window.location.protocol === 'http:' ? 'ws' : 'wss';
//   const socket = new WebSocket(`${protocol}://${window.location.host}/ws`);


// To close the chat window
// function CloseChat() {
// document.getElementById("close-chat").addEventListener("click", function() {
//   document.getElementById("chat-window").style.display = "none";
// });}


// useEffect(() => {

  // Adjust the webSocket protocol to what is being used for HTTP

// Display that we have opened the webSocket
// socket.onopen = (event) => {
//   appendMsg('system', 'websocket', 'connected');
// };

// Display messages we receive from our friends
// socket.onmessage = async (event) => {
//   const text = await event.data.text();
//   const chat = JSON.parse(text);
//   appendMsg('friend', chat.name, chat.msg);
//   broadcastEvent('friend', chat.name, chat.msg);
// };


// If the webSocket is closed then disable the interface
// socket.onclose = (event) => {
//   appendMsg('system', 'websocket', 'disconnected');
//   document.querySelector('#name-controls').disabled = true;
//   document.querySelector('#chat-controls').disabled = true;
// };


// Create one long list of messages
// function appendMsg(cls, from, msg) {
//   const chatText = document.querySelector('#chat-text');
//   chatText.innerHTML =
//     `<div><span class="${cls}">${from}</span>: ${msg}</div>` +
//     chatText.innerHTML;
// }

// // Send message on enter keystroke
// const input = document.querySelector('#new-msg');
// input.addEventListener('keydown', (e) => {
//   if (e.key === 'Enter') {
//     sendMessage();
//   }
// });

// Disable chat if no name provided
// const chatControls = document.querySelector('#chat-controls');
// const myName = document.querySelector('#my-name');
// myName.addEventListener('keyup', (e) => {
//   chatControls.disabled = myName.value === '';
// });
// }, []);

  // Send a message over the webSocket
  // function sendMessage() {
  //   const msgEl = document.querySelector('#newmsg');
  //   const msg = msgEl.value;
  //   if (!!msg) {
  //     appendMsg('me', 'me', msg, 'white-text');
  //     const name = document.querySelector('#my-name').value;
  //     socket.send(`{"name":"${name}", "msg":"${msg}"}`);
  //     msgEl.value = '';
  //   }
  // }
  
  // Create one long list of messages
  // function appendMsg(cls, from, msg) {
  //   const chatText = document.querySelector('#chat-text');
  //   chatText.innerHTML =
  //     `<div><span class="${cls}">${from}</span>: ${msg}</div>` +
  //     chatText.innerHTML;
  // }

  // function broadcastEvent(from, type, value) {
  //   const event = new EventMessage(from, type, value);
  //   socket.send(JSON.stringify(event));
  // }


// return (
//     <div>
//             <h1>Welcome to the Chat Area</h1>
//             <div className="name">
//                 <fieldset id="name-controls">
//                   <legend>My Name</legend>
//                   <input id="my-name" type="text" />
//                 </fieldset>
//               </div>

//               <fieldset id="chat-controls" disabled>
//                 <legend>Chat</legend>
//                 <input id="newmsg" type="text" />
//                 <button onClick={sendMessage()}>Send</button>
//               </fieldset>
//               <div id="chat-text" style={{display: "none"}}></div>
//               <Link to="/map">
//             <button className="closing" onClick={CloseChat}>Close</button>
//             </Link>
//         </div>
// )