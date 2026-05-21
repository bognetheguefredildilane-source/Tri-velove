"use client"
import Image from "next/image";
import { FaHeart } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";
import { useFavoriteStore } from "@/store/favorite.store";
import Link from "next/link";
import { carPhoto } from "@/utils/type";




const CardComponent = ({ cars }: { cars: carPhoto[] }) => {
    const { toggleFavorite, favorites } = useFavoriteStore()

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
            {cars.map((carPhoto) => {
                const isFaVorite = favorites.some((fav) => fav.id === carPhoto.id)
                return (
                    <div key={carPhoto.id} className=" relative bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-lg transition">
                        <div className="relative w-full h-[300px]">
                            <Image src={carPhoto.src} alt={carPhoto.alt} fill className="object-cover" />
                        </div>
                        <div className="flex items-center  mx-3 gap-7">
                            <div className="p-4 flex flex-col gap-1">
                                <p className="text-gray-400 text-sm">{carPhoto.category}</p>
                                <h3 className="text-lg font-bold text-gray-800">{carPhoto.title}</h3>
                                <p className="text-blue-600 text-sm">{carPhoto.details.brand} — {carPhoto.details.year}</p>
                                
                            </div>
                            <div>

                                <Link href={`/car/${carPhoto.title}`} className="bg-black text-white px-2 py-2 mt-3 rounded-full sm:text-md md:text-lg hover:bg-gray-800 transition duration-300 cursor-pointer">
                                    view details
                                </Link>
                            </div>
                        </div>
                        <div onClick={()=> toggleFavorite(carPhoto)} className="absolute top-2 left-4 h-10 w-10 flex items-center justify-center border rounded-full bg-white  cursor-pointer">
                            {isFaVorite ? <FaHeart color="red" size={20} /> : <FaRegHeart size={20} />}
                        </div>
                    </div>
                )
            })}
        </div>
    );
};

export default CardComponent;