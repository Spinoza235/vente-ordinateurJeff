import React, { useEffect, useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

// Fix pour l'icône du marqueur par défaut
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
  iconUrl: require('leaflet/dist/images/marker-icon.png'),
  shadowUrl: require('leaflet/dist/images/marker-shadow.png'),
});

const AboutPage = () => {
  const [position, setPosition] = useState([4.0511, 9.7679]); // Position Douala, Cameroun
  const [locationFound, setLocationFound] = useState(false);

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (pos) => {
          setPosition([pos.coords.latitude, pos.coords.longitude]);
          setLocationFound(true);
        },
        (err) => {
          console.warn("Géolocalisation refusée ou échouée, position par défaut utilisée.");
        }
      );
    }
  }, []);

  return (
    <div className="bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-sky-500/90 to-blue-600/90 text-white py-20 pt-28">
        <div className="container mx-auto px-4 text-center">
          <div className="inline-flex items-center space-x-3 mb-4">
            <i className="fas fa-laptop-code text-4xl"></i>
            <h1 className="text-4xl md:text-5xl font-bold">Jeff Computer</h1>
          </div>
          <p className="text-xl md:text-2xl opacity-90 max-w-3xl mx-auto">
            Votre partenaire tech de confiance depuis le début
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12 max-w-5xl">
        
        {/* Notre Histoire */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-800 mb-6 flex items-center">
            <span className="bg-sky-500/20 p-3 rounded-full mr-4">
              <i className="fas fa-book-open text-sky-600"></i>
            </span>
            Notre histoire
          </h2>
          <div className="bg-white rounded-xl shadow-sm p-8 border-l-4 border-sky-500">
            <p className="text-gray-700 leading-relaxed mb-4 text-lg">
              Tout a commencé par une passion simple : rendre la technologie accessible à tous. 
              Fatigués de voir des gens galérer avec des PC inadaptés ou payer trop cher pour du 
              matériel moyen, on s'est dit qu'on pouvait faire mieux.
            </p>
            <p className="text-gray-700 leading-relaxed text-lg">
              Aujourd'hui, <strong className="text-sky-600">Jeff Computer</strong> c'est bien plus 
              qu'une boutique. C'est une équipe qui prend le temps de comprendre vos besoins, qui 
              teste chaque machine avant de vous la recommander, et qui reste disponible même après 
              votre achat. Parce qu'un bon PC, ça change vraiment la vie au quotidien.
            </p>
          </div>
        </section>

        {/* Ce qui nous différencie */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 flex items-center">
            <span className="bg-sky-500/20 p-3 rounded-full mr-4">
              <i className="fas fa-star text-sky-600"></i>
            </span>
            Ce qui fait la différence
          </h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white rounded-lg shadow-sm p-6 hover:shadow-md transition-shadow">
              <div className="flex items-start">
                <div className="bg-green-100 p-3 rounded-lg mr-4">
                  <i className="fas fa-handshake text-green-600 text-2xl"></i>
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-2 text-gray-800">Conseils honnêtes</h3>
                  <p className="text-gray-600 leading-relaxed">
                    On ne vous vendra jamais un PC de gamer si vous faites juste de la bureautique. 
                    Notre objectif, c'est que vous soyez satisfait, pas qu'on fasse la vente la plus chère.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-sm p-6 hover:shadow-md transition-shadow">
              <div className="flex items-start">
                <div className="bg-blue-100 p-3 rounded-lg mr-4">
                  <i className="fas fa-tools text-blue-600 text-2xl"></i>
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-2 text-gray-800">Machines testées</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Chaque ordinateur qu'on propose a été testé par notre équipe. On s'assure qu'il 
                    tourne bien, que les composants sont fiables, et qu'il correspond vraiment à ce qu'on annonce.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-sm p-6 hover:shadow-md transition-shadow">
              <div className="flex items-start">
                <div className="bg-purple-100 p-3 rounded-lg mr-4">
                  <i className="fas fa-headset text-purple-600 text-2xl"></i>
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-2 text-gray-800">Support disponible</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Un souci après l'achat ? Une question sur comment optimiser votre machine ? 
                    On est là pour vous aider, que ce soit par message, appel ou WhatsApp.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-sm p-6 hover:shadow-md transition-shadow">
              <div className="flex items-start">
                <div className="bg-orange-100 p-3 rounded-lg mr-4">
                  <i className="fas fa-shield-alt text-orange-600 text-2xl"></i>
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-2 text-gray-800">Garantie tranquillité</h3>
                  <p className="text-gray-600 leading-relaxed">
                    30 jours pour changer d'avis si le PC ne vous convient pas. Sans question, 
                    sans prise de tête. Parce qu'on préfère que vous soyez sûr de votre choix.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      
        {/* Localisation avec carte */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-6 flex items-center">
            <span className="bg-sky-500/20 p-3 rounded-full mr-4">
              <i className="fas fa-map-marker-alt text-sky-600"></i>
            </span>
            Où nous trouver ?
          </h2>
          <div className="bg-white rounded-xl shadow-sm p-6">
            <p className="text-gray-700 mb-4">
              Passez nous voir si vous êtes dans le coin. On adore rencontrer nos clients en vrai 
              et vous montrer nos machines.
            </p>
            <div className="h-96 w-full rounded-lg overflow-hidden shadow-md">
              <MapContainer center={position} zoom={13} style={{ height: '100%', width: '100%' }}>
                <TileLayer
                  url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                  attribution='&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors'
                />
                <Marker position={position}>
                  <Popup>
                    {locationFound
                      ? 'Vous êtes ici !'
                      : 'Jeff Computer - Douala, Cameroun'}
                  </Popup>
                </Marker>
              </MapContainer>
            </div>
          </div>
        </section>

        {/* Call to action final */}
        <section className="text-center bg-gradient-to-r from-sky-500/90 to-blue-600/90 text-white rounded-xl p-10 shadow-lg">
          <h2 className="text-3xl font-bold mb-4">
            Prêt à trouver votre PC idéal ?
          </h2>
          <p className="text-lg opacity-90 mb-6 max-w-2xl mx-auto">
            Que vous soyez étudiant, créatif, gamer ou pro, on a la machine qu'il vous faut. 
            Et si vous ne savez pas quoi choisir, on est là pour vous guider.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/category/all"
              className="bg-white text-sky-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors shadow-md inline-flex items-center justify-center"
            >
              <i className="fas fa-laptop mr-2"></i>
              Voir nos ordinateurs
            </a>
            <a
              href="/guide-achat"
              className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-sky-600 transition-colors inline-flex items-center justify-center"
            >
              <i className="fas fa-lightbulb mr-2"></i>
              Besoin d'aide pour choisir ?
            </a>
          </div>
        </section>
      </div>
    </div>
  );
};

export default AboutPage;