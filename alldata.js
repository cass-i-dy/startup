// add data into the data table

// document.addEventListener("DOMContentLoaded", function() {  

//     const storedLocation = localStorage.getItem("locationName");
//     const storedFeatures = localStorage.getItem("featureName");
//     const storedNotes = localStorage.getItem("infoName");
//     const storedUser = localStorage.getItem("userName");
//     const storedDate = "4/23/2020";

//     document.getElementById("location").textContent = storedLocation;
//     document.getElementById("features").textContent = storedFeatures;
//     document.getElementById("notes").textContent = storedNotes;
//     document.getElementById("user").textContent = storedUser;
//     document.getElementById("date").textContent = storedDate;
// });


function loadScores() {
    let infos = [];
    const infosText = localStorage.getItem('infos');
    if (infosText) {
      infos = JSON.parse(infosText);
    }
  
    const tableBodyEl = document.querySelector('#infos');
  
    if (infos.length) {
      for (const [i, info] of infos.entries()) {
        const locationTdEl = document.createElement('td');
        const featuresTdEl = document.createElement('td');
        const notesTdEl = document.createElement('td');
        const userTdEl = document.createElement('td')
        const dateTdEl = document.createElement('td');

        // const storedDate = "4/23/2020";
  
        locationTdEl.textContent = info.location;
        featuresTdEl.textContent = info.features;
        notesTdEl.textContent = info.notes;
        userTdEl.textContent = info.user;
        dateTdEl.textContent = info.date;
        
  
        const rowEl = document.createElement('tr');
        rowEl.appendChild(locationTdEl);
        rowEl.appendChild(featuresTdEl);
        rowEl.appendChild(notesTdEl);
        rowEl.appendChild(userTdEl);
        rowEl.appendChild(dateTdEl);
  
        tableBodyEl.appendChild(rowEl);
      }
      
      
    } else {
      tableBodyEl.innerHTML = '<tr><td colSpan=4>Be the first to score</td></tr>';
    }
  }
  
  loadScores();