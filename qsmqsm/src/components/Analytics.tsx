import React from 'react';
import './Analytics.scss';
import AnalyticsHeader from './AnalyticsHeader';
import AnalyticsGrid from './AnalyticsGrid';
import OneQualitySection from './OneQualitySection';
import DecesionMakingSection from './DecesionMakingSection';
import AllQualityManagementSection from '../components/AllQualityManagementSection';
import CustomAnalyticsSection from '../components/CustomAnalyticsSection';


import KickStrtSection from './KickStrtSection';
import OurBlogSection from './OurBlogSection';
import SecureAndScalableSection from './SecureAndScalableSection';
import AiWithQualitySection from './AiWithQualitySection';


function Analytics() {
    return (
        <div className="AnalyticsDiv">
            <AnalyticsHeader></AnalyticsHeader>
            <OneQualitySection></OneQualitySection>
            <DecesionMakingSection></DecesionMakingSection>
            <AllQualityManagementSection></AllQualityManagementSection>
            <CustomAnalyticsSection></CustomAnalyticsSection>
            <AiWithQualitySection></AiWithQualitySection>
            <SecureAndScalableSection></SecureAndScalableSection>
            <KickStrtSection></KickStrtSection>
            <OurBlogSection></OurBlogSection>
        </div>
    )
}

export default Analytics
