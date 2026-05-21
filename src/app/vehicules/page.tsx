"use client"
import { IoIosArrowRoundForward } from "react-icons/io";
import { FiSearch } from "react-icons/fi";
import CardComponent from "@/Components/CardComponent";
import { carPhotos } from "@/utils/data";
import { useState } from "react";
import Link from "next/link";



const page = () => {

   const [searchTerm, setSearchTerm] = useState<string>("")

  const filteredCars = carPhotos.filter((CarPhoto) =>
    CarPhoto.title.toLowerCase().includes(searchTerm.toLowerCase())
  )

    return (
        <>

            <section className="py-8 bg-white md:py-16 px-4 md:px-12 lg:px-24">
                <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
                    <div className="w-full md:w-1/2 flex flex-col gap-5">
                        <h2 className="text-2xl md:text-3xl lg:text-5xl font-bold text-gray-800  ">
                            Ressentez la route
                        </h2>
                        <p className="text-sm md:text-xl text-gray-600 leading-relaxed">Plus qu'un simple véhicule, nous sélectionnons des voitures prêtes à vous faire vibrer.
                            Regardez-les en action et imaginez-vous déjà au volant
                        </p>

                        <Link href="/contact" className="flex items-center w-50 gap-2 px-4 py-3 bg-blue-600 text-white font-medium rounded-xl hover:bg-blue-700 transition hover:shadow-lg shadow-blue-500 hover:translate-x-1">
                            Réserver un essai <span className=""><IoIosArrowRoundForward size={24} /></span></Link>
                    </div>

                    <div className="w-full mt-10 md:w-1/2">
                        <video
                            className="w-full rounded-2xl shadow-lg"
                            controls
                            autoPlay
                            muted
                            loop
                        >
                            <source src="/video/sell.mp4" type="video/mp4" />
                        </video>
                    </div>
                </div>

            </section>


            <section>
                <div>
                    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mx-4 sm:mx-10 md:mx-20 gap-3 sm:gap-0">
                        <h2 className="text-xl sm:text-2xl md:text-3xl font-bold">Catalogue</h2>
                        <div className="flex items-center justify-between mt-0 sm:mt-5 w-full sm:w-125 mb-4 sm:mb-10 bg-white border border-blue-200 px-5 py-3 rounded-xl gap-5">
                            <input
                                type="text"
                                placeholder="Search voiture..."
                                className="outline-one text-black w-full text-xl"
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}

                            />
                            <FiSearch size={30} color="#000" />
                        </div>
                    </div>

                    <CardComponent cars={filteredCars} />
                  {filteredCars.length === 0 && (
            <p className="text-center text-gray-500 text-xl mt-10">
              Aucune voiture trouvée 
            </p>
        )}

                </div>
            </section>


        </>
    )
}

export default page