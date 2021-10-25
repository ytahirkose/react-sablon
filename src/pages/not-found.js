import React  from 'react';
import {Link} from "react-router-dom";

const NotFound = () => {
    return (
        <div>
            Sayfa Bulunamadı
            <Link to='/home' >yenile</Link>
        </div>
    )
}

export default NotFound;
