import React from "react";

import PlaceHolderImage1 from '../assets/index/placeholder.jpg'
import PlaceHolderImage2 from '../assets/index/mhbatch 1.png'
import PlaceHolderImage3 from '../assets/index/myhouseParty.jpg'
const IndexImageBoxes = () =>{

    return(
        <div>
            <section>
                <div className="index-main-picture-background">
                    <div className="image-overlay-container">
                        <img className="index-main-pictures" src={PlaceHolderImage1} alt="Main Picture" loading = "eager"/>
                            <div className="overlay-content">
                                <h1 className="header-index-big">MYHOUSE</h1>
                                <h2 className = "header-index-small">BAR AND GRILL</h2>
                                <button className="home-button" onClick={() => window.location.href = 'pages/gallery.html'}>VIEW GALLERY</button>
                            </div>
                    </div>
                </div>
            </section>


            <section>
                <div className = "index-main-picture-background">
                    <div className="image-overlay-container">
                        <img className ="index-main-pictures" src = {PlaceHolderImage2} alt = "placeholder image" loading = "lazy"/>
                            <div className = "overlay-content">
                                <section>
                                    <h2 className = "header-onimage-index">ABOUT US </h2>
                                    <p className = "text-onimage-index">
                                        MyHouse is the perfect Mix between
                                        a Dynamic Sports Bar Infused with A High Energy
                                        Nightclub, Featuring The Backyard and A Rooftop.
                                    </p>
                                </section>
                            </div>
                    </div>
                </div>
            </section>


            <section>
                <div className = "index-main-picture-background">
                    <div className="image-overlay-container">
                        <img className ="index-main-pictures" src = {PlaceHolderImage3} alt = "placeholder image" loading = "lazy"/>
                            <div className = "overlay-content">
                                <section>
                                    <h2 className = "header-onimage-index">BOTTLE SERVICE</h2>
                                    <p className = "text-onimage-index">
                                        Ordering Bottle Service Has never Been Easier.
                                        You Can Now Order Online. Keep Partying,
                                        We Got You Covered.
                                    </p>
                                    <button className="home-button"  >ORDER NOW</button>
                                </section>
                            </div>
                    </div>
                </div>

            </section>

        </div>
    );
}

export default IndexImageBoxes