import React, { useState } from 'react';
import { NavLink } from 'react-router-dom'; // Utiliser NavLink au lieu de Link
import { Search } from 'lucide-react';
import products from '../data/product'; // Importer le tableau de produits

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isCategoriesOpen, setIsCategoriesOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState(""); // État pour la recherche

  const handleCategoriesHover = (open) => {
    setIsCategoriesOpen(open);
  };

  // Filtrer les produits en fonction du terme de recherche
  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    product.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
    product.price.toString().includes(searchTerm) ||
    product.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <header className="bg-gray-100 shadow-sm fixed w-full z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
         <div className="flex-shrink-0">
<NavLink to="/" className="flex items-center transition-opacity hover:opacity-80">
  <span className="inline-flex items-center space-x-2 sm:space-x-3">
    {/* Image du logo */}
    <img 
      src="/logoJeff.png" 
      alt="Jeff Computer Logo" 
      className="h-8 w-8 sm:h-10 sm:w-10 object-contain"/>
    <span className="text-lg sm:text-2xl font-bold text-gray-700">Jeff Computer</span>
  </span>
</NavLink>
</div>

          <nav className="hidden lg:flex space-x-8 items-center">
            <NavLink 
              to="/" 
              className={({ isActive }) => 
                `text-gray-900 hover:text-sky-500/80 ${isActive ? 'font-bold text-sky-500/80' : ''}`
              }
            >
              Accueil
            </NavLink>
            <NavLink 
              to="/category/all" 
              className={({ isActive }) => 
                `text-gray-900 hover:text-sky-500/80 ${isActive ? 'font-bold text-sky-500/80' : ''}`
              }
            >
              Produits
            </NavLink>
            <div className="relative"
              onMouseEnter={() => handleCategoriesHover(true)}
              onMouseLeave={() => handleCategoriesHover(false)}
            >
              <button className="text-gray-900 hover:text-sky-500/80 focus:outline-none flex items-center">
                Catégories <i className="fas fa-chevron-down ml-2"></i>
              </button>
              {isCategoriesOpen && (
                <div className="absolute bg-white shadow-md rounded-md py-2 w-48">
                  <NavLink 
                    to="/category/hp" 
                    className={({ isActive }) => 
                      `block px-4 py-2 text-gray-700 hover:bg-gray-100 ${isActive ? 'font-bold text-sky-500/80' : ''}`
                    }
                  >
                    HP
                  </NavLink>
                  <NavLink 
                    to="/category/dell" 
                    className={({ isActive }) => 
                      `block px-4 py-2 text-gray-700 hover:bg-gray-100 ${isActive ? 'font-bold text-sky-500/80' : ''}`
                    }
                  >
                    Dell
                  </NavLink>
                  <NavLink 
                    to="/category/lenovo" 
                    className={({ isActive }) => 
                      `block px-4 py-2 text-gray-700 hover:bg-gray-100 ${isActive ? 'font-bold text-sky-500/80' : ''}`
                    }
                  >
                    Lenovo
                  </NavLink>
                  <NavLink 
                    to="/category/apple" 
                    className={({ isActive }) => 
                      `block px-4 py-2 text-gray-700 hover:bg-gray-100 ${isActive ? 'font-bold text-sky-500/80' : ''}`
                    }
                  >
                    Apple
                  </NavLink>
                  <NavLink 
                    to="/category/surface" 
                    className={({ isActive }) => 
                      `block px-4 py-2 text-gray-700 hover:bg-gray-100 ${isActive ? 'font-bold text-sky-500/80' : ''}`
                    }
                  >
                    Surface
                  </NavLink>
                </div>
              )}
            </div>
            <NavLink 
              to="/guide-achat" 
              className={({ isActive }) => 
                `text-gray-900 hover:text-sky-500/80 ${isActive ? 'font-bold text-sky-500/80' : ''}`
              }
            >
              Guide d'achat
            </NavLink>
            <NavLink 
              to="/A-propos" 
              className={({ isActive }) => 
                `text-gray-900 hover:text-sky-500/80 ${isActive ? 'font-bold text-sky-500/80' : ''}`
              }
            >
              À propos
            </NavLink>
          </nav>
          
          <div className="flex items-center space-x-2 lg:space-x-6">
            {/* Champ de recherche */}
            <div className="relative mx-2 flex-1 lg:flex-initial">
              <Search className="absolute left-2 top-1/2 -translate-y-1/2 text-gray-400 z-10" size={18} />
              <input
                type="text"
                placeholder="Rechercher..."
                className="border focus:ring-1 focus:ring-sky-500/80 rounded-md pl-8 pr-2 py-1.5 transition duration-200 ease-in-out focus:outline-none w-full lg:w-64"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              {/* Résultats de recherche */}
              {searchTerm && (
                <ul className="absolute top-12 left-0 right-0 lg:left-0 lg:right-auto lg:w-96 bg-white border border-gray-200 rounded-lg shadow-xl mt-1 max-h-72 overflow-y-auto transition-all duration-300 ease-in-out z-50">
                  {filteredProducts.length > 0 ? (
                    filteredProducts.map((product) => (
                      <li
                        key={product.id}
                        className="border-b last:border-b-0 hover:bg-gray-50 transition-colors"
                      >
                        <NavLink 
                          to={`/category/${product.category.toLowerCase()}`} 
                          className="p-3 flex items-center space-x-3 w-full"
                          onClick={() => setSearchTerm("")}
                        >
                          <img 
                            src={product.image} 
                            alt={product.name} 
                            className="w-12 h-12 rounded-md object-cover flex-shrink-0" 
                          />
                          <div className="flex-1 min-w-0">
                            <p className="text-gray-800 font-medium truncate">{product.name}</p>
                            <p className="text-sm text-gray-500">{product.category}</p>
                          </div>
                          <span className="text-sky-600 font-semibold flex-shrink-0">
                            {product.price} FCFA
                          </span>
                        </NavLink>
                      </li>
                    ))
                  ) : (
                    <li className="p-4 text-gray-500 text-center">
                      <i className="fas fa-search text-3xl mb-2 text-gray-300"></i>
                      <p>Aucun produit trouvé</p>
                    </li>
                  )}
                </ul>              
              )}
            </div>

            <NavLink 
              to="/contact" 
              className="bg-sky-500/80 items-center text-white px-4 py-2 rounded-md hover:bg-sky-500/90 hidden lg:flex shadow-md flex-shrink-0"
            >
              <i className="fa fa-phone" aria-hidden="true"></i>
              <p className="mx-4">Contactez-nous</p>
            </NavLink>
          </div>

          <div className="lg:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-900 hover:text-sky-500/80 focus:outline-none"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                )}
              </svg>
            </button>
          </div>
        </div>
        {isMenuOpen && (
          <div className="md:hidden bg-gray-50 rounded-lg mt-2 mx-4">
            <div className="flex flex-col space-y-4 py-4">
              {/* Accueil */}
              <NavLink
                to="/"
                onClick={() => setIsMenuOpen(false)}
                className={({ isActive }) => 
                  `flex items-center text-gray-900 hover:text-sky-500/80 transition-colors duration-300 px-4 py-2 ${isActive ? 'font-bold text-sky-500/80' : ''}`
                }
              >
                <i className="fas fa-home mr-2"></i>
                <span>Accueil</span>
              </NavLink>

              {/* Produits */}
              <NavLink
                to="/category/all"
                onClick={() => setIsMenuOpen(false)}
                className={({ isActive }) => 
                  `flex items-center text-gray-900 hover:text-sky-500/80 transition-colors duration-300 px-4 py-2 ${isActive ? 'font-bold text-sky-500/80' : ''}`
                }
              >
                <i className="fas fa-box-open mr-2"></i>
                <span>Produits</span>
              </NavLink>

              {/* Catégories */}
              <div className="flex flex-col space-y-2 px-4 py-2">
                <button
                  onClick={() => setIsCategoriesOpen(!isCategoriesOpen)}
                  className="text-gray-900 font-semibold flex items-center"
                >
                  <i className="fas fa-list-alt mr-2"></i>
                  <span>Catégories</span>
                  <i className={`fas fa-chevron-${isCategoriesOpen ? 'up' : 'down'} ml-2`}></i>
                </button>

                {isCategoriesOpen && (
                  <div>
                    <NavLink
                      to="/category/hp"
                      onClick={() => setIsMenuOpen(false)}
                      className={({ isActive }) => 
                        `text-gray-900 hover:text-sky-500/80 transition-colors duration-300 pl-6 py-1 block ${isActive ? 'font-bold text-sky-500/80' : ''}`
                      }
                    >
                      <i className="fas fa-laptop mr-2"></i>
                      HP
                    </NavLink>
                    <NavLink
                      to="/category/dell"
                      onClick={() => setIsMenuOpen(false)}
                      className={({ isActive }) => 
                        `text-gray-900 hover:text-sky-500/80 transition-colors duration-300 pl-6 py-1 block ${isActive ? 'font-bold text-sky-500/80' : ''}`
                      }
                    >
                      <i className="fas fa-laptop mr-2"></i>
                      Dell
                    </NavLink>
                    <NavLink
                      to="/category/lenovo"
                      onClick={() => setIsMenuOpen(false)}
                      className={({ isActive }) => 
                        `text-gray-900 hover:text-sky-500/80 transition-colors duration-300 pl-6 py-1 block ${isActive ? 'font-bold text-sky-500/80' : ''}`
                      }
                    >
                      <i className="fas fa-laptop mr-2"></i>
                      Lenovo
                    </NavLink>
                    <NavLink
                      to="/category/apple"
                      onClick={() => setIsMenuOpen(false)}
                      className={({ isActive }) => 
                        `text-gray-900 hover:text-sky-500/80 transition-colors duration-300 pl-6 py-1 block ${isActive ? 'font-bold text-sky-500/80' : ''}`
                      }
                    >
                      <i className="fas fa-laptop mr-2"></i>
                      Apple
                    </NavLink>
                    <NavLink
                      to="/category/surface"
                      onClick={() => setIsMenuOpen(false)}
                      className={({ isActive }) => 
                        `text-gray-900 hover:text-sky-500/80 transition-colors duration-300 pl-6 py-1 block ${isActive ? 'font-bold text-sky-500/80' : ''}`
                      }
                    >
                      <i className="fas fa-laptop mr-2"></i>
                      Surface
                    </NavLink>
                  </div>
                )}
              </div>

              {/* Guide d'achat */}
              <NavLink
                to="/guide-achat"
                onClick={() => setIsMenuOpen(false)}
                className={({ isActive }) => 
                  `flex items-center text-gray-900 hover:text-sky-500/80 transition-colors duration-300 px-4 py-2 ${isActive ? 'font-bold text-sky-500/80' : ''}`
                }
              >
                <i className="fas fa-lightbulb mr-2"></i>
                <span>Guide d'achat</span>
              </NavLink>

              {/* À propos */}
              <NavLink
                to="/A-propos"
                onClick={() => setIsMenuOpen(false)}
                className={({ isActive }) => 
                  `flex items-center text-gray-900 hover:text-sky-500/80 transition-colors duration-300 px-4 py-2 ${isActive ? 'font-bold text-sky-500/80' : ''}`
                }
              >
                <i className="fas fa-info-circle mr-2"></i>
                <span>À propos</span>
              </NavLink>

              {/* Bouton Contactez-nous */}
              <NavLink
                to="/contact"
                onClick={() => setIsMenuOpen(false)}
                className="bg-sky-500/80 flex items-center justify-center text-white px-4 py-2 rounded-md hover:bg-sky-500/90 transition-colors duration-300 mx-4"
              >
                <i className="fas fa-phone mr-2"></i>
                <span>Contactez-nous</span>
              </NavLink>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;