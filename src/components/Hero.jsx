import React, { useRef } from 'react'
import Picture from '../DevMaterials/xa.png'
export default function Hero() {

    const heroRef = useRef();
    return (
        <div id='hero' ref={heroRef} className="hero min-h-screen   " style={{ backgroundImage: `url(${Picture})` }}>
            <div className="hero-overlay bg-opacity-0"></div>
            <div className="hero-content text-center text-neutral-content">

            </div>
        </div>)
}
