import React from 'react';
import './QsmSpecs.scss';
import qsmlogo from '../assets/images/qsmlogo.png';
import qsmDecpLogo from '../assets/images/qsmDecpLogo.png';

function QsmSpecs() {
    return (
        <div>
            <div className="qsmSpecsMain">
               <img src={qsmlogo} alt="QSM"/>
               <div className="qsmLogoDecp">
               <h1>Quality Systems Management</h1>
               <h4>Complaint,Effective,Effecient,people,process,product</h4>
               </div>
              </div>
            <div className="quickSpecsDecp">
                <div className="quickSpecsbox">
                    <h2>Measure</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis esse hic odit voluptates odio! Iure, corrupti a, adipisci est quidem quisquam totam dignissimos nam autem veniam minus maiores! Eveniet, perferendis.</p>
                    </div>
                <div className="quickSpecsbox">
                    <h2>Manage</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit maxime non ea, amet voluptas architecto molestias eos! Tempore qui repudiandae nulla soluta architecto amet beatae doloribus mollitia sint, ab non!</p>
                    </div>
                <div className="quickSpecsbox">
                    <h2>Improve</h2>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Earum ducimus distinctio ut id labore consequatur, architecto veniam dicta quos, vel voluptatibus doloribus, hic culpa voluptates nisi. Mollitia unde omnis nobis!</p>
                    </div>
            </div>
            <div className="quickDecpImg">
            <img src={qsmDecpLogo} alt=""/>
            </div>  
        </div>
    )
}

export default QsmSpecs
