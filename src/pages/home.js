import React, {useState} from 'react';
import Wheel from "../components/wheel/wheel";

const Home = () => {
    const [cont, setCont] = useState(true);

    return (
        <div>
            <Wheel cont={cont} setCont={setCont}/>
        </div>
    );
}


export default Home;
