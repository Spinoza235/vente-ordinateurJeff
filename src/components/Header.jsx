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
    <header className="bg-gray-50 shadow-sm fixed w-full z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
         <div className="flex-shrink-0">
  <NavLink to="/" className="flex items-center transition-opacity">
    <span className="inline-flex items-center space-x-2">
      <i className="fas fa-laptop-code text-sky-400 text-xl"></i>
      <span className="text-2xl font-bold text-gray-400">HopeBusi</span>
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
            <div className="relative mx-2">
              <Search className="absolute left-2 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
              <input
                type="text"
                placeholder="Rechercher un ordinateur..."
                className="border focus:ring-1 focus:ring-sky-500/80 rounded-md pl-8 pr-2 py-1 transition duration-200 ease-in-out focus:outline-none w-full"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              {/* Résultats de recherche */}
              {searchTerm && (
                <ul className="absolute top-10 left-0 w-full bg-white border border-gray-200 rounded-lg shadow-lg mt-1 max-h-48 overflow-y-auto transition-all duration-300 ease-in-out">
                  {filteredProducts.length > 0 ? (
                    filteredProducts.map((product) => (
                      <li
                        key={product.id}
                        className="p-3 flex items-center space-x-3 hover:bg-gray-100 cursor-pointer transition-colors"
                      >
                        <img src={product.image} alt={product.name} className="w-8 h-8 rounded-md object-cover" />
                        <NavLink 
                          to={`/category/${product.category.toLowerCase()}`} 
                          className="text-gray-700 font-medium block w-full"
                          onClick={() => setSearchTerm("")} // Réinitialisation de la recherche
                        >
                          {product.name}
                        </NavLink>
                      </li>
                    ))
                  ) : (
                    <li className="p-3 text-gray-500 text-center">Aucun produit trouvé</li>
                  )}
                </ul>              
              )}
            </div>

            <NavLink 
              to="/contact" 
              className="bg-sky-500/80 items-center text-white px-4 py-2 rounded-md hover:bg-sky-500/90 hidden lg:flex shadow-md"
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
                      className={({ isActive }) => 
                        `text-gray-900 hover:text-sky-500/80 transition-colors duration-300 pl-6 py-1 block ${isActive ? 'font-bold text-sky-500/80' : ''}`
                      }
                    >
                      <i className="fas fa-laptop mr-2"></i>
                      HP
                    </NavLink>
                    <NavLink
                      to="/category/dell"
                      className={({ isActive }) => 
                        `text-gray-900 hover:text-sky-500/80 transition-colors duration-300 pl-6 py-1 block ${isActive ? 'font-bold text-sky-500/80' : ''}`
                      }
                    >
                      <i className="fas fa-laptop mr-2"></i>
                      Dell
                    </NavLink>
                    <NavLink
                      to="/category/lenovo"
                      className={({ isActive }) => 
                        `text-gray-900 hover:text-sky-500/80 transition-colors duration-300 pl-6 py-1 block ${isActive ? 'font-bold text-sky-500/80' : ''}`
                      }
                    >
                      <i className="fas fa-laptop mr-2"></i>
                      Lenovo
                    </NavLink>
                    <NavLink
                      to="/category/apple"
                      className={({ isActive }) => 
                        `text-gray-900 hover:text-sky-500/80 transition-colors duration-300 pl-6 py-1 block ${isActive ? 'font-bold text-sky-500/80' : ''}`
                      }
                    >
                      <i className="fas fa-laptop mr-2"></i>
                      Apple
                    </NavLink>
                    <NavLink
                      to="/category/surface"
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

              {/* À propos */}
              <NavLink
                to="/A-propos"
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