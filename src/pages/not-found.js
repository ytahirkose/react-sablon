import React  from 'react';
import {Link} from "react-router-dom";

const NotFound = () => {
    return (
        <div>
            Sayfa Bulunamad─▒
            <Link to='/home' >yenile</Link>
        </div>
    )
}

export default NotFound;
