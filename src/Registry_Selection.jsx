import React from 'react';

function Registry_Selection({setDeliveryText, setLocation, togglePage, select, setTypeOfClothing, setCrisisArea, setPLZ, setStreet, setCity, setNumber }){
    const handleOfficeClick = () =>{
        togglePage('registryoffice');
        select('office');
        setTypeOfClothing('');
        setCrisisArea('');
        setPLZ('');
        setCity('');
        setNumber('');
        setStreet('');
        setLocation('50667 Köln');
        setDeliveryText('Geschäftsstelle');
    }

    const handleHomeClick = () =>{
        togglePage('registryhome')
        select('home');
        setTypeOfClothing('');
        setCrisisArea('');
        setPLZ('');
        setCity('');
        setNumber('');
        setStreet('');
        setDeliveryText('Zuhause');
    }

    return (
        <div className='row formHeight justify-content-center mt-5'>   
            <div className='col-sm-8 col-11 bgColor rounded-5'>
                <div className='row h-25 align-items-center'>
                    <div className='col'>
                        <h3 className='text-center h2'>Registrierung von Kleiderspenden</h3>
                    </div>
                </div>
                <div className='row h-75 pt-5'>
                    <div className='h-50 col d-flex w-100 justify-content-center flex-wrap align-items-start'>
                        <button onClick={handleOfficeClick} type='button' className="widthButton heightButton btn btn-primary button-bg mx-2">Übergabe an der Geschäftsstelle</button>
                        <button onClick={handleHomeClick} type='button' className="widthButton heightButton btn btn-primary button-bg mx-2">Abholung per Sammelfahrzeug</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Registry_Selection;