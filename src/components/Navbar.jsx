import React, { useEffect, useState } from 'react'
import ProfilePicture from '..//DevMaterials/xa.png'
import classNames from 'classnames';
export default function Navbar() {
    const logo = process.env.PUBLIC_URL + "logo.png"

    const [scrollY, setScrollY] = useState(0);

    const handleScroll = () => {
        setScrollY(window.scrollY);
      };



      useEffect(() => {        
        window.addEventListener('scroll', handleScroll);
        return () => {
          window.removeEventListener('scroll', handleScroll);
        };
      }, []); 


      const scrollToSection = (sectionId) => {
        const element = document.getElementById(sectionId);
        element.scrollIntoView({ behavior: 'smooth' });
      }
    
      console.log(scrollY)
    return (
        <div className={classNames({
            "navbar bg-transparent transition-all hover:opacity-100 cursor-pointer  mt-4 fixed z-40":true,
            "opacity-0":scrollY!=0,
            
        })}>
            <div className="flex-1">
                <a className="btn btn-ghost normal-case font-serif text-xl">Uğur TÜRK</a>
            </div>
            <div className='flex-auto font-serif gap-x-12'>
                <button onClick={() => scrollToSection("about")}  className='hover:scale-90 transition-all  btn btn-outline' href="">Hakkımda</button>
                <button  className='hover:scale-90 transition-all  btn btn-outline' href="">Beceriler</button>
                <button onClick={() => scrollToSection("portfolyo")} className='hover:scale-90 transition-all  btn btn-outline' href="">Portfolyo</button>
                <button  className='hover:scale-90 transition-all  btn btn-outline' href="">İletişim</button>
            </div>
            <div className="flex-none gap-2">
                <div className="form-control">
                    <input type="text" placeholder="Search" className="input input-bordered w-24 md:w-auto" />
                </div>
                <label className="swap swap-rotate">

                    {/* this hidden checkbox controls the state */}
                    <input type="checkbox" />

                    {/* sun icon */}
                    <svg className="swap-on fill-current w-8 h-8" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" /></svg>

                    {/* moon icon */}
                    <svg className="swap-off fill-current w-8 h-8" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" /></svg>

                </label>
                <div className="dropdown  dropdown-end">

                    <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                        <div className="w-16 rounded-full">
                            <img src={ProfilePicture} />
                        </div>
                    </label>
                    <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
                        <li>
                            <a className="justify-between">
                                Profil
                                <span className="badge">Yeni</span>
                            </a>
                        </li>
                        <li><a>Ayarlar</a></li>
                        <li><a>Çıkış</a></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}
