// map javascript

// get location place holder

    // let map;

// Here is where to implement map once created

    function initialize_map() {
        let mapOptions = {
            center: new google.maps.LatLng(40.2338, -111.6585),
            zoom: 12
        }

        let map = new google.maps.Map(document.getElementById('map'), mapOptions);

      

        let markerOptions = {
            position: new google.maps.LatLng(40.2338, -111.6585),
            optimized: false,
        }

        let marker = new google.maps.Marker(markerOptions)

        const infoWindow = new google.maps.InfoWindow();

        marker.addListener("click", (googleMapsEvent) => {
            document.getElementById('test').innerHTML = 'latitude: ' + googleMapsEvent.latLng.lat() + ' longitude: ' + googleMapsEvent.latLng.lng();
        })

        marker.setMap(map);

        infoWindow.setContent("Location data");

        const infoWindowOption = {
            position: {lat: 40, lng: -111}
        }

        const infoWindowOpenOptions = {
            map: map,
            anchor: marker,
            shouldFocus: true
        }

        infoWindow.open(infoWindowOpenOptions);

        



        // var map = new google.maps.Map(document.getElementById('map'), {center: {lat:40.2338, lng: -111.6585 }, zoom: 12});
        // let marker = new google.maps.Marker();
    };



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
  window.onload = function() {
    initialize_map();
  };


        // start save location once buttong clicked to get location
    //     const saveButton = document.getElementById("map_location");
    //     saveButton.addEventListener("submit", get_location)
    

    // function get_location() {
    // const center_map = center; // get the center of the map as the location
    
    // localStorage.setItem("userLocation", current_map) // save the location longitude and latitude to the local storage

    // };



    document.addEventListener("DOMContentLoaded", function() {  
        const playerNameEl = document.getElementById("user_name");
        const storedUserName = localStorage.getItem("userName");

            playerNameEl.textContent = storedUserName;
    });