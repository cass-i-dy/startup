// map javascript

// get location place holder

    let map;

// Here is where to implement map once created

    function initialize_map() {
        map = google_map // initializing  the map will go here
        const location_marker = get_location


        // start save location once buttong clicked to get location
        const saveButton = document.getElementById("map_location");
        saveButton.addEventListener("submit", get_location)
    };

    function get_location() {
    const center_map = center; // get the center of the map as the location
    
    localStorage.setItem("userLocation", current_map) // save the location longitude and latitude to the local storage

    };



    document.addEventListener("DOMContentLoaded", function() {  
        const playerNameEl = document.getElementById("user_name");
        const storedUserName = localStorage.getItem("userName");

            playerNameEl.textContent = storedUserName;
    });