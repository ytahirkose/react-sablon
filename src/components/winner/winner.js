import React  from 'react';
import './winner.scss'

const Winner = () => {
    return (
        <div>
            <img width="100%" style={{zIndex: -1, position: 'relative'}} src='https://cms.vodafone.com.tr/static/img/content/21-04/22/dogumgunucark-min.jpg' alt='base'/>
            <div className="win">
                <h1>Tebrikler</h1>
                <h1 className="font">{window.sessionStorage.getItem('currentGift')}</h1>
                <h1>Kazandınız!</h1>
            </div>
        </div>
    )
}

export default Winner;
