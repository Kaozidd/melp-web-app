import React from 'react';
import './App.css';
import Card from './Card.js';
const dataS = {
  "id":"851f799f-0852-439e-b9b2-df92c43e7672",
  "rating":4,
  "name":"Baraka, Mileena and Kano",
  "contact":{
    "site":"https://federico.com",
    "email":"Anita_Mata71@hotmail.com",
    "phone":"534 814 204"
  },
  "address":{
    "street":"82247 Mariano Entrada",
    "city":"Mérida Alfredotown",
    "state":"Durango",
    "location":{
      "lat":19.440057053713137,
      "lng":-99.12704709742486
    }
  }
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>SIIIIIIUUUUUUU!</p>
      </header>
      <div className="App-container">
        <Card data={dataS} />
      </div>
    </div>
  )
}

export default App;