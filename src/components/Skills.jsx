import React from 'react'

export default function Skills() {
    const figma = process.env.PUBLIC_URL + "figma.png"
    const java = process.env.PUBLIC_URL + "java.png"
    const jscript = process.env.PUBLIC_URL + "jscript.png"
    const firebase = process.env.PUBLIC_URL + "firebase.png"
    const mysql = process.env.PUBLIC_URL + "mysql.png"
    const postgresql = process.env.PUBLIC_URL + "postgresql.png"
    const cs = process.env.PUBLIC_URL + "cs.png"







    return (
        <div id='skills' className='flex flex-col items-center justify-center mt-32  gap-y-16'>
            <div className='flex items-center justify-center text-center'>
                <h1 className='text-6xl font-semibold font-serif'>Teknolojiler</h1>
            </div>
            <div className='flex items-center justify-center flex-wrap gap-8'>
                <div className="card relative  flex items-center justify-center w-auto h-[241px] max-h-[241px] max-w-[150px] shadow-2xl py-2 border-t-2 border-orange-600 cursor-pointer group">
                    <figure><img src={java} alt="java" /></figure>
                    <div className="card-body absolute w-full  h-full flex flex-col items-center justify-center  md:hidden md:group-hover:block transition-all">
                        <h2 className="card-title flex items-center justify-center text-white text-4xl">Java</h2>
                        <div className="card-actions mt-4 justify-center">
                            <button className="btn btn-primary">İncele</button>
                        </div>
                    </div>
                </div>
                <div className="card relative flex items-center justify-center w-auto max-w-[150px] h-[241px] max-h-[241px] shadow-2xl py-2 border-t-2 border-orange-600 cursor-pointer group">
                    <figure><img src={figma} alt="figma" /></figure>
                    <div className="card-body absolute w-full h-full flex flex-col items-center justify-center  md:hidden md:group-hover:block transition-all">
                        <h2 className="card-title flex items-center justify-center text-white  text-4xl">Figma</h2>
                        <div className="card-actions mt-4 justify-center">
                            <button className="btn btn-primary">İncele</button>
                        </div>
                    </div>
                </div>
                <div className="card  relative flex items-center justify-center  w-auto max-w-[150px]  h-[241px] max-h-[241px] shadow-2xl py-2 border-t-2 border-orange-600 cursor-pointer group">
                    <figure><img src={jscript} alt="Java Script" /></figure>
                    <div className="card-body absolute w-full h-full flex flex-col items-center justify-center  md:hidden md:group-hover:block transition-all">
                        <h2 className="card-title flex items-center justify-center text-white  text-4xl">JavaScript</h2>
                        <div className="card-actions mt-4 justify-center">
                            <button className="btn btn-primary">İncele</button>
                        </div>
                    </div>
                </div>
                <div className="card  relative flex items-center justify-center  w-auto max-w-[150px]  h-[241px] max-h-[241px] shadow-2xl py-2 border-t-2 border-orange-600 cursor-pointer group">
                    <figure><img src={firebase} alt="Java Script" /></figure>
                    <div className="card-body absolute w-full h-full flex flex-col items-center justify-center  md:hidden md:group-hover:block transition-all">
                        <h2 className="card-title flex items-center justify-center text-white  text-4xl">FireBase</h2>
                        <div className="card-actions mt-4 justify-center">
                            <button className="btn btn-primary">İncele</button>
                        </div>
                    </div>
                </div>
                <div className="card  relative flex items-center justify-center  w-auto max-w-[150px]  h-[241px] max-h-[241px] shadow-2xl py-2 border-t-2 border-orange-600 cursor-pointer group">
                    <figure><img src={postgresql} alt="postgresql" /></figure>
                    <div className="card-body absolute w-full h-full flex flex-col items-center justify-center  md:hidden md:group-hover:block transition-all">
                        <h2 className="card-title flex items-center justify-center text-white  text-4xl">PostgreSql</h2>
                        <div className="card-actions mt-4 justify-center">
                            <button className="btn btn-primary">İncele</button>
                        </div>
                    </div>
                </div>
                <div className="card  relative flex items-center justify-center  w-auto max-w-[150px]  h-[241px] max-h-[241px] shadow-2xl py-2 border-t-2 border-orange-600 cursor-pointer group">
                    <figure><img src={mysql} alt="mysql" /></figure>
                    <div className="card-body absolute w-full h-full flex flex-col items-center justify-center  md:hidden md:group-hover:block transition-all">
                        <h2 className="card-title flex items-center justify-center text-white  text-4xl">MySql</h2>
                        <div className="card-actions mt-4 justify-center">
                            <button className="btn btn-primary">İncele</button>
                        </div>
                    </div>
                </div>
                <div className="card  relative flex items-center justify-center  w-auto max-w-[150px]  h-[241px] max-h-[241px] shadow-2xl py-2 border-t-2 border-orange-600 cursor-pointer group">
                    <figure><img src={cs} alt="C#" /></figure>
                    <div className="card-body absolute w-full h-full flex flex-col items-center justify-center  md:hidden md:group-hover:block transition-all">
                        <h2 className="card-title flex items-center justify-center text-white  text-4xl">C#</h2>
                        <div className="card-actions mt-4 justify-center">
                            <button className="btn btn-primary">İncele</button>
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
    )
}
