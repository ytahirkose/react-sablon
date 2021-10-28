import React, {useEffect, useState} from 'react';
import './wheel.scss';
import baseImg from '../../assets/phone.svg';
import {useDispatch, useSelector} from "react-redux";
import {setSectors} from "../../store/userSlice";


const Wheel = ({cont, setCont}) => {

    const [width, setWidth] = useState(0);
    const dispatch = useDispatch();
    const state = useSelector(state => state.userSlice)
    const {sectors, rotateData} = state
    const setSize = () => {
        setWidth(window.innerWidth)
    }

    useEffect(() => {
        setWidth(window.innerWidth);
        fonkWheel(rotateData);
    });

    window.addEventListener('resize', setSize);

    const fonkWheel = (spinRoute) => {
        spinRoute = null;
        const rand = (m, M) => Math.random() * (M - m) + m;
        const tot = sectors.length;
        // const EL_spin = document.querySelector("#spin");
        const EL_whell = document.querySelector("#wheel");
        let ctx = document.querySelector("#wheel")?.getContext('2d');
        const dia = ctx?.canvas.width;
        const rad = dia / 2;
        const PI = Math.PI;
        const TAU = 2 * PI;
        const arc = TAU / sectors.length;

        const friction = 0.990; // 0.995=soft, 0.99=mid, 0.98=hard
        let angVel = 0; // Angular velocity
        let ang = 0; // Angle in radians

        const getIndex = () => Math.floor(tot - ang / TAU * tot) % tot;

        function drawSector(sector, i) {
            const ang = arc * i;
            ctx?.save();
            // COLOR
            ctx?.beginPath();
            ctx.fillStyle = sector.color;
            ctx.moveTo(rad, rad);
            ctx.arc(rad, rad, rad, ang, ang + arc);
            ctx.lineTo(rad, rad);
            ctx.fill();
            // TEXT
            ctx.translate(rad, rad);
            ctx.rotate(ang + arc / 2);
            ctx.textAlign = "right";
            ctx.fillStyle = "#fff";
            ctx.font = "bold 22px sans-serif";
            ctx.fillText(sector.label, rad - 10, 10);
            //
            ctx.restore();
        }

        function frame() {
            if (!angVel) return;
            angVel *= friction; // Decrement velocity by friction
            // if (angVel < 0.002) angVel = 0; // Bring to stop
            ang += angVel; // Update angle
            ang %= TAU; // Normalize angle
            rotate();
        }

        function engine() {
            frame();
            requestAnimationFrame(engine)
        }

        // INIT
        sectors.forEach(drawSector);
        rotate(); // Initial rotation
        engine(); // Start engine

        EL_whell.addEventListener("wheel", (e) => {
            if (cont && !angVel) {
                if ((e.deltaY < 0) || (e.deltaX < 0)) {
                    spinRoute = true;
                } else if ((e.deltaY > 0) || (e.deltaX > 0)) {
                    handleSectors();
                    spinRoute = false;
                }
                if (!angVel) {
                    angVel = rand(0.25, 0.35);
                }
                setCont(false);
            }
        });

        function rotate() {
            const sector = sectors[getIndex()];
            ctx.canvas.style.transform = spinRoute ? `rotate(${ang - PI / 2}rad)` : `rotate(-${ang + PI / 2}rad)`;
            window.sessionStorage.setItem('currentGift', sector.label)
            if (angVel < 0.001 && angVel > 0.00000000000000001) {
                window.location.href = 'win';
            }
        }
    };


    const handleSectors = () => {
        const newArray = [];

        for (let i = sectors.length - 1; i > -1; i--) {
            newArray.push(sectors[i]);
        }
        dispatch(setSectors(newArray));
    }


    return (
        <div className='main'>
            <img width="100%" style={{position: 'absolute'}} src={baseImg} alt='base'/>
            <div className='main-wheel' style={{top: width * 95 / 330}}>
                <div id="wheelOfFortune">
                    <canvas id="wheel" width={width * 6 / 7} height={width * 6 / 7}/>
                    <div id="spin"/>
                </div>
            </div>
        </div>
    )
}

export default Wheel;
