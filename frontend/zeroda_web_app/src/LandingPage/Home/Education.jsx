import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

const Education = () => {
    return (
        <>
        <div className="container my-5">
            <div className="row">
                <div className="col-6">
                    <img src="/public/assets/media/images/education.svg" alt="loading..." />
                </div>
                <div className="col-6">
                    <h1>Free and open market education</h1>
                    <div className="my-5">
                        <p>Varsity, the largest online stock market education book in the world covering everything from basics to advance trading.</p>
                        <a href="">Varsity <FontAwesomeIcon icon={faArrowRight} /></a>
                    </div>
                    <div className="mb-5">
                        <p>TradingQ&A, the most active trading and investment community in india for all market related queries.</p>
                        <a href="">TradingQ&A <FontAwesomeIcon icon={faArrowRight} /></a>
                    </div>
                </div>
            </div>
        </div>
        </>
    );
};

export default Education;