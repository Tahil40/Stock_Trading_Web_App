import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

const Hero = () => {
    return(
        <>
        <div className="container" style={{ marginTop: "8rem" }}>
            <div className="row text-center my-5">
                <h1>Technology</h1>
                <h3 className="mt-3">Sleek, modern and intuitive trading platform</h3>
                <p className="mt-3">Check out our <a href="">investment offerings<FontAwesomeIcon icon={faArrowRight} /></a></p>
            </div>
        </div>
        </>
    );
};

export default Hero;