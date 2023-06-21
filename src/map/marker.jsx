import React from 'react';
import './marker.css';
import { useLocation, Link } from 'react-router-dom';


export function CreateMarker(props){
    const location = useLocation()
//     console.log(location.state.latitude)
//     console.log(location.state.longitude)
// return (<p>Test!</p>)
    async function location_information() {
        const locationNameEl = document.querySelector("#location");
        const featureNameEl = document.querySelector("#features");
        const infoNameEl = document.querySelector("#notes");
        const userNameEl = props.userName;
        const dateNameEl = document.querySelector("#date");
        const mapLatEl = localStorage.getItem("lat");
        const mapLonEl = localStorage.getItem("long");

 
        localStorage.setItem("locationName", locationNameEl.value);
        localStorage.setItem("featureName", featureNameEl.value);
        localStorage.setItem("infoName", infoNameEl.value);
        localStorage.setItem("dateName", dateNameEl.value);
    
      
        // const response = await fetch("/api/data")
        // const temp = await response.json()
        // console.log(response)
    
        let infos = [];
        const infosText = localStorage.getItem('infos');
        if (infosText) {
          infos = JSON.parse(infosText);
        }
    
        const newInfo = {
            lat: mapLatEl,
            long: mapLonEl,
            location: locationNameEl.value,
            features: featureNameEl.value,
            notes: infoNameEl.value,
            user: userNameEl,
            date: dateNameEl.value,
           
        };
    
        const response = fetch("/api/data", {
          headers: {"content-type" : "application/json"},
          body: JSON.stringify(newInfo),
          method:"post"
        })
    
        // infos.push(newInfo);
    
        localStorage.setItem('infos', JSON.stringify(infos));
    
        // window.location.href = "alldata.html";
    }

    // const handleClick = () => {
    //     location_information;
        
    // }

        return (
            <div>
            <p className='title'>Create Marker</p>
            <div>
       
                       <label htmlFor="date">Date:</label>
                       <input id="date" placeholder="Today's Date"/>
                       <label htmlFor="location">Location Name:</label>
                       <input id="location" placeholder="Enter A Descriptive Name"/>
                       <label htmlFor="features">Noticable Features:</label>
                       <input id="features" placeholder="Significance"/>
                       <label htmlFor="notes">Additional Notes: </label>
                       <textarea id="notes"></textarea>
                <Link to="/alldata">
               <button type="button" onClick={location_information}>Submit</button>
               </Link>
            </div>
           </div>
        );
      }