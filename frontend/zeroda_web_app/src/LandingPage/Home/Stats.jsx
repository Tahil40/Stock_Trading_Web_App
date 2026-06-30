import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

const Stats = () => {
  return (
    <>
      <div className="container my-5">
        <div className="row p-5">
          <div className="col-6">
            <h1 className="fs-1">Trust with confidence</h1>
            <div className="mt-5 mb-3">
                <h3 className="fs-4">Customer-first always</h3>
                <p className="text-muted">That's why 1.3+ crore customers trust Zerodha with &#8377;3.5+ lakh crores worth of equity investments.</p>
            </div>
            <div className="mb-3">
                <h3 className="fs-4">No Spam or gimmicks</h3>
                <p className="text-muted">No gimmicks, spam, "gamification", or annoying push notifications. High quality apps that use at your pace, the way you like.</p>
            </div>
            <div className="mb-3">
                <h3 className="fs-4">The Zerodha universe</h3>
                <p className="text-muted">Not just an app, but a whole ecosystem. our investment in 30+ fintech startups offer you tailored services specific to your needs.</p>
            </div>
            <div className="mb-3">
                <h3 className="fs-4">Do better with money</h3>
                <p className="text-muted">With initiatives like Nudge and Kill Switch, we don't just facilitate transactions, but actively help you do better with your money.</p>
            </div>
          </div>
          <div className="col-6">
            <img
              src="/public/assets/media/images/ecosystem.png"
              alt="loading..."
              style={{width:"90%"}}
            />
            <div className="row mt-2 mb-5 text-center">
                <div className="col-6">
                    <a href="">Explore our products<FontAwesomeIcon icon={faArrowRight} /></a>
                </div>
                <div className="col-6">
                    <a href="">Try kite demo</a>
                </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Stats;