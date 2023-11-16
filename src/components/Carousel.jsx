import React from 'react'

export default function Carousel() {
    return (
        <>
            <div className='flex items-center justify-center py-20  '> 
                <div className="carousel container rounded-2xl shadow-2xl drop-shadow-2xl shadow-slate-200     ">
                    <div id="slide1" className="carousel-item  h-80 relative w-full">
                        <img src="https://c.wallhere.com/photos/25/ec/1366x768_px_lake_landscape_mountains_nature_sunset-1001602.jpg!d" className="w-full" />
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a href="#slide4" className="btn btn-circle">❮</a>
                            <a href="#slide2" className="btn btn-circle">❯</a>
                        </div>
                    </div>
                    <div id="slide2" className="carousel-item  h-80 relative w-full">
                        <img src="https://c.wallhere.com/photos/b9/44/1366x768_px_clouds_landscape_mountains_nature_river_sunset-614118.jpg!d" className="w-full" />
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a href="#slide1" className="btn btn-circle">❮</a>
                            <a href="#slide3" className="btn btn-circle">❯</a>
                        </div>
                    </div>
                    <div id="slide3" className="carousel-item h-80 relative w-full">
                        <img src="https://c.wallhere.com/photos/66/ca/nature_landscape_river_midnight_mist_sky_Norway_mountains-108995.jpg!d" className="w-full" />
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a href="#slide2" className="btn btn-circle">❮</a>
                            <a href="#slide4" className="btn btn-circle">❯</a>
                        </div>
                    </div>
                    <div id="slide4" className="carousel-item h-80 relative w-full">
                        <img src="https://c.wallhere.com/photos/28/c5/nature_landscape_mist_clouds_river_forest_grass_field-121935.jpg!d" className="w-full" />
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a href="#slide3" className="btn btn-circle">❮</a>
                            <a href="#slide1" className="btn btn-circle">❯</a>
                        </div>
                    </div>
                </div>
            </div>
        </>

    )
}
