// map javascript

// get location place holder

    // let map;

// Here is where to implement map once created


        // let markerOptions = {
        //     position: new google.maps.LatLng(40.2338, -111.6585),
        //     optimized: false,
        // }

        // let marker = new google.maps.Marker(markerOptions)

 // marker.addListener("click", (googleMapsEvent) => {
        //     document.getElementById('test').innerHTML = 'latitude: ' + googleMapsEvent.latLng.lat() + ' longitude: ' + googleMapsEvent.latLng.lng();
            // placeMarker(even.latLng);
        // })

        // function placeMarker(location) {
        //     var marker = new google.maps.Marker({
        //         position: location,
        //         map: map
        //     })
        // }

        // marker.setMap(map);


 // const infoWindowOption = {
        //     position: {lat: 40, lng: -111}
        // }

        // const infoWindowOpenOptions = {
        //     map: map,
        //     anchor: marker,
        //     shouldFocus: true
        // }

// infoWindow.open(infoWindowOpenOptions);

    

            // var map = new google.maps.Map(document.getElementById('map'), {center: {lat:40.2338, lng: -111.6585 }, zoom: 12});
        // let marker = new google.maps.Marker();


//     var markers = []; // Array to store the markers

//     // Retrieve marker locations from local storage if available
//     var savedMarkers = JSON.parse(localStorage.getItem('markers'));
//     if (savedMarkers && savedMarkers.length > 0) {
//       for (var i = 0; i < savedMarkers.length; i++) {
//         var marker = new google.maps.Marker({
//           position: savedMarkers[i],
//           map: map
//         });
        
//         markers.push(marker); // Add the marker to the array
//       }
//     }

//     // Add click event listener to create a marker
//     map.addListener('click', function(event) {
//       var marker = new google.maps.Marker({
//         position: event.latLng,
//         map: map
//       });
      
//       markers.push(marker); // Add the marker to the array

      
//       infoWindow.open(map, marker);
//     });
  
//     // Add event listener to the "Create Marker" button
//     var createMarkerButton = document.getElementById('create-marker');
//     createMarkerButton.addEventListener('click', function() {
//       var marker = new google.maps.Marker({
//         position: map.getCenter(),
//         map: map
//       });
      
//       markers.push(marker);
      
//       var markerLocations = markers.map(function(marker) {
//         return marker.getPosition();// Add the marker to the array
//     });
//     localStorage.setItem("markers", Json.stringify(markerLocations));
//   });
  
  // Call the initialize_map function when the page has finished loading


        // start save location once buttong clicked to get location
    //     const saveButton = document.getElementById("map_location");
    //     saveButton.addEventListener("submit", get_location)
    

    // function get_location() {
    // const center_map = center; // get the center of the map as the location
    
    // localStorage.setItem("userLocation", current_map) // save the location longitude and latitude to the local storage

    // };

    //     function initialize_map() {
//         let mapOptions = {
//             center: new google.maps.LatLng(40.2338, -111.6585),
//             zoom: 12
//         }

//         map = new google.maps.Map(document.getElementById('map'), mapOptions);      
//         const infoWindow = new google.maps.InfoWindow();
//         let marker;

//         function placeMarker(location){
//             marker = new google.maps.Marker({
//                 position: location,
//                 map: map
//             });

//             google.maps.event.addListener(marker, 'click', function() {
//                 infoWindow.setContent("Latitude: " + location.lat() + "<br>Longitude: "+ location.lng());
//                 infoWindow.open(map, marker);
//             });

//             localStorage.setItem("markerLocation", JSON.stringify({
//                 lat: location.lat(),
//                 lng: location.lng()
//             }));

//     }

//     google.maps.event.addListener(map, 'click', function(event) {
//         placeMarker(event.latLng);
//     });
       

//     infoWindow.setContent("Location data");
// }

//  window.onload = function() {
//     initialize_map();
//   };

//         const storedLocation = localStorage.getItem("markerLocation");
//         if (storedLocation) {
//             const location = JSON.parse(storedLocation);
//             const markerPosition = new google.maps.LatLng(location.lat, location.lng);
//             google.maps.event.addListenerOnce(map, 'tilesloaded', function() {
//                 placeMarker(markerPosition)
//             })
//     }

// const wss = new WebSocket.Server({ server: httpService}); // Replace with your desired port

// // Event handler for WebSocket server connections
// wss.on('connection', function connection(ws) {
//   console.log('WebSocket connection established.');

//   // Event handler for receiving messages
//   ws.on('message', function incoming(message) {
//     console.log('Received message:', message);

//     // Broadcast the message to all connected clients
//     wss.clients.forEach(function each(client) {
//       if (client.readyState === WebSocket.OPEN) {
//         client.send(message);
//       }
//     });
//   });
// });

// async function loginOrCreate(endpoint) {
//   console.log('test1');
//   const userName = document.querySelector('#userName')?.value;
//   const password = document.querySelector('#userPassword')?.value;
//   console.log('test2');
//   const response = await fetch(endpoint, {
//     method: 'post',
//     body: JSON.stringify({ email: userName, password: password }),
//     headers: {
//       'Content-type': 'application/json; charset=UTF-8',
//     }
//   });
//   console.log('test3');

// async function loginOrCreate(endpoint) {
//   console.log('test1');
//   const userName = document.querySelector('#userName')?.value;
//   const password = document.querySelector('#userPassword')?.value;
//   console.log('test2');

//   try {
//     const response = await fetch(endpoint, {
//       method: 'post',
//       body: JSON.stringify({ email: userName, password: password }),
//       headers: {
//         'Content-type': 'application/json; charset=UTF-8',
//       },
//     });
//     console.log('test3');


//   if (response.ok) {
//     const body = await response.json();
//     localStorage.setItem('userName', userName);
//     window.location.href = 'map.html';
//   } else {
//     if (response.status === 401) {
//       const modalEl = document.querySelector('#msgModal');
//       modalEl.querySelector('.modal-body').textContent = '⚠ Error: Unauthorized';
//       const msgModal = new bootstrap.Modal(modalEl, {});
//       msgModal.show();
//     } else {
//       throw new Error('Request failed with status: ' + response.status);
//     }
//   }
//  } catch (error) {
//     console.error('Error', error);
//   }
  
// }


// async function login() {
//     const nameEl = document.querySelector("#name");
//     localStorage.setItem("userName", nameEl.value);

//     const response = await fetch("/api/test")
//     const temp = await response.json()
//     console.log(temp)

//     window.location.href = "map.html";
//   }
  