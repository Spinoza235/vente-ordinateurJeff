import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ProductContactModal from '../components/ProductContactModal';
import products from '../data/product';

const CategoryPage = () => {
  const { category } = useParams();
  const [selectedCategory, setSelectedCategory] = useState(category || 'all');
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [expandedDescriptions, setExpandedDescriptions] = useState({});

  // Fonction pour basculer l'affichage de la description
  const toggleDescription = (productId) => {
    setExpandedDescriptions((prev) => ({
      ...prev,
      [productId]: !prev[productId],
    }));
  };

  // Mettre à jour selectedCategory lorsque les paramètres de l'URL changent
  useEffect(() => {
    setSelectedCategory(category || 'all');
  }, [category]);

  // Filtrer les produits par catégorie sélectionnée
  const filteredProducts = selectedCategory === 'all'
    ? products
    : products.filter(
        (product) => product.category.toLowerCase() === selectedCategory.toLowerCase()
      );

  // Fonction pour générer une description à partir des specs
  const getProductDescription = (product) => {
    if (product.description) {
      return product.description;
    }
    
    // Si pas de description, générer à partir des specs
    if (product.specs) {
      return `${product.specs.processor} | ${product.specs.ram} | ${product.specs.storage} | ${product.specs.screen} | ${product.specs.graphics}`;
    }
    
    return "Informations non disponibles";
  };

  return (
    <div className="container mx-auto p-4 pt-24">
      <h1 className="text-3xl font-bold mb-6 capitalize text-sky-500/80">
        {selectedCategory === 'all' ? 'Tous les produits' : selectedCategory}
      </h1>

      {/* Menu déroulant pour le filtrage */}
      <div className="mb-8">
        <label htmlFor="category-filter" className="block text-gray-700 mb-2">
          Filtrer par catégorie :
        </label>
        <select
          id="category-filter"
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
          className="w-full lg:w-1/3 px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-sky-500/80"
        >
          <option value="all">Tous</option>
          <option value="hp">HP</option>
          <option value="dell">Dell</option>
          <option value="lenovo">Lenovo</option>
          <option value="apple">Apple</option>
          <option value="surface">Surface</option>
        </select>
      </div>

      {/* Liste des produits */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {filteredProducts.map((product) => {
          const description = getProductDescription(product);
          
          return (
            <div
              key={product.id}
              className="bg-white rounded-lg shadow-lg overflow-hidden transform transition-transform duration-300 hover:scale-105 flex flex-col"
            >
              <div className="w-full aspect-square overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover object-center"
                />
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {product.name}
                </h3>
                <p className="text-gray-600 flex-grow">
                  {expandedDescriptions[product.id]
                    ? description
                    : `${description.substring(0, 100)}${
                        description.length > 100 ? "..." : ""
                      }`}
                </p>
                {description.length > 100 && (
                  <button
                    onClick={() => toggleDescription(product.id)}
                    className="text-sky-500 hover:underline mt-2"
                  >
                    {expandedDescriptions[product.id] ? "Voir moins" : "Voir plus"}
                  </button>
                )}
                <p className="text-lg font-bold text-sky-500/80 mb-4 mt-2">
                  {product.price}
                </p>
                <button
                  onClick={() => {
                    setSelectedProduct(product);
                  }}
                  className="inline-block bg-sky-500/80 text-white px-6 py-2 rounded-md hover:bg-sky-500/90 transition-colors duration-300"
                >
                  Acheter
                </button>
              </div>
            </div>
          );
        })}
      </div>

      {/* Message si aucun produit n'est trouvé */}
      {filteredProducts.length === 0 && (
        <div className="text-center text-gray-600 mt-8">
          Aucun produit trouvé.
        </div>
      )}

      {/* Affichage du modal si un produit est sélectionné */}
      {selectedProduct && (
        <ProductContactModal
          isOpen={!!selectedProduct}
          onClose={() => setSelectedProduct(null)}
          product={selectedProduct}
        />
      )}
    </div>
  );
};

export default CategoryPage;