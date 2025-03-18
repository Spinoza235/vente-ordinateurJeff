import React from 'react';

const HeroSection = () => {
  return (
    <div className="relative h-[500px] overflow-hidden">
      {/* Image de fond avec effet de fondu */}
      <div className="absolute inset-0">
        <img
          src="/assets/images/imageHero.jpg" // Remplacez par votre image
          alt="Ordinateurs portables"
          className="w-full h-full object-cover transition-opacity duration-1000 opacity-100 hover:opacity-90"
        />
      </div>

      {/* Texte superposé avec animation */}
      <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
        <div className="text-center text-white max-w-2xl px-4">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 mt-10 animate-fade-in-up">
            Découvrez notre sélection exclusive
          </h1>
          <p className="text-xl md:text-2xl mb-8 animate-fade-in-up delay-100">
            Des ordinateurs portables performants pour le travail, le gaming et la créativité.
          </p>
          <p className='animate-fade-in-up delay-100'>A partir de 50 000 frcfa</p>
          {/* Bouton pour faire défiler vers la section des promotions */}
          <a
            href="#promotions" // Ancre vers la section des promotions
            className="mt-6 inline-block bg-sky-500/80 text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-sky-500/90 transform hover:scale-105 transition-transform duration-300 animate-fade-in-up delay-200"
          >
            Explorer Nos promotions
          </a>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;