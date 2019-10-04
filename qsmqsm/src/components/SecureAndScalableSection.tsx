import React from 'react'
import SecureAndScalableImg from '../assets/images/Secure&ScalableImg.png'; 
import './SecureAndScalableSection.scss';

function SecureAndScalableSection() {
    return (
        <div className="SecureAndScalableGrid" >
            <div className="SecureAndScalableChild">
                <h3>Secure, Scalable & <br/> Available </h3>
                <p>Security, Scalability and Availability are at the core <br/> of iQuality Analytics.</p>
                <ol>
                    <li>Multiple levels of security </li>
                    <li>Geo-redundant infrastructure on Cloud </li>
                    <li>Ability to ingest and process terabytes of quality data</li>
                </ol>
            </div>
            <div className="SecureAndScalableChild"><img src={SecureAndScalableImg} alt="place holder"/></div>
        </div>
    )
}

export default SecureAndScalableSection
