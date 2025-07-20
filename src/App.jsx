import React, { useState, useEffect } from 'react';
import Landingpage from './Landingpage';
import RegOrChange from './RegOrChange';
import Registry_Selection from './Registry_Selection';
import Registry_Office from './Registry_Office';
import Registry_Data from './Registry_Data';
import NoteOfThanks from './NoteOfThanks';
import Wrapper from './Wrapper';
import Registry_Data_Two from './Registry_Data_Two';
import YourDonation from './YourDonation';
import Registry_Home from './Registry_Home';

function App() {
//View wechseln
const [page, setPage] = useState('landingpage');

//Registrierungsdaten
const [selection, setSelection] = useState('');
const [typeOfClothing, setTypeOfClothing] = useState('');
const [crisisArea, setCrisisArea] = useState('');
const [PLZ, setPLZ] = useState('');
const [city, setCity] = useState('');
const [street, setStreet] = useState('');
const [number, setNumber] = useState('');
const [deliveryText, setDeliveryText] = useState('');

//Anzeigedresse bei Registrierung per Abholung
const [location, setLocation] = useState('');

//Validierung
const [firstSelError, setFirstSelError] = useState(false);
const [secondSelError, setSecondSelError] = useState(false);
const [isRegistered, setIsRegistered] = useState(true);
const [isRegisteredWrapper, setIsRegisteredWrapper] = useState(true);
const [inputError, setInputError] = useState(false);
const [isHigherFive, setIsHigherFive] = useState(false);

//Für die Überprüfung der Entfernung Abholort - Geschäftsstelle
const [isEqual, setIsEqual] = useState(false);
const [isTwoLetters, setIsTwoLetters] = useState(false);


const PHI = (1 + Math.sqrt(5)) / 2;
const h = (Math.floor(22118*((27/PHI) - Math.floor(27/PHI)))).toString();

useEffect(() =>{
    const jsonData = localStorage.getItem(h);
    if(jsonData){
        const data = JSON.parse(jsonData);
        setSelection(data.homeOrOffice);
    }
},[]);

let LayoutComponent;
switch(page){
    case 'landingpage':
        LayoutComponent = Landingpage;
        break;
    case 'regorchange':
        LayoutComponent = RegOrChange;
        break;
    case 'registryselection':
        LayoutComponent = Registry_Selection;
        break;
    case 'registryoffice':
        LayoutComponent = Registry_Office;
        break;
    case 'registrydata':
        LayoutComponent = Registry_Data;
        break;
    case 'noteOfThanks':
        LayoutComponent = NoteOfThanks;
        break;
    case 'registrydatatwo':
        LayoutComponent = Registry_Data_Two;
        break;
    case 'yourdonation':
        LayoutComponent = YourDonation;
        break; 
    case 'registryhome':
        LayoutComponent = Registry_Home;
        break;
    default:
        LayoutComponent = Landingpage;
}

  return (
    <Wrapper setIsRegistered={setIsRegistered} isRegisteredWrapper={isRegisteredWrapper} setIsRegisteredWrapper={setIsRegisteredWrapper} togglePage={setPage} x={h} select={setSelection} selected={selection} >
        <LayoutComponent setIsRegisteredWrapper={setIsRegisteredWrapper} deliveryText={deliveryText} setDeliveryText={setDeliveryText} isHigherFive={isHigherFive} setIsHigherFive={setIsHigherFive} isTwoLetters={isTwoLetters} setIsTwoLetters={setIsTwoLetters} isEqual={isEqual} setIsEqual={setIsEqual} inputError={inputError} setInputError={setInputError} PLZ={PLZ} setPLZ={setPLZ} city={city} setCity={setCity} street={street} setStreet={setStreet} number={number} setNumber={setNumber} isRegistered={isRegistered} setIsRegistered={setIsRegistered} firstSelError={firstSelError} setFirstSelError={setFirstSelError} secondSelError={secondSelError} setSecondSelError={setSecondSelError} togglePage={setPage} x={h} location={location} setLocation={setLocation} select={setSelection} selected={selection} typeOfClothing={typeOfClothing} setTypeOfClothing={setTypeOfClothing} crisisArea={crisisArea} setCrisisArea={setCrisisArea} />
    </Wrapper>
  );
}

export default App;