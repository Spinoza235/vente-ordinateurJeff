import React, { useState } from 'react';
import ProductContactModal from './ProductContactModal'; // Assurez-vous que ce composant existe
import products from '../data/product'; // Importation des produits

const ProductGrid = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 8;
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [showBuyModal, setShowBuyModal] = useState(false); // Pour gérer le modal "Acheter"
  const [showDetailsModal, setShowDetailsModal] = useState(false); // Pour gérer le modal "Voir plus"
  // ✅ CORRECTION : Ces variables sont maintenant utilisées (pas de suppression nécessaire)

  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = products.slice(indexOfFirstProduct, indexOfLastProduct);
  const totalPages = Math.ceil(products.length / productsPerPage);

  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">
          Nos Produits Phares
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {currentProducts.map((product) => (
            <div key={product.id} className="bg-white rounded-lg shadow-lg overflow-hidden transform transition-transform duration-300 hover:scale-105 flex flex-col">
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
                  {product.description.length > 100
                    ? product.description.substring(0, 100) + "..."
                    : product.description}
                </p>
                {product.description.length > 100 && (
                  <button
                    onClick={() => {
                      setSelectedProduct(product);
                      setShowDetailsModal(true); // Ouvrir le modal "Voir plus"
                      setShowBuyModal(false); // Fermer le modal "Acheter"
                    }}
                    className="text-sky-500 hover:underline mt-2"
                  >
                    Voir plus
                  </button>
                )}
                <p className="text-lg font-bold text-sky-500/80 mb-4 mt-2">
                  {product.price}
                </p>
                <button
                  onClick={() => {
                    setSelectedProduct(product);
                    setShowBuyModal(true); // Ouvrir le modal "Acheter"
                    setShowDetailsModal(false); // Fermer le modal "Voir plus"
                  }}
                  className="inline-block bg-sky-500/80 text-white px-6 py-2 rounded-md hover:bg-sky-500/90 transition-colors duration-300"
                >
                  Acheter
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-center mt-8 space-x-2">
          {Array.from({ length: totalPages }, (_, i) => (
            <button
              key={i + 1}
              onClick={() => setCurrentPage(i + 1)}
              className={`px-4 py-2 rounded-md ${
                currentPage === i + 1
                  ? 'bg-sky-500/80 text-white'
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
            >
              {i + 1}
            </button>
          ))}
        </div>
      </div>

      {/* Modal "Acheter" */}
      {showBuyModal && selectedProduct && (
        <ProductContactModal
          isOpen={showBuyModal}
          onClose={() => {
            setShowBuyModal(false); // Fermer le modal "Acheter"
            setSelectedProduct(null); // Réinitialiser le produit sélectionné
          }}
          product={selectedProduct}
        />
      )}

      {/* Modal "Voir plus" */}
      {showDetailsModal && selectedProduct && (
        <ProductDetailModal
          product={selectedProduct}
          onClose={() => {
            setShowDetailsModal(false); // Fermer le modal "Voir plus"
            setSelectedProduct(null); // Réinitialiser le produit sélectionné
          }}
        />
      )}
    </section>
  );
};

const ProductDetailModal = ({ product, onClose }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50 p-4">
      <div className="bg-white rounded-lg shadow-2xl overflow-hidden max-w-2xl w-full lg:mx-4 max-h-[90vh] flex flex-col transform transition-all duration-300 ease-in-out scale-95 hover:scale-100">
        {/* En-tête du modal */}
        <div className="p-6 border-b border-gray-200">
          <h2 className="text-3xl font-bold text-gray-900">{product.name}</h2>
        </div>

        {/* Contenu principal avec image et description */}
        <div className="flex-grow overflow-y-auto p-6">
          {/* Conteneur de l'image */}
          <div className="w-full mb-6 rounded-lg overflow-hidden flex justify-center items-center">
            <img
              src={product.image}
              alt={product.name}
              className="max-w-full max-h-96 object-contain"
            />
          </div>

          {/* Description du produit */}
          <p className="text-gray-700 text-lg leading-relaxed">
            {product.description}
          </p>
        </div>

        {/* Pied de page avec prix et bouton Fermer */}
        <div className="p-6 border-t border-gray-200">
          <div className="flex justify-between items-center">
            <p className="text-2xl font-bold text-sky-500/80">
              {product.price}
            </p>
            <button
              onClick={onClose}
              className="px-6 py-3 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
            >
              Fermer
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductGrid;