import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

const AdvancePage = () => {
  const [selectedUsage, setSelectedUsage] = useState(null);

  const usages = [
    {
      id: 'bureautique',
      icon: 'fa-file-alt',
      title: 'Bureautique & Navigation',
      description: 'Travail de bureau, emails, internet',
      specs: {
        processeur: 'Intel Core i3 ou AMD Ryzen 3',
        ram: '4 Go',
        stockage: 'SSD 256 Go (meilleur choix)',
      }
    },
    {
      id: 'multimedia',
      icon: 'fa-photo-video',
      title: 'Multimédia & Création',
      description: 'Montage photo/vidéo, graphisme',
      specs: {
        processeur: 'Intel Core i5/i7 ou AMD Ryzen 5/7',
        ram: '8 Go (minimum)',
        stockage: 'SSD 512 Go ou HDD selon vos choix',
        carteGraphique: 'Dédiée recommandée (NVIDIA/AMD)',
      }
    },
    {
      id: 'gaming',
      icon: 'fa-gamepad',
      title: 'Gaming',
      description: 'Jeux vidéo récents et exigeants',
      specs: {
        processeur: 'Intel Core i7/i9 ou AMD Ryzen 7/9',
        ram: '16 Go minimum (ou 32 Go idéal)',
        stockage: 'SSD NVMe 1 To',
        carteGraphique: 'NVIDIA RTX 4060/4070 ou AMD équivalent( Il faut une carte graphique dedie',
      }
    },
    {
      id: 'professionnel',
      icon: 'fa-briefcase',
      title: 'Usage Professionnel',
      description: 'CAO, développement, data science',
      specs: {
        processeur: 'Intel Core i7/i9 ou AMD Ryzen 7/9',
        ram: '16 Go (32 Go )',
        stockage: 'SSD NVMe 1 To ou 512 Go',
        carteGraphique: 'Professionnelle (NVIDIA Quadro) ou RTX',
      }
    }
  ];

  const composants = [
    {
      icon: 'fa-microchip',
      nom: 'Processeur (CPU)',
      description: 'Le cerveau de votre ordinateur',
      details: 'Il gère toutes les opérations. Plus il est puissant, plus votre PC est rapide. Intel Core i5/i7 ou AMD Ryzen 5/7 sont de bons choix pour la plupart des usages.'
    },
    {
      icon: 'fa-memory',
      nom: 'Mémoire RAM',
      description: 'La mémoire de travail',
      details: '8 Go suffisent pour de la bureautique, mais visez 16 Go pour du multitâche ou de la création. Les joueurs et professionnels préféreront 32 Go ou plus.'
    },
    {
      icon: 'fa-hdd',
      nom: 'Stockage (SSD/HDD)',
      description: 'Où sont sauvegardées vos données',
      details: 'Privilégiez toujours un SSD pour le système : c\'est 5 à 10 fois plus rapide qu\'un disque dur classique. Un SSD de 256-512 Go suffit pour débuter.'
    },
    {
      icon: 'fa-tv',
      nom: 'Carte Graphique (GPU)',
      description: 'Pour les images et les jeux',
      details: 'Intégrée au processeur pour la bureautique. Dédiée (NVIDIA/AMD) indispensable pour les jeux, le montage vidéo et la modélisation 3D.'
    },
    {
      icon: 'fa-desktop',
      nom: 'Écran',
      description: 'Votre fenêtre sur le numérique',
      details: 'Full HD (1920x1080) est le standard. Pour les créatifs : écran IPS avec bonne calibration. Pour les gamers : taux de rafraîchissement 144Hz ou plus.'
    },
    {
      icon: 'fa-plug',
      nom: 'Alimentation',
      description: 'La source d\'énergie',
      details: 'Souvent négligée mais cruciale. Prévoyez 550-650W pour un PC standard, 750W+ pour un PC gaming. Certification 80+ Bronze minimum recommandée.'
    }
  ];

  return (
    <div className="container mx-auto p-4 pt-24 pb-12">

      <div className="mb-8">
        <h2 className="text-3xl font-bold text-gray-800 mb-3">
          Comment choisir le bon PC ?
        </h2>
        <p className="text-gray-600 text-lg leading-relaxed">
          Pas de panique ! Choisir un ordinateur n'est pas si compliqué une fois qu'on connaît 
          l'essentiel. Suivez nos conseils pour trouver la machine parfaite selon vos besoins.
        </p>
      </div>

      {/* Étape 1 : Définir son usage */}
      <section className="mb-12">
        <div className="flex items-center mb-6">
          <span className="bg-sky-500/80 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-3">
            1
          </span>
          <h3 className="text-2xl font-semibold text-gray-800">
            Définissez votre usage principal
          </h3>
        </div>
        
        <p className="text-gray-600 mb-6">
          La première question à vous poser : qu'allez-vous faire avec votre PC ? 
          Cliquez sur votre usage pour voir nos recommandations.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {usages.map((usage) => (
            <div
              key={usage.id}
              onClick={() => setSelectedUsage(usage.id === selectedUsage ? null : usage.id)}
              className={`border-2 rounded-lg p-6 cursor-pointer transition-all duration-300 hover:shadow-lg ${
                selectedUsage === usage.id
                  ? 'border-sky-500 bg-sky-50 shadow-md'
                  : 'border-gray-200 hover:border-sky-300'
              }`}
            >
              <div className="text-center mb-4">
                <i className={`fas ${usage.icon} text-4xl ${
                  selectedUsage === usage.id ? 'text-sky-500' : 'text-gray-400'
                }`}></i>
              </div>
              <h4 className="font-semibold text-lg mb-2 text-center text-gray-800">
                {usage.title}
              </h4>
              <p className="text-sm text-gray-600 text-center mb-4">
                {usage.description}
              </p>
              
              {selectedUsage === usage.id && (
                <div className="mt-4 pt-4 border-t border-sky-200">
                  <p className="font-semibold text-sky-700 mb-3 text-sm">
                    Configuration recommandée :
                  </p>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start">
                      <i className="fas fa-microchip text-sky-500 mt-1 mr-2 text-xs"></i>
                      <span className="text-gray-700">{usage.specs.processeur}</span>
                    </li>
                    <li className="flex items-start">
                      <i className="fas fa-memory text-sky-500 mt-1 mr-2 text-xs"></i>
                      <span className="text-gray-700">{usage.specs.ram}</span>
                    </li>
                    <li className="flex items-start">
                      <i className="fas fa-hdd text-sky-500 mt-1 mr-2 text-xs"></i>
                      <span className="text-gray-700">{usage.specs.stockage}</span>
                    </li>
                    {usage.specs.carteGraphique && (
                      <li className="flex items-start">
                        <i className="fas fa-tv text-sky-500 mt-1 mr-2 text-xs"></i>
                        <span className="text-gray-700">{usage.specs.carteGraphique}</span>
                      </li>
                    )}
                  </ul>
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Étape 2 : Comprendre les composants */}
      <section className="mb-12">
        <div className="flex items-center mb-6">
          <span className="bg-sky-500/80 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-3">
            2
          </span>
          <h3 className="text-2xl font-semibold text-gray-800">
            Comprenez les composants essentiels
          </h3>
        </div>

        <p className="text-gray-600 mb-8">
          Voici les éléments clés qui font la différence. Pas besoin d'être un expert, 
          juste de comprendre l'essentiel pour faire le bon choix.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {composants.map((composant, index) => (
            <div
              key={index}
              className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow duration-300"
            >
              <div className="flex items-center mb-4">
                <div className="bg-sky-100 rounded-full w-12 h-12 flex items-center justify-center mr-4">
                  <i className={`fas ${composant.icon} text-sky-500 text-xl`}></i>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800">{composant.nom}</h4>
                  <p className="text-sm text-gray-500">{composant.description}</p>
                </div>
              </div>
              <p className="text-gray-700 text-sm leading-relaxed">
                {composant.details}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Étape 3 : Conseils pratiques */}
      <section className="mb-12">
        <div className="flex items-center mb-6">
          <span className="bg-sky-500/80 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-3">
            3
          </span>
          <h3 className="text-2xl font-semibold text-gray-800">
            Nos conseils pour ne pas se tromper
          </h3>
        </div>

        <div className="bg-gradient-to-br from-sky-50 to-blue-50 border border-sky-200 rounded-lg p-8">
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-semibold text-gray-800 mb-3 flex items-center">
                <i className="fas fa-check-circle text-green-500 mr-2"></i>
                À faire
              </h4>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>Privilégiez un SSD pour le système d'exploitation, c'est le changement le plus perceptible au quotidien</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>Pensez à l'évolutivité : peut-on ajouter de la RAM ou du stockage plus tard ?</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>Vérifiez la garantie et le service après-vente</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>Lisez les avis d'autres utilisateurs avant d'acheter</span>
                </li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold text-gray-800 mb-3 flex items-center">
                <i className="fas fa-times-circle text-red-500 mr-2"></i>
                À éviter
              </h4>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="text-red-500 mr-2">✗</span>
                  <span>Ne pas acheter un PC trop juste pour votre usage actuel sans penser à l'avenir</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-2">✗</span>
                  <span>Éviter les PC avec moins de 4 Go de RAM</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-2">✗</span>
                  <span>Ne pas négliger le refroidissement, surtout pour les PC gaming</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Lexique rapide */}
      <section className="mb-12">
        <h3 className="text-2xl font-semibold text-gray-800 mb-6">
          Petit lexique pour s'y retrouver
        </h3>
        
        <div className="bg-white border border-gray-200 rounded-lg p-6">
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <div className="mb-4">
                <h5 className="font-semibold text-sky-600 mb-1">GHz (Gigahertz)</h5>
                <p className="text-sm text-gray-700">
                  La fréquence du processeur. Plus c'est élevé, plus c'est rapide, 
                  mais ce n'est pas le seul critère.
                </p>
              </div>
              <div className="mb-4">
                <h5 className="font-semibold text-sky-600 mb-1">SSD vs HDD</h5>
                <p className="text-sm text-gray-700">
                  SSD = ultra-rapide mais plus cher. HDD = plus lent mais beaucoup d'espace 
                  pour le prix. L'idéal : SSD pour le système + HDD pour le stockage.
                </p>
              </div>
              <div className="mb-4">
                <h5 className="font-semibold text-sky-600 mb-1">DDR4 / DDR5</h5>
                <p className="text-sm text-gray-700">
                  Types de RAM. DDR5 est plus récent et rapide, mais DDR4 reste largement 
                  suffisant pour la plupart des usages.
                </p>
              </div>
            </div>
            
            <div>
              <div className="mb-4">
                <h5 className="font-semibold text-sky-600 mb-1">Carte graphique intégrée vs dédiée</h5>
                <p className="text-sm text-gray-700">
                  Intégrée = incluse dans le processeur, parfait pour la bureautique. 
                  Dédiée = composant à part, indispensable pour les jeux et la création.
                </p>
              </div>
              <div className="mb-4">
                <h5 className="font-semibold text-sky-600 mb-1">NVMe</h5>
                <p className="text-sm text-gray-700">
                  Type de SSD ultra-rapide qui se connecte directement à la carte mère. 
                  Jusqu'à 7 fois plus rapide qu'un SSD SATA classique.
                </p>
              </div>
              <div className="mb-4">
                <h5 className="font-semibold text-sky-600 mb-1">Watercooling</h5>
                <p className="text-sm text-gray-700">
                  Système de refroidissement à eau, plus efficace et silencieux que les 
                  ventilateurs classiques. Réservé aux configs gaming haut de gamme.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to action final */}
      <section className="bg-gradient-to-r from-sky-500 to-blue-600 text-white rounded-lg p-8 text-center">
        <h3 className="text-2xl font-bold mb-4">
          Encore des questions ?
        </h3>
        <p className="text-lg mb-6 opacity-90">
          Notre équipe est là pour vous accompagner dans votre choix. 
          N'hésitez pas à nous contacter, on adore parler tech !
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <NavLink to='/contact'
            className="bg-white text-sky-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors inline-flex items-center justify-center"
          >
            <i className="fas fa-envelope mr-2"></i>
            Nous écrire
          </NavLink>
          
         {/* Au lieu de <a href="/products"> utilisez : */}

<NavLink 
  to="/category/all"
  className="bg-transparent border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-sky-600 transition-colors inline-flex items-center justify-center"
>
  <i className="fas fa-laptop mr-2"></i>
  Voir nos PC
</NavLink>
        </div>
      </section>
    </div>
  );
};

export default AdvancePage;