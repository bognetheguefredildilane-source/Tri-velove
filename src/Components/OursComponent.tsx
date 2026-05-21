
import LinK from "next/link"
import { FaShieldAlt } from "react-icons/fa";
import { GiSpanner } from "react-icons/gi";
import { BsFillPeopleFill } from "react-icons/bs";
import { FaStar } from "react-icons/fa";
import  {ReactNode} from "react"


const OursComponent = () =>{
   
     const cards = [
    { id: 1,
     title: "Nos Engagements",
     first: "Fiabilité certifiée",
     second: "Historique transparent",
     third: " Garantie complète.",
     icon: <FaShieldAlt /> 
    },
    { id: 2,
      title: "Nos Services", 
      first: "Financements flexibles",
      second: " Assurance sur-mesure",
      third: " Entretien suivi.", 
      icon: <GiSpanner /> 
    },
    { id: 3, 
      title: "Notre Équipe", 
      first: "Experts passionnés",
      second: " Conseils personnalisés",
      third: " Service après-vente dédié.", 
      icon: <BsFillPeopleFill />
    },
    { id: 4, 
      title: "Notre Valeur Ajoutée", 
      first: "Parc automobile unique",
      second: " Prix compétitifs", 
      third: "Réseau de confiance.", 
      icon: <FaStar />
    },
  ];
    type cards = {
        icon:ReactNode
        first:string;
        second:string;
        third:string;

    }

    return(
      <>
    <div  className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 p-4 sm:p-6" >
        {cards.map((cards)=>(
        
        <div key={cards.id}className= "bg-white p-4 border-blue-500 rounded-xl border shadow-md">
            <div className="text-3xl mb-4 text-blue-200">
                {cards.icon}
            </div>
            <div className="flex flex-col gap-3">
                <h3 className="sm:text-lg md:text-2xl text-blue-600">{cards.title}</h3>
                <ul className="list-dic list-inside">
                    <li className="text-gray-600 text-sm md:text-lg">{cards.first}</li>
                    <li className="text-gray-600 text-sm md:text-lg">{cards.second}</li>
                    <li className="text-gray-600 text-sm md:text-lg">{cards.third}</li>
                </ul>
            </div>
        </div>
        ))}
      </div>
      </>
    )

    }


export default OursComponent    