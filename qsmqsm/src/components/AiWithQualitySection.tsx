import React from 'react'
import AiQuality from '../assets/images/AiQuality.png';
import './AiWithQualitySection.scss'

function AiWithQualitySection() {
    return (
        <div className = "AiWithQualityGrid">
           <div className="AiWithQualityChild"><img src={AiQuality} alt="place holder"/></div>
            <div className="AiWithQualityChild">
                 <h3>Levarage AI with Quality <br/> data to realize with full power <br/>of your quality data</h3>
                 <p>We build custom algorithms and AI models to identify <br/> similar issues, suggest actions and recommendations
                  <br/> so that you can improve product quality and patient <br/> safety</p></div>
        </div>
    )
}

export default AiWithQualitySection
