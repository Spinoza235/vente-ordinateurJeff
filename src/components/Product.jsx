import React, { useState } from 'react';
import ProductContactModal from './ProductContactModal';
import products from '../data/product';
import { Cpu, HardDrive, Monitor, Zap, Package } from 'lucide-react';

const ProductGrid = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 8;
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [showBuyModal, setShowBuyModal] = useState(false);
  const [showDetailsModal, setShowDetailsModal] = useState(false);

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
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {product.name}
                </h3>
                
                {/* Quick specs preview */}
                <div className="space-y-2 mb-4 flex-grow">
                  <div className="flex items-center text-sm text-gray-600">
                    <Cpu className="w-4 h-4 mr-2 text-sky-500" />
                    <span className="truncate">{product.specs.processor}</span>
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <Zap className="w-4 h-4 mr-2 text-sky-500" />
                    <span>{product.specs.ram} | {product.specs.storage}</span>
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <Monitor className="w-4 h-4 mr-2 text-sky-500" />
                    <span className="truncate">{product.specs.screen}</span>
                  </div>
                </div>

                <button
                  onClick={() => {
                    setSelectedProduct(product);
                    setShowDetailsModal(true);
                    setShowBuyModal(false);
                  }}
                  className="text-sky-500 hover:underline mb-3 text-left text-sm font-medium"
                >
                  Voir toutes les caractéristiques →
                </button>

                <p className="text-lg font-bold text-sky-500/80 mb-4">
                  {product.price}
                </p>
                
                <button
                  onClick={() => {
                    setSelectedProduct(product);
                    setShowBuyModal(true);
                    setShowDetailsModal(false);
                  }}
                  className="w-full bg-sky-500/80 text-white px-6 py-2 rounded-md hover:bg-sky-500/90 transition-colors duration-300"
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
            setShowBuyModal(false);
            setSelectedProduct(null);
          }}
          product={selectedProduct}
        />
      )}

      {/* Modal "Voir plus" */}
      {showDetailsModal && selectedProduct && (
        <ProductDetailModal
          product={selectedProduct}
          onClose={() => {
            setShowDetailsModal(false);
            setSelectedProduct(null);
          }}
        />
      )}
    </section>
  );
};

const ProductDetailModal = ({ product, onClose }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50 p-4">
      <div className="bg-white rounded-lg shadow-2xl overflow-hidden max-w-4xl w-full max-h-[90vh] flex flex-col">
        {/* En-tête */}
        <div className="p-6 border-b border-gray-200 bg-gradient-to-r from-sky-50 to-blue-50">
          <h2 className="text-3xl font-bold text-gray-900">{product.name}</h2>
          <p className="text-sm text-gray-600 mt-1">Catégorie: {product.category.toUpperCase()}</p>
        </div>

        {/* Contenu principal */}
        <div className="flex-grow overflow-y-auto p-6">
          <div className="grid md:grid-cols-2 gap-6">
            {/* Image */}
            <div className="w-full rounded-lg overflow-hidden bg-gray-50 flex justify-center items-center p-4">
              <img
                src={product.image}
                alt={product.name}
                className="max-w-full max-h-80 object-contain"
              />
            </div>

            {/* Spécifications */}
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Caractéristiques techniques</h3>
              
              {/* Processeur */}
              <div className="bg-gray-50 p-4 rounded-lg">
                <div className="flex items-start">
                  <Cpu className="w-5 h-5 mr-3 text-sky-500 mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900 text-sm">Processeur</h4>
                    <p className="text-gray-700 mt-1">{product.specs.processor}</p>
                  </div>
                </div>
              </div>

              {/* RAM */}
              <div className="bg-gray-50 p-4 rounded-lg">
                <div className="flex items-start">
                  <Zap className="w-5 h-5 mr-3 text-sky-500 mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900 text-sm">Mémoire RAM</h4>
                    <p className="text-gray-700 mt-1">{product.specs.ram}</p>
                  </div>
                </div>
              </div>

              {/* Stockage */}
              <div className="bg-gray-50 p-4 rounded-lg">
                <div className="flex items-start">
                  <HardDrive className="w-5 h-5 mr-3 text-sky-500 mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900 text-sm">Stockage</h4>
                    <p className="text-gray-700 mt-1">{product.specs.storage}</p>
                  </div>
                </div>
              </div>

              {/* Écran */}
              <div className="bg-gray-50 p-4 rounded-lg">
                <div className="flex items-start">
                  <Monitor className="w-5 h-5 mr-3 text-sky-500 mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900 text-sm">Écran</h4>
                    <p className="text-gray-700 mt-1">{product.specs.screen}</p>
                  </div>
                </div>
              </div>

              {/* Carte graphique */}
              <div className="bg-gray-50 p-4 rounded-lg">
                <div className="flex items-start">
                  <Package className="w-5 h-5 mr-3 text-sky-500 mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900 text-sm">Carte Graphique</h4>
                    <p className="text-gray-700 mt-1">{product.specs.graphics}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Fonctionnalités supplémentaires */}
          {product.specs.features && product.specs.features.length > 0 && (
            <div className="mt-6 border-t pt-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Fonctionnalités</h3>
              <div className="flex flex-wrap gap-2">
                {product.specs.features.map((feature, index) => (
                  <span
                    key={index}
                    className="bg-sky-100 text-sky-700 px-3 py-1 rounded-full text-sm font-medium"
                  >
                    {feature}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Pied de page */}
        <div className="p-6 border-t border-gray-200 bg-gray-50">
          <div className="flex justify-between items-center">
            <p className="text-3xl font-bold text-sky-500/80">
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