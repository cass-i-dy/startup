// Collect data from User Input


// const playerNameEl = document.getElementById("user_name");
//         const storedUserName = localStorage.getItem("userName");

//             playerNameEl.textContent = storedUserName;

function location_information() {
    const locationNameEl = document.querySelector("#location");
    const featureNameEl = document.querySelector("#features");
    const infoNameEl = document.querySelector("#notes");
    const userNameEl = localStorage.getItem("userName");
    const dateNameEl = document.querySelector("#date");
    // const mapLocationNameEl = document.getItem("userLocation")

    localStorage.setItem("locationName", locationNameEl.value);
    localStorage.setItem("featureName", featureNameEl.value);
    localStorage.setItem("infoName", infoNameEl.value);
    localStorage.setItem("dateName", dateNameEl.value);

    let infos = [];
    const infosText = localStorage.getItem('infos');
    if (infosText) {
      infos = JSON.parse(infosText);
    }

    const newInfo = {
        location: locationNameEl.value,
        features: featureNameEl.value,
        notes: infoNameEl.value,
        user: userNameEl,
        date: dateNameEl.value,
        // map_location: mapLocationNameEl
    };

    infos.push(newInfo);

    localStorage.setItem('infos', JSON.stringify(infos));

    window.location.href = "alldata.html";
  }
