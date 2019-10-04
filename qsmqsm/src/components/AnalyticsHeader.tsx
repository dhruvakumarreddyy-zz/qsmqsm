import React from 'react';
import './AnalyticsHeader.scss';
import analyticsImg from'../assets/images/analytics-header.png';

function AnalyticsHeader() {
    return (
        <div className = "AnalyticsHeader">
            <img src={analyticsImg} alt=""/>
            <div className="AnalyticsHeaderContent">
            <h2>Inteligent <br/>Quality <br/> Analytics</h2>
            <p>Leverage all your Quality data and AI <br/> to make right decesions and <br/> product Quality </p>
            </div>
        </div>
    )
}

export default AnalyticsHeader
