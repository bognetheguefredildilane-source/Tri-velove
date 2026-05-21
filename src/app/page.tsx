
import Image from "next/image";
import  LogoComponent  from "@/Components/LogoComponent";
import VideoSectionComponent from "@/Components/VideoSectionComponent";
import  FunctionComponent  from "@/Components/FunctionComponent" ;
import OursComponent from "@/Components/OursComponent";
import Link from "next/link";




const page = () => {
  return (
    <>
      <div className="back min-h-[60vh] sm:h-170 text-center bg-black/50" >
        <div className="mt-24 sm:mt-50 w-full sm:w-130 text-left px-4 sm:ml-30 gap-4">
          <h1 className="text-3xl sm:text-4xl md:text-5xl text-white font-bold my-5">
            Trouvez la voiture de vos rêves dès aujourd'hui
          </h1>
          <p className="text-base sm:text-lg text-white my-5"> Large sélection de véhicules neufs et d'occasion révisés, avec
            garantie et options de financement flexibles pour tous les budgets.</p>
          <Link href="/vehicules" className="py-2 px-5 bg-white shadow-lg text-md rounded-lg hover:bg-blue-700 transition hover:shadow-lg hover:translate-x-1">Explorer le catalogue</Link>
        </div>
      </div>
    
    <LogoComponent/>

    <VideoSectionComponent/>

    <section className="bg-slate-900">
      <FunctionComponent/>
    </section>

    <section className="bg-blue-100 py-12 sm:py-20 px-4 sm:px-6 md:px-16 flex flex-col">
    
      <div>
        <div className="text-center mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold uppercase">
            <span className="text-blue-600"> Pourquoi </span>Nous faisons la différence
          </h2>
          <p className="text-gray-500 mt-2 text-lg">Plus qu'une vente, une expérience automobile de confiance.</p>
        </div>
        
         <div className="w-full relative h-[400px]">
      <Image
                    src={"/group.jpg"}
                    alt={"group"}
                    fill
                    className="object-cover  "
                  />
    </div>

        <div>
          <OursComponent/>
        </div>
      </div>
    </section>


   </>



  )

}

export default page;