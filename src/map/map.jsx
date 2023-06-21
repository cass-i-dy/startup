import React from 'react';

import { MapView } from './map_view';

export function Map(props) {
    return (
        <main className='container-fluid bg-secondary text-center'>
        < MapView userName={props.userName}/>
        </main>
    );
}