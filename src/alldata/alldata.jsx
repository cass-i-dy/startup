import React, { useEffect, useState } from 'react';
import './alldata.css';

export function Alldata() {
    const [infos, setInfos] = React.useState([]);

    // Demonstrates calling a service asynchronously so that
    // React can properly update state objects with the results.
    React.useEffect(() => {
      fetch('/api/datas')
        .then((response) => response.json())
        .then((infos) => {
          setInfos(infos);
          localStorage.setItem('infos', JSON.stringify(infos));
        })
        .catch(() => {
          const infosText = localStorage.getItem('infos');
          if (infosText) {
            setInfos(JSON.parse(infosText));
          }
        });
    }, []);
  
    // Demonstrates rendering an array with React
    const infoRows = [];
    if (infos.length) {
      for (const [i, info] of infos.entries()) {
        infoRows.push(
          <tr key={i}>
            <td>{i}</td>
            <td>{info.lat}</td>
            <td>{info.long}</td>
            <td>{info.location}</td>
            <td>{info.features}</td>
            <td>{info.notes}</td>
            <td>{info.user}</td>
            <td>{info.date}</td>
          </tr>
        );
      }
    } else {
      infoRows.push(
        <tr key='0'>
          <td colSpan='4'>Be the first</td>
        </tr>
      );
    }

    return (
    <div>
        <table>
        <thead>
            <tr>
                <th>Latitude:</th>
                <th>Longitude</th>
                <th>Location Name:</th>
                <th>Features:</th>
                <th>Notes:</th>
                <th>User:</th>
                <th>Date:</th>
            </tr>
        </thead>
            <tbody id="infos">{infoRows}</tbody>
    </table>
    </div>
    );
}