"use client"
import Link from "next/link";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import { useFavoriteStore } from "@/store/favorite.store"
import Image from "next/image";
import { FaTrash } from "react-icons/fa";


const page = () => {
    const { favorites, toggleFavorite } = useFavoriteStore();


    return (
        <div className="mt-20">
            {/* Header */}
            <div className="bg-blue-500 text-white py-6 shadow-lg">
                <div className="max-w-7xl mx-auto px-6 mt-10">
                    <h1 className="text-5xl font-bold flex items-center gap-3">
                        <FaHeart size={40} className="text-pink-300" />
                        Mes Voitures Favorites
                    </h1>
                    <p className="text-lg mt-2 opacity-90">
                        {favorites.length} {favorites.length === 1 ? "voiture" : "voitures"} dans votre collection
                    </p>
                </div>
                
            </div>

            {/* Si aucun favori */}
            {favorites.length === 0 && (
                <div className="flex flex-col items-center justify-center mt-20 gap-4">
                    <FaRegHeart size={60} className="text-gray-300" />
                    <p className="text-2xl text-gray-400">Aucune voiture favorite pour l'instant</p>
                    <Link href="/vehicules" className="bg-blue-600 text-white px-6 py-3 rounded-xl hover:bg-blue-700 transition">
                        Voir le catalogue
                    </Link>
                </div>
            )}

            {/* Liste des favoris */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
                {favorites.map((carPhoto) => {
                    const isFaVorite = favorites.some((fav) => fav.id === carPhoto.id)
                    return (
                        <div key={carPhoto.id} className="relative bg-white items-center  rounded-2xl shadow-md overflow-hidden hover:shadow-lg transition">
                            <div className="relative w-full h-[300px]">
                                <Image src={carPhoto.src} alt={carPhoto.alt} fill className="object-cover" />
                            </div>
                            <div className="flex items-center mr-5 gap-3">
                                <div className="py-4 ml-1 flex flex-col gap-1">
                                    <p className="text-gray-400 text-sm">{carPhoto.category}</p>
                                    <h3 className="text-md font-bold text-gray-800">{carPhoto.title}</h3>

                                </div>
                                <div className="flex items-center justify-between gap-3">
                                    <Link
                                        href={`/car/${carPhoto.title}`}
                                        className="bg-black text-white px-2 py-2 mt-3 rounded-full sm:text-sm md:text-md hover:bg-gray-800 transition cursor-pointer"
                                    >
                                        view details
                                    </Link>
                                </div>
                                <div>
                                    <button
                                        onClick={() => toggleFavorite(carPhoto)}
                                        className="flex  bg-blue-100 text-blue-600 py-2 px-2 mt-2 rounded-lg font-bold hover:bg-blue-300 transition-all flex items-center justify-center gap-2"
                                    >
                                        <FaTrash size={16} />
                                        Remove
                                    </button>
                                </div>
                            </div>
                            <div
                                onClick={() => toggleFavorite(carPhoto)}
                                className="absolute top-2 left-4 h-10 w-10 flex items-center justify-center border rounded-full bg-white cursor-pointer"
                            >
                                {isFaVorite ? <FaHeart color="red" size={20} /> : <FaRegHeart size={20} />}
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default page