import React from 'react';
import './app.css'

export const App = () => {

  return (
    <>
      <header>
          <h1><strong>Mega</strong> Ogłoszenia</h1>
          <button>Dodaj ogłoszenie</button>
          <div className="search">
              <input type="text"/>
              <button>szukaj</button>
          </div>
      </header>
      <div className="map">
        map
      </div>
    </>
  );
}

