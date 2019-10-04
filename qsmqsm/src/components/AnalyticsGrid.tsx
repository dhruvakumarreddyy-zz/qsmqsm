import React from 'react';
import './AnalyticsGrid.scss';
import placeHolder from '../assets/images/analyticsGridPlaceholder.png'

function AnalyticsGrid() {
    return (
        <div className="AnalyticsGrid">
   
            <div className="AnalyticsGridElements"><img src={placeHolder} alt="place holder"/></div>
            <div className="AnalyticsGridElements">
                <h3>Integrates with all <br/> quality management <br/> softwares </h3>
                <p>We can integrate with all your quality management, <br/> any in-house
                 applications to provide a unifies <br/> view of quality metrics across your organization</p>
            </div>
            
            
            
        </div>
    )
}

export default AnalyticsGrid
