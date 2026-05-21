"use client";




const features: Feature[] = [
    {
        id: "01",
        title: "Sélection Premium",
        description: "Découvrez un parc automobile rigoureusement sélectionné. Des citadines élégantes aux SUV spacieux, chaque voiture est inspectée pour vous garantir un confort absolu et une sécurité maximale sur la route.",
        buttonText: "Explorer"
    },
    {
        id: "02",
        title: "Service Sur-Mesure",
        description: "Notre équipe d'experts vous accompagne à chaque étape pour dénicher la voiture qui correspond parfaitement à vos besoins et à votre budget. Profitez de conseils personnalisés et transparents.",
        buttonText: "En savoir plus"
    },
    {
        id: "03",
        title: "Achat Simple & Rapide",
        description: "Repartez au volant de votre nouvelle voiture sans tracas administratifs. Nos processus de transaction et de livraison sont optimisés pour être aussi rapides, fluides et sécurisés que possible.",
        buttonText: "Nous contacter"
    },
    {

        id: "04",
        title: "Contrôle & Sécurité",
        description: "Chaque voiture passe un diagnostic complet avant la vente. Moteur, freins, carrosserie : nous vérifions chaque détail pour que vous preniez la route en toute confiance et sécurité",
        buttonText: "En savoir plus"

    }
];

type Feature = {
    id: string;
    title: string;
    description: string;
    buttonText: string;
}

const Function = () => {
    return (
        <>
            <div className="py-20 px-6 md:px-16 ">
                <div className="max-w-300 mx-auto text-center mb-16">
                    <h1 className="text-xl sm:text-2xl text-white md:text-3xl font-bold uppercase tracking-wider mb-4">L'Excellence Automobil</h1>
                    <p className="text-gray-500 sm:text-sm md:text-lg leading-rexaxed">Nous mettons tout en œuvre pour vous proposer des véhicules fiables, un service haut de gamme et une expérience d'achat en toute sérénité.</p>
                </div>

                <div className="mx-auto max-w-350 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 items-center gap-8">
                    {features.map((Feature) => (
                        <div className="bg-white text-black p-6 flex flex-col justify-between h-full text-center shadow-xl  rounded-xl hover:-translate-y-2 hover:shadow-2xl" key={Feature.id}>
                            <div className="flex flex-col gap-3 ">
                            <span className="text-gray-500 font-bold text-xl mb-4 hover:text-blue-600">{Feature.id}</span>
                            <h3 className="text-xl md:text-2xl font-bold mb-3">{Feature.title}</h3>
                            <p className="text-gray-600 text-sm md:text-md leading-relaxed mb-6">{Feature.description}</p>
                            </div>
                            <div>
                                <button className="bg-black text-white text-sm font-semi-bold py-3 px-6 rounded-xl transition-all hover:bg-blue-600">{Feature.buttonText}</button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}

export default Function