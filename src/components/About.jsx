import React, { useRef } from 'react'

export default function About() {

    const aboutRef = useRef(null);

    return (
        <div id='about' ref={aboutRef} className=' mt-16  flex flex-col items-center justify-center gap-y-6'>
            <div className='flex w-full text-start pl-8  text-6xl font-serif font-semibold'>Hakkımda</div>
            <div className='container w-full flex items-center justify-center'>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sint alias perferendis accusantium, tempore soluta repellendus labore quos! Autem facere laborum soluta eius laboriosam aut. Consectetur illum aperiam voluptate cumque earum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam possimus fugit repudiandae sit optio rerum architecto iusto officia quas sapiente itaque est ipsam perspiciatis eveniet tempora saepe, cumque deleniti commodi?
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis temporibus saepe quibusdam nihil nostrum aspernatur corrupti numquam, mollitia eos sunt porro consequatur, necessitatibus nulla voluptas doloribus! Doloremque aliquam eos modi!
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sit, quos quam laudantium quibusdam sunt quas, aut nemo iure saepe quod dicta beatae consectetur odit nihil ea quidem aliquid nobis unde.
                </p>
            </div>
        </div>
    )
}
