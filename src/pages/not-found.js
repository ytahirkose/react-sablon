import React  from 'react';
import {Link} from "react-router-dom";

const NotFound = () => {
    return (
        <div>
            <Link to='/wheel' >bulunamadı</Link>
            <div>{window.sessionStorage.getItem('currentGift')}</div>
        </div>
    )
}

export default NotFound;
