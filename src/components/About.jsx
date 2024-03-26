import React, { useRef } from 'react'

export default function About() {

    const aboutRef = useRef(null);

    const handleClick = (event) => {
        event.preventDefault();
        const email = "u9urturk@gmail.com";
        const subject = "Konu";
        const mailtoLink = `mailto:${email}?subject=${encodeURIComponent(subject)}`;
        window.location.href = mailtoLink;
      }

    return (

        <div id='about' ref={aboutRef} className=' mt-16  flex flex-col items-center justify-center gap-y-6'>

            <div ref={aboutRef} className=' mt-16  flex flex-col items-center justify-center gap-y-6'>

                <div className='flex items-center justify-center flex-col gap-y-8'>
                    <div className='flex w-full text-start pl-8  text-6xl font-serif font-semibold'>Hakkımda</div>
                    <div className='container px-16 w-full flex items-center justify-center'>
                        <p>Merhaba! Benim adım Uğur, bir yazılım geliştiriciyim ve tutkum teknolojiyle yaratıcı çözümler geliştirmektir. Kariyerime 2016 yılında başladım ve o zamandan beri yazılım dünyasında kendimi geliştirmeye devam ediyorum.

                            Yazılım geliştirme sürecinde özellikle <a className='text-blue-600' href="#">Full-Stack Developer</a> alanında uzmanlaştım ve bu alanda derinlemesine bilgi birikimine sahibim. Sadece kod yazmakla kalmayıp, aynı zamanda projelerimi planlamak, tasarlamak ve uygulamak için çeşitli teknolojileri kullanarak sonuç odaklı yaklaşımlar geliştiriyorum.

                            Kullanıcı deneyimini ön planda tutarak, kullanıcıların ihtiyaçlarına yönelik etkileyici çözümler sunmaya odaklanıyorum. Tasarımdan geliştirme ve dağıtıma kadar olan süreçte takım çalışmasına büyük önem veriyorum ve her adımda ekip arkadaşlarımla işbirliği yaparak en iyi sonuçları elde etmeye çalışıyorum.

                            Portföyümde bulunan projelerde genellikle Belirli Bir Teknoloji Yığını/Kütüphane kullanıyorum ve sürekli olarak yeni teknolojilere ve gelişmelere açık olmam, projelerimdeki verimliliği ve kaliteyi artırmama yardımcı oluyor.

                            Bana ulaşmak için lütfen <a className='text-blue-600' onClick={handleClick} href="#">u9urturk@gmail.com</a> adresinden veya aşağıdaki sosyal medya hesaplarımdan biri üzerinden bana mesaj atın. Birlikte çalışma fırsatımızı dört gözle bekliyorum!
                        </p>
                    </div>
                </div>
            </div>
            <div className='flex items-center justify-center flex-col gap-y-8'>
                <div className='flex w-full  text-start pl-8  text-6xl font-serif font-semibold'>About Me </div>
                <div className='container px-16 w-full flex items-center justify-center'>
                    <p>Hello! My name is Uğur, and I am a software developer passionate about crafting creative solutions with technology. I started my career in 2016, and since then, I have been continuously honing my skills in the world of software development.

                        I have specialized particularly in <a className='text-blue-600' href="#">Full-Stack Development</a>, gaining in-depth knowledge in this area. Beyond just writing code, I excel in planning, designing, and implementing projects using various technologies, with a focus on result-oriented approaches.

                        Prioritizing user experience, I strive to provide compelling solutions that meet the needs of users. I value teamwork greatly throughout the development process, collaborating with my teammates at every step to achieve the best results.

                        In my portfolio projects, I often leverage specific technology stacks/libraries, and my openness to constantly learning about new technologies and advancements helps me enhance efficiency and quality in my projects.

                        Feel free to reach out to me via <a className='text-blue-600'   onClick={handleClick} href="#">u9urturk@gmail.com</a> or through any of the social media profiles listed below. I look forward to the opportunity to collaborate with you!
                    </p>
                </div>
            </div>

        </div>
    )
}
