import React from 'react'
import Picture from '../DevMaterials/xa.png'
export default function Hero() {
    return (
        <div className="hero min-h-screen  " style={{ backgroundImage: `url(${Picture})` }}>
            <div className="hero-overlay bg-opacity-0"></div>
            <div className="hero-content text-center text-neutral-content">
                
            </div>
        </div>)
}
