import React from 'react';
import './QsmFeaturesComp.scss';

function QsmFeaturesComp() {
    return (
        <div className = "FeaturesCompDiv">
            <h2>Product Features compared with indusrty <br/> Benchmark and Capablities </h2>
            <table>
            <tr >
            <th className = "green"></th>
            <th className = "green"></th>
            <th className = "green"></th>
             </tr>
            <tr>
             <td>Lorem, ipsum.</td>
             <td>Lorem, ipsum.</td>
             <td>Lorem, ipsum.</td>
             </tr>
             <tr>
             <td>Lorem, ipsum.</td>
             <td>Lorem, ipsum.</td>
             <td>Lorem, ipsum.</td>
              </tr>
             <tr>
             <td>Lorem, ipsum.</td>
             <td>Lorem, ipsum.</td>
             <td>Lorem, ipsum.</td>
             </tr>
            </table>
            <div className="FeaturesCompDecp">
                <div className="FeaturesCompElements">
                    <h4>Category 1</h4>
                    <ul>
                    <li>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</li>
                    <li>Lorem ipsum dolor sit amet consectetur.</li>
                    <li>Lorem, ipsum.</li>
                    </ul>
                    </div>
                <div className="FeaturesCompElements">
                    <h4>Category 2</h4>
                    <ul>
                    <li>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</li>
                    <li>Lorem ipsum dolor sit amet consectetur.</li>
                    <li>Lorem, ipsum.</li>
                    </ul>
                    </div>
                <div className="FeaturesCompElements">
                    <h4>Category 3</h4>
                    <ul>
                    <li>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</li>
                    <li>Lorem ipsum dolor sit amet consectetur.</li>
                    <li>Lorem, ipsum.</li>
                    </ul>
                    </div>
            </div>
        </div>
    )
}

export default QsmFeaturesComp
