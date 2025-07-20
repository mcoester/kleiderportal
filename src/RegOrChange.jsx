import React from 'react';

function RegOrChange({ togglePage, selected, isRegistered, setIsRegistered, setIsRegisteredWrapper }){
    const handleRegClick = () =>{
        togglePage('registryselection');
        setIsRegisteredWrapper(true);
        setIsRegistered(true);
    }

    const handleChangeClick = () =>{
        // if (selected){
        //     togglePage('registrydatatwo');
        // } else {
        //     document.getElementById('registry').classList.add('validationError');
        //     document.getElementById('errorMessage').textContent = 'Keine bestehende Registrierung gefunden';
        //     setValidationMessage('');
        // }
        if(selected){
            togglePage('registrydatatwo');
            setIsRegistered(true);
        } else {
            setIsRegistered(false);
        }
    }

    return (
        <>
            <div className='row ps-4 mt-5'>
                <div className='col-2 d-flex align-items-center'>
                    <button onClick={handleRegClick} type="button" className="btn btn-primary button-bg fw-semibold fs-5 h-md-75 d-flex align-items-center ">+</button>
                </div>
                <div className='col-8 d-flex align-items-center'>
                    <p className='fs-2 d-flex mb-0 mx-3'>Neue Registrierung</p>
                </div>
            </div>
            <div className='row mt-5 ps-4' id='registry'>
                <div className='col-2 d-flex align-items-center'>
                    <button onClick={handleChangeClick} type="button" className="btn btn-primary button-bg fw-semibold fs-5 h-md-75 d-flex align-items-center">+</button>
                </div>
                <div className='col-8 d-flex align-items-center'>
                    <p className='fs-2 mb-0 mx-3'>Bestehende Registrierung</p>
                </div>
            </div>
            <div className='row'>
                <div className='col'>
                    {!isRegistered && <div id='errorMessage' className='validationMsg text-center'>Keine bestehende Registrierung gefunden</div>}
                </div>
            </div>
        </>
    );
}

export default RegOrChange;