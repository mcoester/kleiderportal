import React, { useEffect } from 'react';


function Landingpage({ togglePage }){
    //const imgButton = document.getElementById('img-button')
    // const showButton = () =>{
    //         // imgButton.style.display = 'inline';
    //         setIsMouseOver(true);
    //     };
        
    //     const hideButton = () =>{
    //         setIsMouseOver(false);
    //     }
    // useEffect(() =>{
    //     const imgCarousel = document.getElementById('myCarousel');
    //     const [playPauseButton] = document.getElementsByClassName('play-pause-button');

    //     playPauseButton.addEventListener('click', () =>{
    //         if(play) {
    //             imgButton.style.backgroundImage = 'url(/Play_NoBorder.png)';
    //             setPlay(false);
                
    //         } else {
    //             imgButton.style.backgroundImage = 'url(/Pause_NoBorder.png)';
    //             setPlay(true);
    //         }
    //     });

    // },[]);

    // const handlePlayPauseClick = () =>{
    //     if(!paused){
    //         setPaused(true);
    //     } else {
    //         setPaused(false);
    //     } ;
    // }
    
    const handleClick = () =>{
        togglePage('regorchange');
    }
    return (
            <>
                <div className="row justify-content-center mt-4">
                    <div className="col-11">
                        <h1 className="display-5 textColor fw-semibold">Lorem ipsum</h1>
                        <p className="fs-4">
                            dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut 
                            labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores
                            et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem 
                            ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et 
                            dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.
                            Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
                        </p>
                    </div>
                </div>
                <div className="row mt-3">
                    <div className="col col-md-8 mx-auto">
                        {/* {!paused ? (<div onMouseOver={showButton} onMouseLeave={hideButton} id="myCarousel" className="carousel slide" data-bs-ride="carousel">
                            <div className="carousel-inner rounded">
                                <div className="carousel-item active">
                                    <img src="../public/pexels-towfiqu-barbhuiya-3440682-11200117.jpg" className="w-100 h-auto" alt="Donation box filled with clothes"/>
                                </div>
                                <div className="carousel-item">
                                    <img src="../public/pexels-rdne-8580732.jpg" className="w-100 h-auto" alt="Clothes stored in open boxes"/>
                                </div>
                                <div className="carousel-item">
                                    <img src="../public/clothes-background-header-kaipilger-pexels.jpg" className="w-100 h-auto" alt="Clothing hanging on a hanger"/>
                                </div>
                            </div>
                            <button className="pre-back-button carousel-control-prev" type="button" data-bs-target="#myCarousel" data-bs-slide="prev">
                                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span className="visually-hidden">Previous</span>
                            </button>
                            <button className="pre-back-button carousel-control-next" type="button" data-bs-target="#myCarousel" data-bs-slide="next">
                                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                <span className="visually-hidden">Next</span>
                            </button>
                            {isMouseOver && (
                                <button onClick={handlePlayPauseClick} type='button' className='play-pause-button'>
                                    {paused ? <span className='play-button'></span> : <span className='pause-button'></span>}
                                </button>
                            )}
                        </div>) : 
                        (<div onMouseOver={showButton} onMouseLeave={hideButton} id="myCarousel" className="carousel slide">
                            <div className="carousel-inner rounded">
                                <div className="carousel-item active">
                                    <img src="../public/pexels-towfiqu-barbhuiya-3440682-11200117.jpg" className="w-100 h-auto" alt="Donation box filled with clothes"/>
                                </div>
                                <div className="carousel-item">
                                    <img src="../public/pexels-rdne-8580732.jpg" className="w-100 h-auto" alt="Clothes stored in open boxes"/>
                                </div>
                                <div className="carousel-item">
                                    <img src="../public/clothes-background-header-kaipilger-pexels.jpg" className="w-100 h-auto" alt="Clothing hanging on a hanger"/>
                                </div>
                            </div>
                            <button className="pre-back-button carousel-control-prev" type="button" data-bs-target="#myCarousel" data-bs-slide="prev">
                                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span className="visually-hidden">Previous</span>
                            </button>
                            <button className="pre-back-button carousel-control-next" type="button" data-bs-target="#myCarousel" data-bs-slide="next">
                                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                <span className="visually-hidden">Next</span>
                            </button>
                            {isMouseOver && (
                                <button onClick={handlePlayPauseClick} type='button' className='play-pause-button'>
                                    {paused ? <span className='play-button'></span> : <span className='pause-button'></span>}
                                </button>
                            )}
                        </div>)} */}
                        <div id="myCarousel" className="carousel slide">
                            <div className="carousel-inner rounded">
                                <div className="carousel-item active">
                                    <img src="./pexels-towfiqu-barbhuiya-3440682-11200117.jpg" className="w-100 h-auto" alt="Donation box filled with clothes"/>
                                </div>
                                <div className="carousel-item">
                                    <img src="./pexels-rdne-8580732.jpg" className="w-100 h-auto" alt="Clothes stored in open boxes"/>
                                </div>
                                <div className="carousel-item">
                                    <img src="./clothes-background-header-kaipilger-pexels.jpg" className="w-100 h-auto" alt="Clothing hanging on a hanger"/>
                                </div>
                            </div>
                            <button className="pre-back-button carousel-control-prev" type="button" data-bs-target="#myCarousel" data-bs-slide="prev">
                                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span className="visually-hidden">Previous</span>
                            </button>
                            <button className="pre-back-button carousel-control-next" type="button" data-bs-target="#myCarousel" data-bs-slide="next">
                                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                <span className="visually-hidden">Next</span>
                            </button>
                            {/* {isMouseOver && (
                                <button onClick={handlePlayPauseClick} type='button' className='play-pause-button'>
                                    {paused ? <span className='play-button'></span> : <span className='pause-button'></span>}
                                </button>
                            )} */}
                        </div>
                    </div>
                </div>
                <div className="row mt-3 justify-content-center">
                    <div className="col-11">
                        <p className="fs-5">
                            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore e
                            dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet 
                            clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, 
                            consetetur sadipscing:
                        </p>
                    </div>
                </div>
                <div className="row mt-1 justify-content-center">
                    <div className="col-4 col-md-1 d-flex justify-content-center">
                        <button type="button" className="btn btn-primary button-bg" onClick={handleClick}>Unterstützen</button>
                    </div>
                </div>
            </>
    );
}

export default Landingpage;