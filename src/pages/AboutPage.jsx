import React from 'react';

const AboutPage = () => {
  return (
    <div className="container mx-auto p-4 pt-24">
      <h1 className="text-3xl font-bold mb-6 text-sky-500/80">À propos de nous</h1>

      {/* Section 1 : Présentation de l'entreprise */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Qui sommes-nous ?</h2>
        <p className="text-gray-700 leading-relaxed">
          Bienvenue sur <strong>VOrdi</strong>, votre destination en ligne pour des ordinateurs de qualité, adaptés à tous vos besoins. Que vous soyez un joueur passionné, un professionnel en quête de performance ou un étudiant à la recherche de portabilité, nous avons ce qu'il vous faut.
        </p>
      </section>

      {/* Section 2 : Notre mission */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Notre mission</h2>
        <p className="text-gray-700 leading-relaxed">
          Notre mission est de vous offrir des produits technologiques de haute qualité à des prix compétitifs. Nous croyons en la puissance de la technologie pour transformer les vies, et nous nous engageons à vous fournir les meilleurs outils pour réussir.
        </p>
      </section>

      {/* Section 3 : Pourquoi nous choisir ? */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Pourquoi choisir VOrdi ?</h2>
        <ul className="list-disc list-inside text-gray-700 leading-relaxed">
          <li>Des produits de qualité provenant des meilleures marques.</li>
          <li>Un service client réactif et disponible 24/7.</li>
          <li>Livraison rapide et gratuite pour toutes les commandes.</li>
          <li>Garantie satisfait ou remboursé sous 30 jours.</li>
        </ul>
      </section>

      {/* Section 4 : Notre équipe */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Notre équipe</h2>
        <p className="text-gray-700 leading-relaxed">
          Notre équipe est composée de passionnés de technologie qui sont là pour vous guider dans vos choix. Nous sommes fiers de vous offrir un service personnalisé et des conseils experts pour vous aider à trouver le produit parfait.
        </p>
      </section>

      {/* Section 5 : Contact */}
      <section>
        <h2 className="text-2xl font-semibold mb-4">Contactez-nous</h2>
        <p className="text-gray-700 leading-relaxed">
          Vous avez des questions ou besoin d'aide ? N'hésitez pas à nous contacter à l'adresse suivante :{' '}
          <a href="mailto:support@vordi.com" className="text-sky-500/80 hover:underline">
            support@vordi.com
          </a>
          . Nous sommes là pour vous aider !
        </p>
      </section>
    </div>
  );
};

export default AboutPage;