import React, { useEffect } from 'react';

function Registry_Home({ setLocation, deliveryText, togglePage, isHigherFive, setIsHigherFive ,isTwoLetters, setIsTwoLetters ,isEqual, setIsEqual, inputError, setInputError, firstSelError, setFirstSelError, secondSelError, setSecondSelError, x, PLZ, setPLZ, city, setCity, street, setStreet, number, setNumber, typeOfClothing, setTypeOfClothing, crisisArea, setCrisisArea, selected }){
    const changeAdressHandler = ({ target }) =>{
        setPLZ(target.value);
    }

    const changeCityHandler = ({ target }) =>{
        setCity(target.value);
    }

    const changeStreetHandler = ({ target }) =>{
        setStreet(target.value); 
    }

    const changeHouseNumber = ({ target }) =>{
        setNumber(target.value);
    }

    const changeClothingHandler = ({ target }) =>{
        setTypeOfClothing(target.value);
    }

    const changeAreaHandler = ({ target }) =>{
        setCrisisArea(target.value);
    }

    const clickHandler = () =>{
        if((typeOfClothing && crisisArea) && (PLZ && city) && (street && number)){
            const data = {};
            data.kleidung = typeOfClothing;
            data.krisengebiet = crisisArea;
            data.homeOrOffice = selected;
            data.plz = PLZ;
            data.city = city;
            data.street = street;
            data.number = number;
            data.time = Date.now();
            data.übergabe = deliveryText;
            setLocation(`${PLZ} ${city}`);
            const jsonData = JSON.stringify(data);
            localStorage.setItem(x, jsonData);
            togglePage('registrydata');
        } else {
            if(!typeOfClothing) setFirstSelError(true);
            if(!crisisArea) setSecondSelError(true);
            if(!city || !PLZ || !street || !number) setInputError(true);
        }
    }

    //PLZ der Geschäftsstelle habe ich als 50667 angegeben
    useEffect(() =>{
        if(PLZ.length <= 1) setIsTwoLetters(false);
        if(PLZ.length > 1){
            setIsTwoLetters(true);
            if(PLZ.at(0) === '5' && PLZ.at(1) === '0'){
                setIsEqual(true);
            } else {
                setIsEqual(false);
            }
        }
        if(PLZ.length > 5){
            setIsHigherFive(true);
        } else {
            setIsHigherFive(false);
        }
    
    }, [PLZ]);

    return(
        <div className='row formHeight justify-content-center mt-5'>   
            <div className='col-sm-8 col-11 bgColor rounded-5'>
                <div className='row h-25 align-items-center'>
                    <div className='col'>
                        <h3 className='text-center h2'>Registrierung von Kleiderspenden</h3>
                        <p className='text-center fs-5'>Abholung per Sammelfahrzeug</p>
                    </div>
                </div>
                <div className='row h-75'>
                    
                   

                            <div className='col-12'>
                                <label>Adresse:</label>
                                {isHigherFive && <div className ='validationMsg'>PLZ darf nicht länger als 5 Zahlen sein!</div>}
                                <div className='input-group'>
                                    <input onChange = {changeAdressHandler} value={PLZ} type="number" aria-label="Postal code" className="my-425 w-425-100 my-4 w-50 form-control" placeholder='PLZ' />
                                    <input onChange = {changeCityHandler} value={city} type="text" aria-label="city" className="my-425 w-425-100 my-4 w-50 form-control" placeholder='Stadt' />
                                    <input onChange = {changeStreetHandler} value={street} type="text" aria-label="Street"  className="my-425 w-425-100 w-50 form-control" placeholder='Straße' />
                                    <input onChange = {changeHouseNumber} value={number} type="number" aria-label="House number" className="my-425 w-425-100 w-50 form-control" placeholder='Nr.'/>
                                </div>
                                {isEqual && <div>Abholzeit in 2-3 Tagen</div>}
                                {(!isEqual && isTwoLetters)  && <div>Abholzeit in 2-3 Wochen</div>}
                                {inputError && <div className ='validationMsg'>Bitte fülle alle Adressfelder aus!</div>}
                            </div>
                            {/* <div className='col-12'>
                                <div className='input-group'>
                                    <input type="text" aria-label="Street" className="w-50 form-control" placeholder='Straße' />
                                    <input type="text" aria-label="House number" className="w-50 form-control" placeholder='Hausnummer' />
                                </div>
                            </div> */}
                        
                    
                        {/* <div className="input-group">
                            <span className="w-40 input-group-text">Adresse</span> 
                            <input type="text" aria-label="Postal code" className="w-50 form-control" placeholder='PLZ' />
                            <input type="text" aria-label="city" className="w-50 form-control" placeholder='Stadt' />
                            <input type="text" aria-label="Street" className="w-50 form-control" placeholder='Straße' />
                            <input type="text" aria-label="House number" className="w-50 form-control" placeholder='Hausnummer' />
                        </div> */}
                    
                    
                    <div className='col d-flex flex-column' id='selectContainer'>
                        <label htmlFor='typeOfClothing'>Art der Kleidung:</label>
                        <select onChange={changeClothingHandler} value={typeOfClothing} className="form-select mt-1" aria-label="type of clothing" id='typeOfClothing' required>
                            <option value=''>-- Bitte wählen --</option>
                            <option value="Jacke">Jacke</option>
                            <option value="Pullover">Pullover</option>
                            <option value="Hose">Hose</option>
                            <option value="T-Shirt">T-Shirt</option>
                            <option value="Socken">Socken</option>
                            <option value="Schuhe">Schuhe</option>
                            <option value="Unterwäsche">Unterwäsche</option>
                        </select>
                        {firstSelError && <div className ='validationMsg'>Bitte wähle eine Option!</div>} 
                        <label className='mt-5' htmlFor='crisisArea'>In welches Krisengebiet soll deine Spende geschickt werden?</label>
                        <select onChange={changeAreaHandler} value={crisisArea} className="form-select" aria-label="To which crisis area should the clothing donation go?" id='crisisArea' required>
                            <option value=''>-- Bitte wählen --</option>
                            <option value="Ukraine">Ukraine</option>
                            <option value="Gaza">Gaza</option>
                            <option value="Sudan">Sudan</option>
                            <option value="Myanmar">Myanmar</option>
                            <option value="Äthiopien">Äthiopien</option>
                        </select>
                        {secondSelError && <div className ='validationMsg'>Bitte wähle eine Option!</div>} 
                    
                        <button onClick={clickHandler} type="button" className="w-75 btn btn-primary button-bg mt-5 align-self-center">Registrieren</button>
                    </div>
                    
                </div>
            </div>
        </div>
    );
}

export default Registry_Home;