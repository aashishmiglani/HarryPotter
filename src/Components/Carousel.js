import React from 'react'

const Carousel = () => {
    return (
        <>

            <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div className="carousel-inner" style={{ height: "85vh" }}>
                    <div className="carousel-item active">
                        <img src="https://static1.srcdn.com/wordpress/wp-content/uploads/2022/01/Turn-iphone-into-Harry-Potter-Wand.jpg" className="d-block w-100" alt="..." />

                    </div>
                    <div className="carousel-item">
                        <img src="https://www.koimoi.com/wp-content/new-galleries/2022/04/when-emma-watson-almost-quit-the-harry-potter-film-franchise-hermione-granger-would-be-proud-of-it-01.jpg" className="d-block w-100" alt="..." />

                    </div>
                    <div className="carousel-item">
                        <img src="https://media.wired.com/photos/5c9026bbb948cc3e8822652b/master/w_2560%2Cc_limit/dumbledore-culture-MCDHAPO_EC788.jpg" className="d-block w-100" alt="..." />

                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    {/* <span className="visually-hidden">Previous</span> */}
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    {/* <span className="visually-hidden">Next</span> */}
                </button>
            </div>





            {/* <div id="carouselExampleCaptions" className="carousel slide" data-ride="carousel">
                <ol className="carousel-indicators">
                    <li data-target="#carouselExampleCaptions" data-slide-to="0" className="active"></li>
                    <li data-target="#carouselExampleCaptions" data-slide-to="1"></li>
                    <li data-target="#carouselExampleCaptions" data-slide-to="2"></li>
                </ol>
                <div className="carousel-inner" style={{ height: "85vh" }}>
                    <div className="carousel-item active">
                        <img src="https://static1.srcdn.com/wordpress/wp-content/uploads/2022/01/Turn-iphone-into-Harry-Potter-Wand.jpg" className="d-block w-100" alt="..." />
                        <div className="carousel-caption d-none d-md-block" style={{ bottom: "183px" }}>
                            <h5>First slide label</h5>
                            <p>Some representative placeholder content for the first slide.</p>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img src="https://www.koimoi.com/wp-content/new-galleries/2022/04/when-emma-watson-almost-quit-the-harry-potter-film-franchise-hermione-granger-would-be-proud-of-it-01.jpg" className="d-block w-100" alt="..." />
                        <div className="carousel-caption d-none d-md-block" style={{ bottom: "183px" }}>
                            <h5>Second slide label</h5>
                            <p>Some representative placeholder content for the second slide.</p>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img src="https://media.wired.com/photos/5c9026bbb948cc3e8822652b/master/w_2560%2Cc_limit/dumbledore-culture-MCDHAPO_EC788.jpg" className="d-block w-100" alt="..." />
                        <div className="carousel-caption d-none d-md-block" style={{ bottom: "183px" }}>
                            <h5>Third slide label</h5>
                            <p>Some representative placeholder content for the third slide.</p>
                        </div>
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-target="#carouselExampleCaptions" data-slide="prev">
                 <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="sr-only">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-target="#carouselExampleCaptions" data-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span> 
                    <span className="sr-only">Next</span>
                </button>
            </div> */}

        </>)
}

export default Carousel