import { FaFacebookF, FaTwitter, FaTiktok, FaInstagram } from "react-icons/fa";
import Image from "next/image";

const Footer = () => {
    return (
        <footer>
            <div className="max-300 flex flex-col sm:flex-row items-center gap-10 sm:gap-30 px-6 sm:pl-30 bg-[#000] py-8 sm:py-5 relative">
                <div className="flex flex-col items-center sm:items-start">
                <div className="flex flex-col gap-10 mt-6 sm:mt-20 items-center sm:items-start">
                   <Image
                                      src="/tri-logo.png"
                                      alt="Logo"
                                      width={250}
                                      height={50} />
                </div>
                <div className="flex items-center gap-5 justify-center pt-10 text-white mr-35  ">
                    <span><FaTwitter size={25} /></span>
                    <span><FaFacebookF size={25} /></span>
                    <span><FaTiktok size={25} /></span>
                    <span><FaInstagram size={25} /></span>
                </div>
                </div>

            
            <div className="flex flex-col sm:flex-row gap-10 sm:gap-50 px-0 sm:px-20 pt-6 sm:pt-30 w-full sm:w-auto">
                <div className="flex flex-col  gap-7">
                    <h1 className="text-xl font-bold text-white"> Nos Marques</h1>
                    <ul className="text-[14px] font-inter font-meduim text-[#CFCFCF] flex flex-col gap-4">
                        <li>Toyota</li>
                        <li>Nissan</li>
                        <li>Suzuki</li>
                        <li>BMW</li>
                        <li>Hyundai</li>
                        <li>Mercedes</li>
                    </ul>
                </div>
                <div className="flex flex-col  gap-7">
                    <h1 className="text-xl font-bold text-white">L'Excellence Automobil</h1>
                    <ul className="text-[14px] font-inter font-meduim text-[#CFCFCF] flex flex-col gap-4">
                        <li>Sélection Premium</li>
                        <li>Service Sur-Mesure</li>
                        <li>Achat Simple & Rapide</li>
                        <li>Contrôle & Sécurité</li>
                        <li>Conseils personnalisés</li>
                        <li>Financements flexibles</li>
                    </ul>
                </div>
            </div>
        </div>
        </footer >
    )
}

export default Footer;