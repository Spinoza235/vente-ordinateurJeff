import React, { useState } from 'react';
import ProductContactModal from './ProductContactModal'; // Import du modal

const promotions = [
  {
    id: 1,
    name: ' ORDINATEUR HP ProBook x360 11 G1 EE',
    description: 'Lover des machines slim, portatif et léger, grande promotion de vos ORDINATEUR HP ProBook x360 11 G1 EE ,Écran tactile(touchscreen )rotating at 360° ,Super Clean 🧼 Ultra slim, 🔥🔶HP ProBook x360 11 G1 EE🇺🇸 ,Intel(R) QUAD Core : 1.10GHz🤝 ,8Go RAM fast RAM   🔥. 128G ssd , Écran tactile(touchscreen )rotating at 360°  🔥🔶128mb dedicated 2g total graghics ,12.5Pouces   🔥 🔶 WiFi, Bluetooth, HDMI, USB 3.0,type-c  ,Autonomie 4H++ excellente ,Connectivité  - Wifi, Bluetooth, webcam - Port USB, HDMI, RJ45',
    price: '55 000 fcfa',
    discount: '20%',
    image: '/assets/imageProduct/hp1/hp7.2.jpg',
  },
  {
    id: 2,
    name: '𝐋𝐞𝐧𝐨𝐯𝐨 𝐓𝐡𝐢𝐧𝐤𝐩𝐚𝐝 𝐓𝟒70',
    description: '𝐂𝐨𝐫𝐞 𝐢5 6eme 𝐆𝐞𝐧, 𝟏𝟔𝐆 𝐑𝐀𝐌  𝟓𝟏𝟐𝐆 𝐒𝐒𝐃 𝐃𝐨𝐮𝐛𝐥𝐞 𝐁𝐚𝐭𝐭𝐞𝐫𝐲🔸🔥CORE i5.  6eme generation 2..5ghz 🔸🔥8giga RAM 🔥🔸256SSD  🔥14 inches ✅  🔸🔥Ultra Slim, finger print, Port SIM WebCam, Double Battery   🔸🔥Keyboard QWERTY et AZERTY   🔸🔥2 USB port, port type-C, HDMI.  🔸🔥Double Battery Autonomie 💪🏾 exelent autonomie',
    price: '160 000 cfa',
    discount: '15%',
    image: '/assets/imageProduct/lenovo/lenovo4.jpg',
  },
  {
    id: 3,
    name: 'HP EliteBook 840 G3 ',
    description: 'Core i5 | 6th Gen | CPU 2.30GHz | 8gb Ram | 500gb hdd ,14\" pouces ',
    price: '130 000 cfa',
    discount: '10%',
    image: '/assets/imageProduct/hp1/hp8.jpg',
  },
  {
    id: 4,
    name: 'Hp ',
    description: '128 giga SSD M2; 4 giga de RAM ; 6heures d\'autonomie;ports USB, HDMI;Chargeur offert. ',
    price: '50 000 cfa',
    discount: '25%',
    image: '/assets/imageProduct/hp1/hp9.jpg',
  },
  {
    id: 5,
    name: 'Dell latitude',
    description: 'Carte grahiphe Intel ,processeur 2.5 Ghz, 500 SSD, corei5,7 ieme generation',
    price: '90 000 cfa',
    discount: '30%',
    image: '/assets/imageProduct/dell1/dell5.jpg',
  },
];

const Promotions = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [expanded, setExpanded] = useState({});

  const toggleDescription = (id) => {
    setExpanded((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <section id="promotions" className="py-12 bg-gradient-to-r from-purple-50 to-blue-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">
          Promotions en Cours
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {promotions.map((product) => {
            const descriptionLimit = 120; // Limite de caractères pour afficher le bouton
            const showToggleButton = product.description.length > descriptionLimit;

            return (
              <div
                key={product.id}
                className="bg-white rounded-lg shadow-xl overflow-hidden transform transition-transform duration-300 hover:scale-105 flex flex-col"
              >
                {/* Conteneur de l'image avec un ratio fixe */}
                <div className="relative aspect-[4/3] w-full">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-2 right-2 bg-red-600 text-white px-3 py-1 rounded-full text-sm font-bold">
                    -{product.discount}
                  </div>
                </div>

                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {product.name}
                  </h3>

                  {/* Conteneur de la description avec hauteur fixe et scroll */}
                  <div className="relative">
                    <div
                      className={`overflow-hidden transition-all duration-300 ${
                        expanded[product.id] ? "max-h-40 overflow-y-auto" : "max-h-16"
                      }`}
                    >
                      <p className="text-gray-600">{product.description}</p>
                    </div>

                    {/* Affiche le bouton uniquement si la description est longue */}
                    {showToggleButton && (
                      <button
                        onClick={() => toggleDescription(product.id)}
                        className="text-sky-500 font-medium hover:underline mt-2"
                      >
                        {expanded[product.id] ? "Voir moins" : "Voir plus"}
                      </button>
                    )}
                  </div>

                  <div className="flex items-center justify-between mt-auto">
                    <p className="text-lg font-bold text-sky-500/80">
                      {product.price}
                    </p>
                    <button
                      onClick={() => setSelectedProduct(product)}
                      className="inline-block bg-sky-500/80 text-white px-6 py-2 rounded-md hover:bg-sky-500/90 transition-colors duration-300"
                    >
                      Acheter
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Affichage du modal si un produit est sélectionné */}
      {selectedProduct && (
        <ProductContactModal
          isOpen={!!selectedProduct}
          onClose={() => setSelectedProduct(null)}
          product={selectedProduct}
        />
      )}
    </section>
  );
};

export default Promotions;
