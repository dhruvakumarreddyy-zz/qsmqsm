import React from 'react';
import './DecesionMakingSection.scss';
import DecesionMakingImg from '../assets/images/DecesionMakingImg.png';

function DecesionMakingSection() {
    return (
        <div className ="DecesionMakingDiv">
            <div className="DecesionMakingChild">
            <h3>Enabling Better <br/>Decision Making</h3>
            </div>
            <div className="DecesionMakingChild">
               <img src={DecesionMakingImg} alt=""/>
            </div>
            
        </div>
    )
}

export default DecesionMakingSection
