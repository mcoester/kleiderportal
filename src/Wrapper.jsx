import React from 'react';

function Wrapper({ children, togglePage, selected, isRegisteredWrapper, setIsRegisteredWrapper, setIsRegistered }){ 

    const handleHomeClick = () =>{
        togglePage('landingpage');
        setIsRegisteredWrapper(true);
        setIsRegistered(true);
    }
    
    const handleSupportClick = () =>{
        togglePage('regorchange');
        setIsRegisteredWrapper(true);
        setIsRegistered(true);
    };

    const handleRegistryClick = () =>{
        if(selected){
            togglePage('registrydatatwo');
            setIsRegisteredWrapper(true);
        } else {
            setIsRegisteredWrapper(false);
        }  
    }

    return (
    <div className="container d-flex flex-column min-vh-100 container-border">
        <header>
            <div className="row firstRow heightHeader">
                <div className="col p-0">
                    <h1 className="display-1 text-center fw-bold headerColor bgColor">Kleiderportal</h1>
                </div>
            </div>
            <div className="row fs-4 fw-medium bgColorNav">
                <div className="col-12 d-lg-flex justify-content-center heightCl">
                    <nav className="navbar navbar-expand-lg heightCl">
                        <a onClick={handleHomeClick} className="navbar-brand " href="#"><img src="./Frame 4.png" alt="Brand of current website"/></a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" 
                        data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse bgColorNav row" id="navbarSupportedContent">
                            <div className="col">
                                <ul className="navbar-nav">
                                    <li className="nav-item px-3">
                                        <a data-bs-toggle="collapse" data-bs-target=".navbar-collapse.show" onClick={handleHomeClick} className="nav-link active textColor" href="#">Home</a>
                                    </li>
                                    <li className="nav-item px-3">
                                        <a data-bs-toggle="collapse" data-bs-target=".navbar-collapse.show" onClick={handleSupportClick} className="nav-link textColor" href="#">Unterstützen</a>
                                    </li>
                                    <li className="nav-item px-3">
                                        <a onClick={handleRegistryClick} data-bs-toggle="collapse" data-bs-target=".navbar-collapse.show" className="nav-link textColor" href="#">Meine Registrierung</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </nav>
                </div>
                {!isRegisteredWrapper && <div className='col validationMsg validationSize text-center'>Keine bestehende Registrierung gefunden</div>}
            </div>
        </header>
        <main className="flex-fill d-flex flex-column">
            {children}   
        </main>
        <footer>  
            <div className="row bgColorNav mt-3 footerHeightCl">
                <div className="col d-flex justify-content-center">
                    <ul className='list-no-points d-flex align-items-center m-0 p-0'>
                        <li><a href="#" className="mb-0 mt-1 mx-2 fs-6 fw-light textColor text-decoration-none fs-425-screen">Impressum</a></li>
                        <span className='border-start mx-2 footer-border-color h-75'></span>
                        <li><a href="#"  className="mb-0 mt-1 mx-2 fs-6 fw-light textColor text-decoration-none fs-425-screen">Datenschutzerklärung</a></li>
                        <span className='border-start mx-2 footer-border-color h-75'></span>
                        <li><a href="#"  className="mb-0 mt-1 mx-2 fs-6 fw-light textColor text-decoration-none fs-425-screen">AGB</a></li>
                    </ul>
                </div>
            </div>    
        </footer>
    </div>
    );
}

export default Wrapper;