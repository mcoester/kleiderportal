import React from 'react';

function YourDonation({ x }){
    const data = JSON.parse(localStorage.getItem(x));
    const dateObj = new Date(data.time);
    const day = dateObj.getDate() < 10 ? `0${dateObj.getDate()}` : `${dateObj.getDate()}`; 
    const month = dateObj.getMonth() + 1 < 10 ? `0${dateObj.getMonth() + 1}` : `${dateObj.getMonth()}`;
    const hours = dateObj.getHours() < 10 ? `0${dateObj.getHours()}` : `${dateObj.getHours()}`;
    const minutes = dateObj.getMinutes() < 10 ? `0${dateObj.getMinutes()}` : `${dateObj.getMinutes()}`;
    const fullDate = `${day}.${month}.${dateObj.getFullYear()}`;
    const time = `${hours}:${minutes}`;

    return (
        <div className='row formHeight justify-content-center mt-5'>   
            <div className='col-sm-8 col-11 bgColor rounded-5 p-0 m-0 h-100'>
                <div className='row h-25 align-items-center'>
                    <div className='col'>
                        <h3 className='text-center h2 textColor'>Ihre Spende</h3>
                    </div>
                </div>
                <div className='row h-75 m-0 align-items-start'>
                    <div className='col mt-3 p-0 h-75'>
                        <dl className='h-100'>
                            <div className='row h-50 p-0 m-0'>
                                <div className='col-6 d-flex flex-column align-items-end fs-5 fs-sm text-end'>
                                    <dt className='h-20 text-nowrap fw-normal'>Art der Kleidung:</dt>
                                    <dt className='h-20 text-nowrap fw-normal'>Zielort der Spende:</dt>
                                    <dt className='h-20 fw-normal'>Ort:</dt>
                                    <dt className='h-20 fw-normal'>Datum:</dt>
                                    <dt className='h-20 fw-normal'>Uhrzeit:</dt>
                                    <dt className='h-20 fw-normal'>Übergabe:</dt>
                                </div>
                                <div className='col-6 fs-5 fs-sm d-flex flex-column align-items-start'>
                                    <dd className='h-20'>{data.kleidung}</dd>
                                    <dd className='h-20'>{data.krisengebiet}</dd>
                                    <dd className='h-20'>{data.ort}</dd>
                                    <dd className='h-20'>{fullDate}</dd>
                                    <dd className='h-20'>{time}</dd>
                                    <dd className='h-20'>{data.übergabe}</dd>
                                </div>
                            </div>
                        </dl>
                    </div>
                </div>
            </div>   
        </div>
    );
}

export default YourDonation;