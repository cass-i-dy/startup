// Collect data from User Input

function location_information() {
    const locationNameEl = document.querySelector("#location");
    const featureNameEl = document.querySelector("#features");
    const infoNameEl = document.querySelector("#notes");

    localStorage.setItem("locationName", locationNameEl.value);
    localStorage.setItem("featureName", featureNameEl.value);
    localStorage.setItem("infoName", infoNameEl.value);

    window.location.href = "alldata.html";
}