import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'

const dataS = {
  "id":"851f799f-0852-439e-b9b2-df92c43e7672",
  "rating":4,
  "name":"Barajas, Bahena and Kano",
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
const renderRat = (rat) => {
  for(let i=0; i<rat; i++){
    console.log(rat);
    return (
    <FontAwesomeIcon icon={faStar} />
    );
  }
}

function App() {
 
  return (
    <div className="App">
      <header className="App-header">
        <p>Hola mundo</p>
      </header>
      <div className="App-container">
        <div className="Card">
          {
            renderRat(dataS.rating)
          }
          
        </div>
      </div>
    </div>
  );
}

export default App;

