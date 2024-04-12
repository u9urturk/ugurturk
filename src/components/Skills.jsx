import React from 'react'

export default function Skills() {
    const figma = process.env.PUBLIC_URL + "figma.png"
    const java = process.env.PUBLIC_URL + "java.png"
    const jscript = process.env.PUBLIC_URL + "jscript.png"
    const firebase = process.env.PUBLIC_URL + "firebase.png"
    const mysql = process.env.PUBLIC_URL + "mysql.png"
    const postgresql = process.env.PUBLIC_URL + "postgresql.png"
    const cs = process.env.PUBLIC_URL + "cs.png"
    const nodejs = process.env.PUBLIC_URL + "nodejs.png"
    const reactjs = process.env.PUBLIC_URL + "reactjs.png"
    const html = process.env.PUBLIC_URL + "html.png"
    const css = process.env.PUBLIC_URL + "css.png"
    const skillsData = [
        {
            name:"Figma",
            url:figma
        },
        {
            name:"Java",
            url:java
        }, {
            name:"JavaScript",
            url:jscript
        }, {
            name:"FireBase",
            url:firebase
        }, {
            name:"MySql",
            url:mysql
        }, {
            name:"PostgreSql",
            url:postgresql
        }, {
            name:"C#",
            url:cs
        }, {
            name:"NodeJs",
            url:nodejs
        }, {
            name:"ReactJs",
            url:reactjs
        }, {
            name:"HTML",
            url:html
        }, {
            name:"CSS",
            url:css
        },

        
    ]

    return (
        <div id='skills' className='flex flex-col items-center justify-center mt-32  gap-y-16'>
            <div className='flex items-center justify-center text-center'>
                <h1 className='text-6xl font-semibold font-serif'>Teknolojiler</h1>
            </div>
            <div className='flex items-center justify-center flex-wrap gap-8'>
                {
                    skillsData.map((skill, key) => {
                       return <div key={key} className="card relative  flex items-center justify-center w-auto h-[241px] max-h-[241px] max-w-[150px] shadow-2xl py-2 border-t-2 border-orange-600 cursor-pointer group">
                            <figure><img src={skill.url} alt={skill.name} /></figure>
                            <div className="card-body absolute   w-full  h-full flex flex-col items-center justify-center  md:hidden md:group-hover:block transition-all">
                                <h2 className="card-title flex items-center justify-center text-white text-4xl">{skill.name}</h2>
                                <div className="card-actions mt-4 justify-center pt-16">
                                    <button className="btn btn-primary">İncele</button>
                                </div>
                            </div>
                        </div>
                    })
                }

            </div>

        </div>
    )
}
