import './App.css';
import React, { useState } from 'react'
import ReactMapGL, { NavigationControl, GeolocateControl } from 'react-map-gl';

require('dotenv').config()


function App() {
  const [viewport, setViewport] = useState({
    width: "60vw",
    height: "50vh",
    latitude: 11.001874,
    longitude: -74.817420,
    zoom: 13
  });
  const navControlSt = {
    right: 10,
    top: 10
  }
  const geolocateControlStyle= {
    right: 10,
    top: 120
  };
 
  return (
    <div className="cont">
      <div id="form">

        <h1>Localit-x</h1>
        <div className="inputss">
          <input type="text" placeholder="Inicio" className="punto1" />
          <input type="text" placeholder="Fin" className="punto2" />
          <input value="Buscar ruta" type="button" className="btnn" />
        </div>
      </div>
      <div className="containermap">

        <ReactMapGL
          {...viewport}
          mapboxApiAccessToken={'pk.eyJ1IjoiYW5kcmVzMjkiLCJhIjoiY2t1YnFoZ3lnMDlwZDJ2bzk1NGY5MXFnaCJ9.I59-MloYuDI6DVGutPiEyQ'}
          mapStyle="mapbox://styles/mapbox/streets-v11"
          onViewportChange={nextViewport => setViewport(nextViewport)}
          NavegationControl
        >
         
          <NavigationControl style={navControlSt} />
          <GeolocateControl
            style={geolocateControlStyle}
            positionOptions={{ enableHighAccuracy: true }}
            trackUserLocation={true}
            auto
          />
        </ReactMapGL>
      </div>

    </div>
  );

}

export default App;
