import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import ContactPage from './components/ContactPage';
import Footer from './components/Footer';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import Product from './components/Product';
import Promotions from './components/Promotions';
import CategoryPage from "./pages/CategoryPage";
import AboutPage from "./pages/AboutPage";
import ScrollToSection from "./components/ScrollToSection";

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Header />
        <ScrollToSection />
        <main className="flex-grow">
          <Routes>
            {/* Page principale */}
            <Route path="/" element={
              <>
                <HeroSection />
                <Product />
                <Promotions />
              </>
            } />

            {/* Page de contact */}
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/A-propos" element={<AboutPage />} />
            <Route path="/category/:category" element={<CategoryPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
