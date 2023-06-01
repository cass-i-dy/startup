

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
      tableBodyEl.innerHTML = '<tr><td colSpan=4>Leave the first description</td></tr>';
    }
  }
  
  loadScores();