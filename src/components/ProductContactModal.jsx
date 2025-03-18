import React, { useState } from "react";

const ProductContactModal = ({ isOpen, onClose, product }) => {
  const [status, setStatus] = useState(null);

  if (!isOpen) return null;

  const handleSubmit = async (event) => {
    event.preventDefault();
    setStatus(null); // Réinitialiser le statut au cas où

    const formData = new FormData(event.target);

    try {
      const response = await fetch("https://formspree.io/f/mkgozdao", {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      });

      if (response.ok) {
        setStatus("success");
        event.target.reset(); // Réinitialiser le formulaire
      } else {
        setStatus("error");
      }
    } catch (error) {
      setStatus("error");
    }
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 w-96 relative">
        {/* Bouton de fermeture agrandi */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-600 dark:text-gray-300 hover:text-red-600 dark:hover:text-red-400 text-4xl font-bold transition"
        >
          &times;
        </button>

        <h2 className="text-2xl text-center font-bold mt-8 mb-4 text-gray-900 dark:text-white">
          Demande d'Achat
        </h2>
        <p className="text-center text-gray-600 dark:text-gray-300 mb-4">
          Complétez ce formulaire pour contacter le vendeur au sujet de <b>{product.name}</b>.
        </p>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="name"
            placeholder="Votre nom"
            className="w-full p-2 border rounded-lg dark:bg-gray-700 dark:text-white"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Votre email"
            className="w-full p-2 border rounded-lg dark:bg-gray-700 dark:text-white"
            required
          />
          <input
            type="tel"
            name="phone"
            placeholder="Votre numéro de téléphone"
            className="w-full p-2 border rounded-lg dark:bg-gray-700 dark:text-white"
          />
          <textarea
            name="message"
            placeholder="Votre message (optionnel)"
            className="w-full p-2 border rounded-lg dark:bg-gray-700 dark:text-white"
          ></textarea>

          <button
            type="submit"
            className="w-full bg-sky-500/80 text-white p-2 rounded-lg hover:bg-sky-500/90 transition"
          >
            Envoyer
          </button>
        </form>

        {/* Messages de feedback */}
        {status === "success" && (
          <p className="text-green-600 dark:text-green-400 text-center mt-4">
            ✅ Votre message a été envoyé avec succès !
          </p>
        )}
        {status === "error" && (
          <p className="text-red-600 dark:text-red-400 text-center mt-4">
            ❌ Une erreur est survenue. Veuillez réessayer.
          </p>
        )}

        <a
          href="https://wa.me/1234567890"
          className="bg-green-500 text-white p-2 my-4 text-center flex items-center rounded-lg hover:bg-green-600"
        >
          <img src="/assets/images/whatsapp.png" className="w-7 h-7 ml-24" alt="" />
          <p className="mx-2 text-center">WhatsApp</p>
        </a>
        <p className="text-gray-300 py-2">Vous serez notifié dans moins de 24h</p>
      </div>
    </div>
  );
};

export default ProductContactModal;
