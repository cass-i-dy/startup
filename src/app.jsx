import React from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';
import './main.css';
import { BrowserRouter, NavLink, Route, Routes } from 'react-router-dom';
import {Login} from './login/login';
import { About } from './about/about';
import { Alldata } from './alldata/alldata';
import { Map } from './map/map';
import { AuthState } from './login/authState';
import { CreateMarker} from './map/marker';
import { Chat } from './map/chat';

function App() {
    const [userName, setUserName] = React.useState(localStorage.getItem('userName') || '');
    const currentAuthState = userName ? AuthState.Authenticated : AuthState.Unauthenticated;
    const [authState, setAuthState] = React.useState(currentAuthState);
  

    return (
    <BrowserRouter>
        <div className= 'app'>
        <header>
        <nav>
            <menu>
                <li>
                    <NavLink className= 'nav-link' to= ''>
                        TectoSlide
                    </NavLink>
                </li>

                {/* {authState === AuthState.Authenticated && ( */}
                <li>
                    <NavLink className = 'nav-link' to='map'>
                        Map
                    </NavLink>
                    </li>
                {/* )} */}
                {/* {authState === AuthState.Authenticated && ( */}
                <li>
                    <NavLink className='nav-link' to='alldata'>
                        All Data
                    </NavLink>
                </li>
                {/* )} */}
                <li>
                    <NavLink className='nav-link' to='about'>
                        About
                    </NavLink>
                </li>
            </menu>
        </nav>
        <hr />
    </header>

    <Routes>
        <Route
        path='/'
        element={
            <Login
            userName={userName}
                authState={authState}
                onAuthChange={(userName, authState) => {
                  setAuthState(authState);
                  setUserName(userName);
                }}
            />
        }
        exact
    />

        <Route path='/map' element={<Map userName={userName} />} />
        <Route path='/alldata' element={<Alldata />} />
        <Route path='/about' element={<About />} />
        <Route path='*' element={<NotFound />} />
        <Route path='/marker' element={<CreateMarker userName={userName} />} />
        <Route path='/chat' element={<Chat />} />
    </Routes>

    <footer>
        <hr />
        <a href="https://github.com/cass-i-dy/startup/tree/main">Github</a>
    </footer>


    </div>
</BrowserRouter>
 
);}

function NotFound() {
    return <main className='container-fluid bg-secondary text-center'>404: Return to sender. Address unknown.</main>;
  }
  
  export default App;