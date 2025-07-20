import React from 'react';

function Registry_Office({ deliveryText, firstSelError, setFirstSelError, secondSelError, setSecondSelError, crisisArea, setCrisisArea, typeOfClothing, setTypeOfClothing, x, togglePage, selected}){
    // const validate = () =>{
    //     const [selectOne, selectTwo] = document.getElementsByClassName('form-select');
    //     const [valOne, valTwo] = document.getElementsByClassName('validationMsg');
    //     const data = {};
    //     if (!selectOne.checkValidity()){
    //         selectOne.classList.add('validationError');
    //         valOne.textContent = 'Bitte wähle eine Option';
    //     } else {
    //         selectOne.classList.remove('validationError');
    //         valOne.textContent = '';
    //     } 
    //     if(!selectTwo.checkValidity()) {
    //          selectTwo.classList.add('validationError');
    //          valTwo.textContent = 'Bitte wähle eine Option';
    //     } else {
    //         selectTwo.classList.remove('validationError');
    //         valTwo.textContent = '';
    //     }
        
    //     if(selectOne.checkValidity() && selectTwo.checkValidity()){
    //         data.kleidung = selectOne.value;
    //         data.krisengebiet = selectTwo.value;
    //         data.homeOrOffice = selected;
    //         data.time = Date.now();
    //         const jsonData = JSON.stringify(data);
    //         localStorage.setItem(x, jsonData);
    //         togglePage('registrydata');
    //         setValidationMessage('');
    //     }
    // }
        const clickHandler = () =>{
            if( typeOfClothing && crisisArea ){
                const data = {};
                data.kleidung = typeOfClothing;
                data.krisengebiet = crisisArea;
                data.homeOrOffice = selected;
                data.time = Date.now();
                data.übergabe = deliveryText;
                const jsonData = JSON.stringify(data);
                localStorage.setItem(x, jsonData);
                togglePage('registrydata');
            } else {
                if(!typeOfClothing) setFirstSelError(true);
                if(!crisisArea) setSecondSelError(true);
            }
        }

        const changeHandler = ({ target }) =>{
            if(target.id === 'typeOfClothing') setTypeOfClothing(target.value);
            if(target.id === 'crisisArea') setCrisisArea(target.value);
        };
    

    return(
        <div className='row formHeight justify-content-center mt-5'>   
            <div className='col-sm-8 col-11 bgColor rounded-5'>
                <div className='row h-25 align-items-center'>
                    <div className='col'>
                        <h3 className='text-center h2'>Registrierung von Kleiderspenden</h3>
                        <p className='text-center fs-5'>Übergabe an der Geschäftsstelle</p>
                    </div>
                </div>
                <div className='row h-75'>
                    <div className='col d-flex flex-column' id='selectContainer'>
                        <label htmlFor='typeOfClothing'>Art der Kleidung:</label>
                        <select onChange={changeHandler} value={typeOfClothing} className="form-select mt-1" aria-label="type of clothing" id='typeOfClothing' required>
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
                        <select onChange={changeHandler} value={crisisArea} className="form-select" aria-label="To which crisis area should the clothing donation go?" id='crisisArea' required>
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

export default Registry_Office;