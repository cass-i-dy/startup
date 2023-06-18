// const { WebSocketServer } = require('ws');
// // const uuid = require('uuid');

// function weather(httpServer) {
// const wss = new WebSocket('http://api.weatherapi.com/v1/current.json?key=&q=Provo&aqi=no')

// socket.addEventListener('open', function(event) {
//     // console.log('WebSocket connection established');
//   });
  
//   // Listen for messages from the server
//   socket.addEventListener('message', function(event) {
//     const weatherData = JSON.parse(event.data);
//     // console.log('Received weather data:', weatherData);
//     // Process the received weather data
//   });
  
//   // Connection closed
//   socket.addEventListener('close', function(event) {
//     // console.log('WebSocket connection closed');
//   });
  
//   // Error handling
//   socket.addEventListener('error', function(event) {
//     // console.error('WebSocket error:', event.error);
//   });
// }


// const WebSocket = require('ws');

// const wss = new WebSocketServer({ noServer: true });

// wss.on("connection", ws => {
//     console.log("New client connected!");

//     ws.on("close", () => {
//         console.log("Client has disconnected!");
//     });
// });


// // Create a new WebSocket connection
// const socket = new WebSocket('https://api.weatherapi.com/v1/current.json?key=e235eabc8b164f4fbe445218230906&q=Provo&aqi=no');

// // Connection opened
// socket.addEventListener('open', function(event) {
//   console.log('WebSocket connection established');
// });

// // Listen for messages from the server
// socket.addEventListener('message', function(event) {
//   const weatherData = JSON.parse(event.data);
//   console.log('Received weather data:', weatherData);
//   // Process the received weather data
// });

// // Connection closed
// socket.addEventListener('close', function(event) {
//   console.log('WebSocket connection closed');
// });

// // Error handling
// socket.addEventListener('error', function(event) {
//   console.error('WebSocket error:', event.error);
// });

const {WebSocketServer} = require('ws');

const uuid = require('uuid');


function weather(httpServer) {
const wss = new WebSocketServer({ noServer: true });

const apiKey = 'e235eabc8b164f4fbe445218230906'; // Replace with your actual API key
const location = 'Provo'; // Replace with the desired location

// Function to fetch weather data from the API
async function fetchWeatherData() {
  try {
    const response = await fetch(`https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${location}&aqi=no`);
    const weatherData = await response.json();
    return weatherData;
  } catch (error) {
    console.error('Error fetching weather data:', error);
    throw error;
  }
}

// Function to send weather updates to connected clients
function sendWeatherUpdates() {
  const weatherData = fetchWeatherData();
  wss.clients.forEach(client => {
    if (client.readyState === WebSocket.OPEN) {
      client.send(JSON.stringify(weatherData));
    }
  });
}

// WebSocket connection handling
wss.on('connection', (ws) => {
  console.log('WebSocket connection established');

  // Send initial weather data on connection
  fetchWeatherData()
    .then(weatherData => {
      ws.send(JSON.stringify(weatherData));
    })
    .catch(error => {
      console.error('Error sending initial weather data:', error);
    });

  // Periodically send weather updates
  const updateInterval = setInterval(() => {
    sendWeatherUpdates();
  }, 300000); // Update every 5 minutes

  // Handle WebSocket connection close
  ws.on('close', () => {
    console.log('WebSocket connection closed');
    clearInterval(updateInterval);
  });
});
}

module.exports = { weather };