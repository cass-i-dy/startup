// add data into the data table

document.addEventListener("DOMContentLoaded", function() {  
    // const playerName = document.getElementById("user_name");
    // const storedUserName = localStorage.getItem("userName");
    // playerName.textContent = storedUserName;

    // const locationName = document.getElementById("location");
    // const storedlocationName = document.getItem("locationName");

    // const featureName = document.getElementById("features");
    // const storedfeatureName = document.getItem("locationName");

    // const infoName = document.getElementById("notes");
    // const storedinfoName = document.getItem(infoName);

    const storedLocation = localStorage.getItem("locationName");
    const storedFeatures = localStorage.getItem("featureName");
    const storedNotes = localStorage.getItem("infoName");
    const storedUser = localStorage.getItem("userName");



    const storedDate = "4/23/2020";



    document.getElementById("location").textContent = storedLocation;
    document.getElementById("features").textContent = storedFeatures;
    document.getElementById("notes").textContent = storedNotes;
    document.getElementById("user").textContent = storedUser;
    // locationName.textContent = storedlocationName;
    // featureName.textContent = storedfeatureName;
    // infoName.textContent = storedinfoName;
    // playerName.textContent = storedUserName;
    document.getElementById("date").textContent = storedDate;
});