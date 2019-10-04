import React from 'react';
import OneQualityImg from '../assets/images/OneQualityImg.png';
import './OneQualitySection.scss';


function OneQualitySection() {
    return (
        <div className="OneQualityGrid">
                     <div className="OneQualityChild">
                <h2>One Quality Data <br/> Platform</h2>
                <p>One quality pltform for:</p>
                <ol>
                    <li>Entire Product Life Cycle</li>
                    <li>All products in your Organization</li>
                    <li>All manufacturing sites</li>
                </ol>
            </div>
            <div className="OneQualityChild"><img src={OneQualityImg} alt="place holder"/></div>
        </div>
    )
}

export default OneQualitySection
