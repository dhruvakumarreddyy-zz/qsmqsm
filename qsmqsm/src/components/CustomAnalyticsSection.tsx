import React from 'react';
import './CustomAnalytics.scss';
import placeHolder from '../assets/images/analyticsGridPlaceholder.png';

function CustomAnalyticsSection() {
    return (
        <div className = "CustomAnalyticsGrid">
            <div className="CustomAnalyticsChild">
                <h3>Custom Analytics</h3>
                <p>Build your custom reports, dashboards, <br/> visualisations to help your quality teams make<br/> better decisions. We embed</p>
            </div>
            <div className="CustomAnalyticsChild"><img src={placeHolder} alt="place holder"/></div>
        </div>
    )
}

export default CustomAnalyticsSection
