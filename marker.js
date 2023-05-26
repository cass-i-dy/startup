// Collect data from User Input

function location_information() {
    const locationNameEl = document.querySelector("#location");
    const featureNameEl = document.querySelector("#features");
    const infoNameEl = document.querySelector("#notes");
    const userNameEl = localStorage.getItem('userName');

    localStorage.setItem("locationName", locationNameEl.value);
    localStorage.setItem("featureName", featureNameEl.value);
    localStorage.setItem("infoName", infoNameEl.value);

    let infos = [];
    const infosText = localStorage.getItem('infos');
    if (infosText) {
      infos = JSON.parse(infosText);
    }

    const newInfo = {
        location: locationNameEl.value,
        features: featureNameEl.value,
        notes: infoNameEl.value,
        user: userNameEl.value
    };

    infos.push(newInfo);

    localStorage.setItem('infos', JSON.stringify(infos));

    window.location.href = "alldata.html";
  }
