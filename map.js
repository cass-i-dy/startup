// map javascript

// get location place holder

    let map;

// Here is where to implement map once created

    function initialize_map() {
        map = google_map
        const location_marker = get_location
    };

    function get_location() {
    const center_map = center;
    
    localStorage.setItem("user_location", current_location)

    console.log("Location saved:", current_location)
    };



    document.addEventListener("DOMContentLoaded", function() {  
        const playerNameEl = document.getElementById("user_name");
        const storedUserName = localStorage.getItem("userName");

        if (storedUserName) {
            playerNameEl.textContent = storedUserName;
        } else {
            playerNameEl.textContent = "Guest";
        }
    });