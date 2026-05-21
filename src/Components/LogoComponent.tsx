import Image from "next/image";

type Marque = {
  nom: string;
  logo: string;
};

const marques: Marque[] = [
  { nom: "Toyota", logo: "/toyot.png" },
  { nom: "Nissan", logo: "/nissan.jpg" },
  { nom: "Honda", logo: "/audi.jpg" },
  { nom: "Suzuki", logo: "/suzuki.jpg" },
  { nom: "BMW ",    logo: "/bmw.jpg"},
  { nom: "Hyundai", logo: "/hyundai.jpg" }, 
  { nom: "Mercedes", logo: "/mercedes.jpg" },
];

const Logopage = () => {
  return (
    <section className="py-12 px-6">
      <h2 className="text-4xl font-bold text-center mb-8">
        Nos Marques
      </h2>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-4 md:gap-4">
        {marques.map((marque) => (  
          <div
            key={marque.nom}
            className="flex items-center justify-center p-4  rounded-xl  "
          >
            <Image
              src={marque.logo}
              alt={marque.nom}
              width={100}
              height={50}
              className="object-contain grayscale "
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Logopage;