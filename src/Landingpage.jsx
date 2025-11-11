function Landingpage({ togglePage }){
    const handleClick = () =>{
        togglePage('regorchange');
    }
    return (
            <>
                <div className="row justify-content-center mt-4">
                    <div className="col-11">
                        <section aria-label="Sende Hoffnung - Spende Kleidung">
                            <h1 className="display-5 textColor fw-semibold">Sende Hoffnung - Spende Kleidung</h1>
                            <p className="fs-4">
                                In vielen Krisengebieten fehlt es am Nötigsten – auch an warmer, sauberer Kleidung. Mit nur wenigen Klicks kannst du helfen: Spende gut erhaltene Kleidung direkt dorthin, wo sie dringend gebraucht wird.
                                Ob für Geflüchtete, Katastrophenopfer oder notleidende Familien – du bestimmst, wohin deine Hilfe geht. Gemeinsam machen wir Kleidung zu mehr als nur Stoff: Wir machen sie zu einem Zeichen der Solidarität.
                            </p>
                        </section>
                    </div>
                </div>
                <div className="row mt-3">
                    <div className="col col-md-8 mx-auto">
                         <div id="myCarousel" className="carousel slide">
                            <div className="carousel-inner rounded">
                                <div className="carousel-item active">
                                    <img src="./pexels-towfiqu-barbhuiya-3440682-11200117.jpg" className="w-100 h-auto" alt="Donation box filled with clothes. Image by Towfiqu barbhuiya via Pexels - https://www.pexels.com/de-de/foto/kleider-kleidung-box-schachtel-11200117/"/>
                                </div>
                                <div className="carousel-item">
                                    <img src="./pexels-rdne-8580732.jpg" className="w-100 h-auto" alt="Clothes stored in open boxes. Image by RDNE Stock project via Pexels - https://www.pexels.com/de-de/foto/kleider-stillleben-spende-kartons-8580732/"/>
                                </div>
                                <div className="carousel-item">
                                    <img src="./clothes-background-header-kaipilger-pexels.jpg" className="w-100 h-auto" alt="Clothing hanging on a hanger. Image by Kai Pilger via Pexels - https://www.pexels.com/de-de/foto/verschiedene-kleidungsstucke-996329/"/>
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
                        </div>
                    </div>
                </div>
                <div className="row mt-3 justify-content-center">
                    <div className="col-11">
                        <section aria-label="So einfach kannst du helfen:">
                            <h2 className="h3 textColor">So einfach kannst du helfen:</h2>
                            <p className="fs-5">
                                Du entscheidest selbst, wie du deine Spende abgibst:
                                Bringe deine Kleiderspende direkt zur Geschäftsstelle unseres Spendencenters – oder nutze unseren praktischen Abholservice an deiner Wunschadresse, zum Beispiel bei dir zuhause.

                                Egal wie du spendest: Deine Hilfe kommt an – gezielt, schnell und sicher.
                                Jetzt ist der Moment, aktiv zu werden. Öffne deinen Kleiderschrank und öffne dein Herz – <span className='textColor fw-medium'>jede Spende zählt.</span>
                            </p>
                        </section>
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