import React, { useEffect, useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

// Fix pour l’icône du marqueur par défaut
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
  iconUrl: require('leaflet/dist/images/marker-icon.png'),
  shadowUrl: require('leaflet/dist/images/marker-shadow.png'),
});

const AboutPage = () => {
  const [position, setPosition] = useState([48.8566, 2.3522]); // Position par défaut (Paris)
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
    <div className="container mx-auto p-4 pt-24">
      {/* Logo HopeBusiness */}
      <div className="inline-flex items-center space-x-2 mb-6">
        <i className="fas fa-laptop-code text-sky-500/80 text-2xl"></i>
        <h1 className="text-3xl font-bold text-sky-500/80">HopeBusiness</h1>
      </div>

      <h2 className="text-2xl font-semibold mb-6 text-gray-800">À propos de nous</h2>

      {/* Qui sommes-nous */}
      <section className="mb-8">
        <h3 className="text-xl font-semibold mb-4">Qui sommes-nous ?</h3>
        <p className="text-gray-700 leading-relaxed">
          Bienvenue sur <strong>HopeBusiness</strong>, votre destination en ligne pour des ordinateurs de qualité...
        </p>
      </section>

      {/* Mission */}
      <section className="mb-8">
        <h3 className="text-xl font-semibold mb-4">Notre mission</h3>
        <p className="text-gray-700 leading-relaxed">
          Notre mission est de vous offrir des produits technologiques de haute qualité...
        </p>
      </section>

      {/* Pourquoi nous choisir */}
      <section className="mb-8">
        <h3 className="text-xl font-semibold mb-4">Pourquoi choisir HopeBusiness ?</h3>
        <ul className="list-disc list-inside text-gray-700 leading-relaxed">
          <li>Des produits de qualité provenant des meilleures marques.</li>
          <li>Un service client réactif et disponible 24/7.</li>
          <li>Livraison rapide et gratuite pour toutes les commandes.</li>
          <li>Garantie satisfait ou remboursé sous 30 jours.</li>
        </ul>
      </section>

      {/* Équipe */}
      <section className="mb-8">
        <h3 className="text-xl font-semibold mb-4">Notre équipe</h3>
        <p className="text-gray-700 leading-relaxed">
          Notre équipe est composée de passionnés de technologie qui sont là pour vous guider...
        </p>
      </section>

      {/* Contact */}
      <section className="mb-8">
        <h3 className="text-xl font-semibold mb-4">Contactez-nous</h3>
        <p className="text-gray-700 leading-relaxed">
          Vous avez des questions ? Écrivez-nous à :{' '}
          <a href="mailto:hopedingammadji@gmail.com" className="text-sky-500/80 hover:underline">
            hopedingammadji@gmail.com
          </a>.
        </p>
      </section>

      {/* Localisation avec carte */}
      <section className="mb-12">
        <h3 className="text-xl font-semibold mb-4">Notre localisation</h3>
        <div className="h-80 w-full rounded-lg overflow-hidden shadow-md">
          <MapContainer center={position} zoom={13} style={{ height: '100%', width: '100%' }}>
            <TileLayer
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              attribution='&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors'
            />
            <Marker position={position}>
              <Popup>
                {locationFound
                  ? 'Vous êtes ici.'
                  : 'Localisation approximative de HopeBusiness'}
              </Popup>
            </Marker>
          </MapContainer>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
