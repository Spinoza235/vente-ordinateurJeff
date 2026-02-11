import React, { useState } from 'react';
import ProductContactModal from './ProductContactModal';
import promotions from '../data/promotion';
import { Cpu, HardDrive, Monitor, Zap, Package, Tag } from 'lucide-react';

const Promotions = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [showBuyModal, setShowBuyModal] = useState(false);
  const [showDetailsModal, setShowDetailsModal] = useState(false);

  return (
    <section id="promotions" className="py-12 bg-gradient-to-r from-purple-50 to-blue-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-2">
            Promotions en Cours
          </h2>
          <p className="text-gray-600">Profitez de nos offres exceptionnelles à durée limitée !</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {promotions.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-lg shadow-xl overflow-hidden transform transition-transform duration-300 hover:scale-105 flex flex-col relative"
            >
              {/* Badge de réduction */}
              <div className="absolute top-4 right-4 z-10">
                <div className="bg-red-600 text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg flex items-center gap-1">
                  <Tag className="w-4 h-4" />
                  -{product.discount}
                </div>
              </div>

              {/* Image */}
              <div className="relative aspect-[4/3] w-full overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                />
              </div>

              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {product.name}
                </h3>

                {/* Quick specs preview */}
                <div className="space-y-2 mb-4 flex-grow">
                  <div className="flex items-center text-sm text-gray-600">
                    <Cpu className="w-4 h-4 mr-2 text-purple-500" />
                    <span className="truncate">{product.specs.processor}</span>
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <Zap className="w-4 h-4 mr-2 text-purple-500" />
                    <span>{product.specs.ram} | {product.specs.storage}</span>
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <Monitor className="w-4 h-4 mr-2 text-purple-500" />
                    <span className="truncate">{product.specs.screen}</span>
                  </div>
                </div>

                <button
                  onClick={() => {
                    setSelectedProduct(product);
                    setShowDetailsModal(true);
                    setShowBuyModal(false);
                  }}
                  className="text-purple-600 hover:underline mb-3 text-left text-sm font-medium"
                >
                  Voir toutes les caractéristiques →
                </button>

                {/* Prix avec réduction */}
                <div className="mb-4">
                  <p className="text-2xl font-bold text-purple-600">
                    {product.price}
                  </p>
                  <p className="text-xs text-gray-500">Prix promotionnel</p>
                </div>

                <button
                  onClick={() => {
                    setSelectedProduct(product);
                    setShowBuyModal(true);
                    setShowDetailsModal(false);
                  }}
                  className="w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white px-6 py-3 rounded-md hover:from-purple-700 hover:to-blue-700 transition-all duration-300 font-semibold shadow-md"
                >
                  Profiter de l'offre
                </button>
              </div>
            </div>
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
        <PromotionDetailModal
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

const PromotionDetailModal = ({ product, onClose }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50 p-4">
      <div className="bg-white rounded-lg shadow-2xl overflow-hidden max-w-4xl w-full max-h-[90vh] flex flex-col">
        {/* En-tête avec badge promo */}
        <div className="p-6 border-b border-gray-200 bg-gradient-to-r from-purple-50 to-blue-50 relative">
          <div className="absolute top-4 right-4">
            <div className="bg-red-600 text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg flex items-center gap-1">
              <Tag className="w-4 h-4" />
              -{product.discount}
            </div>
          </div>
          <h2 className="text-3xl font-bold text-gray-900 pr-24">{product.name}</h2>
          <p className="text-sm text-gray-600 mt-1">Catégorie: {product.category.toUpperCase()}</p>
          <div className="mt-2">
            <span className="inline-block bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-xs font-semibold">
              🔥 OFFRE LIMITÉE
            </span>
          </div>
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
              <div className="bg-purple-50 p-4 rounded-lg border border-purple-100">
                <div className="flex items-start">
                  <Cpu className="w-5 h-5 mr-3 text-purple-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900 text-sm">Processeur</h4>
                    <p className="text-gray-700 mt-1">{product.specs.processor}</p>
                  </div>
                </div>
              </div>

              {/* RAM */}
              <div className="bg-purple-50 p-4 rounded-lg border border-purple-100">
                <div className="flex items-start">
                  <Zap className="w-5 h-5 mr-3 text-purple-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900 text-sm">Mémoire RAM</h4>
                    <p className="text-gray-700 mt-1">{product.specs.ram}</p>
                  </div>
                </div>
              </div>

              {/* Stockage */}
              <div className="bg-purple-50 p-4 rounded-lg border border-purple-100">
                <div className="flex items-start">
                  <HardDrive className="w-5 h-5 mr-3 text-purple-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900 text-sm">Stockage</h4>
                    <p className="text-gray-700 mt-1">{product.specs.storage}</p>
                  </div>
                </div>
              </div>

              {/* Écran */}
              <div className="bg-purple-50 p-4 rounded-lg border border-purple-100">
                <div className="flex items-start">
                  <Monitor className="w-5 h-5 mr-3 text-purple-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900 text-sm">Écran</h4>
                    <p className="text-gray-700 mt-1">{product.specs.screen}</p>
                  </div>
                </div>
              </div>

              {/* Carte graphique */}
              <div className="bg-purple-50 p-4 rounded-lg border border-purple-100">
                <div className="flex items-start">
                  <Package className="w-5 h-5 mr-3 text-purple-600 mt-0.5 flex-shrink-0" />
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
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Fonctionnalités incluses</h3>
              <div className="flex flex-wrap gap-2">
                {product.specs.features.map((feature, index) => (
                  <span
                    key={index}
                    className="bg-gradient-to-r from-purple-100 to-blue-100 text-purple-700 px-3 py-1 rounded-full text-sm font-medium border border-purple-200"
                  >
                    {feature}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Pied de page */}
        <div className="p-6 border-t border-gray-200 bg-gradient-to-r from-purple-50 to-blue-50">
          <div className="flex justify-between items-center flex-wrap gap-4">
            <div>
              <p className="text-3xl font-bold text-purple-600">
                {product.price}
              </p>
              <p className="text-sm text-gray-600 mt-1">
                Économisez {product.discount} sur ce produit !
              </p>
            </div>
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

export default Promotions;