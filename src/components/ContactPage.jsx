import { useState } from "react";

export default function ContactPage() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus("");

    if (!formData.name || !formData.email || !formData.message) {
      setStatus("Tous les champs sont requis.");
      setLoading(false);
      return;
    }

    try {
      const response = await fetch("https://formspree.io/f/mkgozdao", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus("Message envoyé avec succès !");
        setFormData({ name: "", email: "", message: "" });
      } else {
        setStatus("Erreur lors de l'envoi du message.");
      }
    } catch (error) {
      setStatus("Une erreur est survenue. Veuillez réessayer.");
    }
    setLoading(false);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-10 lg:py-32 p-3 md:p-5 lg:p-6 pb-16">
      <div className="max-w-lg w-full">
        {/* Formulaire de contact */}
        <div className="bg-slate-700 rounded-lg shadow-md p-6">
          <h2 className="text-2xl text-center font-bold mb-6 text-gray-600 dark:text-white">
            Contactez-nous
          </h2>
          <form onSubmit={handleSubmit} className="space-y-8">
            <input
              type="text"
              name="name"
              placeholder="Nom"
              value={formData.name}
              onChange={handleChange}
              className="w-full p-2 border rounded-lg dark:bg-gray-700 dark:text-white"
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-2 border rounded-lg dark:bg-gray-700 dark:text-white"
            />
            <textarea
              name="message"
              placeholder="Votre message"
              value={formData.message}
              onChange={handleChange}
              className="w-full p-2 border rounded-lg dark:bg-gray-700 dark:text-white"
            ></textarea>
            <button
              type="submit"
              className="w-full bg-sky-500/80 text-white p-2 rounded-lg hover:bg-sky-500/90 disabled:opacity-50"
              disabled={loading}
            >
              {loading ? "Envoi..." : "Envoyer"}
            </button>
          </form>
          {status && (
            <p className="mt-2 text-center text-green-600">
              {status}
            </p>
          )}
          <div className="mt-8 flex justify-around">
            <a
              href="https://wa.me/1234567890"
              className="bg-green-500 text-white p-2 flex items-center rounded-lg hover:bg-green-600"
            >
              <img src="/assets/images/whatsapp.png" className="w-7 h-7" alt="" />
              <p className="mx-2">WhatsApp</p>
            </a>
            <a
              href="tel:+1234567890"
              className="bg-gray-500 text-white flex items-center p-2 rounded-lg hover:bg-gray-600"
            >
              <i className="fa fa-phone" aria-hidden="true"></i>
              <p className="mx-2">Téléphone</p>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}