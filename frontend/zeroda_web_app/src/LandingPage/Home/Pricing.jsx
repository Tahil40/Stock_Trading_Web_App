import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

const Pricing = () => {
    return(
        <>
        <div className="container">
            <div className="row">
                <div className="col-5">
                    <h1>Unbeatable Pricing</h1>
                    <div className="mt-5">
                        <p>We pioneered the concept of discount broking and price transparency in india. Flat fees and no hidden charges.</p>
                        <a href="">See pricing<FontAwesomeIcon icon={faArrowRight} /></a>
                    </div>
                </div>
                <div className="col-2"/>
                <div className="col-5">
                    <div className="row">
                        <div className="col px-5 py-3 text-center border">
                            <h3>&#8377;0</h3>
                            <p>Free equity delivery and direct mutual funds</p>
                        </div>
                        <div className="col px-5 py-3 text-center border">
                            <h3>&#8377;20</h3>
                            <p>Intraday and F&O</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    );
};

export default Pricing;