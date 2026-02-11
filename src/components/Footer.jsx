const Footer = () => {
  return (
    <footer>
      <div className="bg-sky-500/80 p-0.5"></div>
      <div className="bg-slate-700 text-white py-8 pt-14 mb-0">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
            {/* À propos */}
            <div>
              {/* Logo texte avec icône */}
              <div className="inline-flex items-center space-x-2 mb-4">
                   <img 
                  src="/logoJeff.png" 
                  alt="Jeff Computer Logo" 
                  className="h-8 w-8 sm:h-10 sm:w-10 object-contain"/>
                <span className="text-2xl font-bold text-white">Jeff Computer</span>
              </div>
              <h2 className="text-lg text-sky-500/90 font-semibold">À propos</h2>
              <p className="mt-2 text-gray-200">
                Jeff Computer est votre boutique en ligne spécialisée dans la vente d'ordinateurs portables et accessoires.
              </p>
            </div>

            {/* Liens rapides */}
            <div>
              <h2 className="text-lg text-sky-500/90 font-semibold">Liens rapides</h2>
              <ul className="mt-2 space-y-2">
                <li>
                  <a href="/" className="text-gray-200 hover:text-white">Accueil</a>
                </li>
                <li>
                  <a href="/products" className="text-gray-200 hover:text-white">Produits</a>
                </li>
                <li>
                  <a href="/contact" className="text-gray-200 hover:text-white">Contact</a>
                </li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h2 className="text-lg font-semibold text-sky-500/90">Contact</h2>
              <p className="mt-2 text-gray-400">Email : hopedingammadji@gmail.com</p>
              <p className="text-gray-400">Téléphone : +237 6 86 36 23 76</p>
              <p className="text-gray-400">Adresse : En face de etages komeni ou en face de institut leadership </p>

              {/* Réseaux sociaux */}
              {/* ✅ CORRECTION : Remplacé href="#" par href="#top" et ajouté rel/target pour éviter l'erreur jsx-a11y/anchor-is-valid */}
              <div className="flex justify-center md:justify-start mt-4 space-x-4">
                <a 
                  href="#top" 
                  aria-label="Facebook" 
                  className="text-gray-400 hover:text-white text-xl"
                  onClick={(e) => e.preventDefault()}
                >
                  <i className="fab fa-facebook"></i>
                </a>
                <a 
                  href="#top" 
                  aria-label="Twitter" 
                  className="text-gray-400 hover:text-white text-xl"
                  onClick={(e) => e.preventDefault()}
                >
                  <i className="fab fa-twitter"></i>
                </a>
                <a 
                  href="#top" 
                  aria-label="Instagram" 
                  className="text-gray-400 hover:text-white text-xl"
                  onClick={(e) => e.preventDefault()}
                >
                  <i className="fab fa-instagram"></i>
                </a>
              </div>
            </div>
          </div>

          {/* Copyright */}
          <div className="text-center text-gray-400 text-sm mt-8 border-t border-gray-700 pt-4">
            &copy; {new Date().getFullYear()} <span className="font-semibold text-white">Jeff Computer</span>. Tous droits réservés.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;