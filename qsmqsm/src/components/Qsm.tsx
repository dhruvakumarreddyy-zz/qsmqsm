import React from 'react';
import './Qsm.scss';
import QsmSpecs from './QsmSpecs';
import QsmFeatures from './QsmFeatures';
import QsmFeaturesComp from './QsmFeaturesComp';

function Qsm() {
    return (
        <div className = "QsmContainer">
            <QsmSpecs></QsmSpecs>
            <QsmFeatures></QsmFeatures>
            <QsmFeaturesComp></QsmFeaturesComp>
            
        </div>
    )
}

export default Qsm


