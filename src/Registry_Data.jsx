import React, { useEffect } from 'react';

function Registry_Data({ x, togglePage, location }){
    const data = JSON.parse(localStorage.getItem(x));
    const dateObj = new Date(data.time);
    const day = dateObj.getDate() < 10 ? `0${dateObj.getDate()}` : `${dateObj.getDate()}`; 
    const month = dateObj.getMonth() + 1 < 10 ? `0${dateObj.getMonth() + 1}` : `${dateObj.getMonth()}`;
    const hours = dateObj.getHours() < 10 ? `0${dateObj.getHours()}` : `${dateObj.getHours()}`;
    const minutes = dateObj.getMinutes() < 10 ? `0${dateObj.getMinutes()}` : `${dateObj.getMinutes()}`;
    const fullDate = `${day}.${month}.${dateObj.getFullYear()}`;
    const time = `${hours}:${minutes}`;
    data.ort = location;
    const updatedData = JSON.stringify(data);
    localStorage.setItem(x, updatedData);


    const handleComfirmationClick = () =>{
        togglePage('noteOfThanks');
    }

    const handleChangeClick = () =>{
        togglePage('registryselection');
    }

     return(
        <div className='row formHeight justify-content-center mt-5'>   
            <div className='col-sm-8 col-11 bgColor rounded-5 p-0 m-0 h-100'>
                <div className='row h-25 align-items-center'>
                    <div className='col'>
                        <h3 className='text-center h2 textColor'>Zusammenfassung</h3>
                    </div>
                </div>
                <div className='row h-75 m-0 align-items-start'>
                    <div className='col'>
                        <div className='row h-50 p-0 m-0'>
                            <div className='col-6 d-flex flex-column align-items-end fs-5 fs-sm text-end'>
                                <p className='h-20 text-nowrap'>Art der Kleidung:</p>
                                <p className='h-20 text-nowrap'>Zielort der Spende:</p>
                                <p className='h-20'>Ort:</p>
                                <p className='h-20'>Datum:</p>
                                <p className='h-20'>Uhrzeit:</p>
                                <p className='h-20'>Übergabe:</p>
                                
                            </div>
                            <div className='col-6 fs-5 fs-sm d-flex flex-column align-items-start'>
                                <p className='h-20'>{data.kleidung}</p>
                                <p className='h-20'>{data.krisengebiet}</p>
                                <p className='h-20'>{data.ort}</p>
                                <p className='h-20'>{fullDate}</p>
                                <p className='h-20'>{time}</p>
                                <p className='h-20'>{data.übergabe}</p>
                            </div>
                        </div>
                        <div className='col-12 h-100'>
                            <div className='row h-50 p-0 m-0 h-30'>
                                <div className='col-6 d-flex flex-column align-items-center btVert-alignment mt-5'>
                                    <button onClick={handleChangeClick} type='button' className='btn btn-primary changeButton w-50 px-0 text-center fs-sm'>Ändern</button>
                                </div>
                                <div className='col-6 d-flex flex-column align-items-center btVert-alignment mt-5'>
                                    <button onClick={handleComfirmationClick} type='button' className='btn btn-primary button-bg w-50 px-0 text-center fs-sm'>Bestätigen</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>   
        </div>
    );
}

export default Registry_Data;