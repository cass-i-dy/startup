import React, {useEffect} from 'react';
import { Link, useNavigate} from 'react-router-dom';
import './map.css'
// import { Chat } from './chat.jsx';
import { CreateMarker } from './marker.jsx';

export function MapView(props){
    const userName = props.userName;
    const navigate = useNavigate();


useEffect(() => {
    if (window.google) {
        initialize_map();
      } else {
        loadGoogleMapsAPI();
      }
},[]);


function loadGoogleMapsAPI() {
    const script = document.createElement('script');
    script.src = 'https://maps.googleapis.com/maps/api/js?key=AIzaSyAY-vfAkO7BPXdUs_xRt_DSfhqnonBSLuI';
    script.onload = initialize_map;
    document.head.appendChild(script);
  }

function initialize_map() {
const map = new window.google.maps.Map(document.getElementById('map'), {
        center: new window.google.maps.LatLng(40.2338, -111.6585),
        zoom:12
});

map.addListener('click', function(event){
    const clickedLatLng = event.latLng;

    const marker = new window.google.maps.Marker({
        position: clickedLatLng,
        map:map
    });


    localStorage.setItem('latitude', clickedLatLng.lat());
    localStorage.setItem('longitude', clickedLatLng.lng());

    // let newloc = "marker.html"
    // window.location.href = newloc;
    navigate('/marker', {state: {latitude: clickedLatLng.lat(), longitude: clickedLatLng.lng()}});
    // CreateMarker(props);

});
}

// function chat_box() {
//     // document.getElementById("chat-window").style.display = "block";
//     ChatArea();
//     // let newloc = "chat.jsx"
//     // window.location.href = newloc;
//   };
  

    return (

        <div>
            <div className='main'>
        <p>User:</p>
        <span id="player-name">{userName}</span>
        <div id="map" style={{width: '100%', height: '400px'}}></div>

        {/* <form method="get" onClick= {CreateMarker(props)}> */}
            <Link to='/marker'>
                <button type="submit" id="map_location">Create Marker</button>
            </Link>
        {/* </form> */}
        <Link to='/chat'>
            <button className = "chat_button" id="open-chat">Chat</button>
        </Link>
        </div>
    <footer>
        {/* <button className = "chat_button" id="open-chat" onClick= {chat_box}>Chat</button> */}
    </footer>
    </div>
    );
    }