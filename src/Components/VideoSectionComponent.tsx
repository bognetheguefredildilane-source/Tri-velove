
import Link from "next/link";
import { IoIosArrowRoundForward } from "react-icons/io";

const VideoSection = () => {
    return (
        <>
            <section className="py-8 bg-slate-100 md:py-16 px-4 md:px-12 lg:px-24">
                <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
                    <div className="w-full md:w-1/2 flex flex-col gap-5">
                        <h2 className="text-2xl md:text-3xl lg:text-5xl font-bold text-gray-800  ">
                            Prenez le volant de vos ambitions
                        </h2>
                        <p className="text-sm md:text-xl text-gray-600 leading-relaxed">
                            Plus qu'un simple moyen de transport, trouvez le véhicule qui correspond parfaitement à votre style de vie.
                            Explorez notre sélection exclusive et laissez-vous séduire par l'excellence.</p>

                        <Link href="/vehicules" className="flex items-center w-50 gap-2 px-6 py-3 bg-blue-600 text-white font-medium rounded-xl hover:bg-blue-700 transition hover:shadow-lg shadow-blue-500 hover:translate-x-1">
                            Notre Catalogue <span className=""><IoIosArrowRoundForward size={24} /></span></Link>
                    </div>

                    <div className="w-full mt-10 md:w-1/2">
                        <video
                            className="w-full rounded-2xl shadow-lg"
                            controls
                            autoPlay
                            muted
                            loop
                        >
                            <source src="/video/movecar.mp4" type="video/mp4" />
                        </video>
                    </div>
                </div>

            </section>
        </>
    )

}

export default VideoSection