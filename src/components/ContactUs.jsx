import React, { useEffect, useState } from 'react'
import ReCAPTCHA from "react-google-recaptcha";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


export default function ContactUs() {
    const cm_background = process.env.PUBLIC_URL + "cm-background.jpeg"
    const [recaptchaValue, setRecaptchaValue] = useState(null);
    const [ip, setIp] = useState('');
    const notify = () => {
        toast.warn("Lütfen robot olmadığınızı doğrulayın.", {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            // Animasyonu özelleştirebilirsiniz:
            theme: "light"


        });
    };
    const initialFormData = {
        name: '',
        mailaddress: '',
        message: '',
        ipAddress: ''
    };
    useEffect(() => {
        // İsteği göndermeden önce, kullanmakta olduğunuz servisin kullanım koşullarını ve sınırlamalarını kontrol edin.
        fetch('https://api.ipify.org?format=json')
            .then(response => response.json())
            .then(data => setFormData(prevState => ({
                ...prevState,
                ipAddress: data.ip
            })))
            .catch(error => {
                console.error('Error fetching IP:', error);
                // Hata durumunda işlemler
            });
    }, []);


    const divStyle = {
        backgroundImage: `url(${cm_background})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        width: '100%',
        height: '400px',
        // İstediğiniz diğer stil bilgilerini buraya ekleyebilirsiniz
    };


    const [formData, setFormData] = useState(initialFormData);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleRecaptcha = (value) => {
        setRecaptchaValue(value);
    };

    const onModal = ()=>{
        document.getElementById('my_modal_1').showModal()
    }

    const checkSubmit = (e)=>{

        e.preventDefault();
         if (!recaptchaValue) {
            notify();
            return;
        }
        onModal();
    }

    const handleSubmit = (e) => {
        e.preventDefault();

       
        console.log('Form Data Submitted: ', formData);
        // Form verilerini işleyin veya sunucuya gönderin
    };

    
   
    const recaptchaRef = React.createRef();


    return (
        <div id='contact' className='h-auto w-full flex flex-col items-center mt-32 justify-center  '>
            <div style={divStyle}></div>

            <form onSubmit={checkSubmit} className='container flex py-32 rounded-3xl -translate-y-32 bg-gray-100 text-gray-900 flex-col items-center justify-center'>
                <div className='font-bold text-5xl py-16'>İletişim</div>
                <div className='w-[60%]'>
                    <div class="mb-4 w-full">
                        <label for="78a865f0-2088-45f9-84e2-74462ea9a98a"></label>
                        <input placeholder="İsminiz" name='name' value={formData.firstName} onChange={handleChange} type="text" id="78a865f0-2088-45f9-84e2-74462ea9a98a" class="w-full block rounded-lg border dark:border-none dark:bg-neutral-600 py-[9px] px-3 pr-4 text-sm focus:border-blue-400 focus:ring-1 focus:ring-blue-400 focus:outline-none" />
                    </div>


                    <div class="mb-4 w-full">
                        <label for="ee5f5acd-7c13-4550-b5fb-4e88886a724b"></label>
                        <input placeholder="Mail adresiniz" name='mailaddress' value={formData.mailaddress} onChange={handleChange} type="email" id="ee5f5acd-7c13-4550-b5fb-4e88886a724b" class="w-full block rounded-lg border dark:border-none dark:bg-neutral-600 py-[9px] px-3 pr-4 text-sm focus:border-blue-400 focus:ring-1 focus:ring-blue-400 focus:outline-none" />
                    </div>


                    <div class="mb-4 w-full">
                        <label for="622c61be-66f3-4751-bd65-df4e8ed2c68a"></label>
                        <textarea placeholder="Mesajınız" name='message' value={formData.message} onChange={handleChange} type="text" id="622c61be-66f3-4751-bd65-df4e8ed2c68a" rows="4" class="w-full block rounded-lg border dark:border-none dark:bg-neutral-600 py-[9px] px-3 pr-4 text-sm focus:border-blue-400 focus:ring-1 focus:ring-blue-400 focus:outline-none"></textarea>
                    </div>
                    <div className='w-full h-auto flex  items-center justify-center md:justify-start py-'>
                        <ReCAPTCHA
                            ref={recaptchaRef}
                            sitekey="6LfyL7kpAAAAAAn9E2kJBiEiq7JZWMtohrMVDXVh"
                            onChange={handleRecaptcha}
                        />

                    </div>
                    <button type='submit' class="block mt-2 mb-4 w-full rounded-full bg-blue-500 text-neutral-50 shadow-[0_4px_9px_-4px_rgba(51,45,45,0.7)] hover:bg-blue-600 hover:shadow-[0_8px_9px_-4px_rgba(51,45,45,0.2),0_4px_18px_0_rgba(51,45,45,0.1)] focus:bg-blue-800 focus:shadow-[0_8px_9px_-4px_rgba(51,45,45,0.2),0_4px_18px_0_rgba(51,45,45,0.1)] active:bg-blue-700 active:shadow-[0_8px_9px_-4px_rgba(51,45,45,0.2),0_4px_18px_0_rgba(51,45,45,0.1)] px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal transition duration-150 ease-in-out focus:outline-none focus:ring-0">Gönder</button>
                </div>
            </form>
            <ToastContainer />
            <dialog onSubmit={handleSubmit} id="my_modal_1" className="modal">
                <div className="modal-box  w-11/12 max-w-5xl">
                    <h3 className="font-bold text-lg">Lütfen Bilgileri Kontrol Edin</h3>
                    <p className="py-4">Ad-Soyad : {formData.name}</p>
                    <p className="py-4">E-Mail : {formData.mailaddress}</p>
                    <p className="py-4">Mesaj : {formData.message}</p>
                    <div className="modal-action">
                        <form method="dialog " className='flex itemns-center justify-center gap-x-2'>
                            {/* if there is a button in form, it will close the modal */}
                            <button  className="btn "  type='button'>Kapat</button>
                            <button className="btn btn-success" type='submit'>Gönder</button>
                            
                        </form>
                       
                    </div>
                </div>
            </dialog>

        </div>


    )
}
