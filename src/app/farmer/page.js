"use client";

import React, { useState } from 'react';
import Link from 'next/link'; // Import Link
import { 
  LogOut, 
  Leaf, 
  ChevronRight, 
  Search,
  SlidersHorizontal,
  Heart,
  ShoppingCart,
  Globe
} from 'lucide-react';

const FarmerDashboard = () => {
  const [lang, setLang] = useState('en');

  const translations = {
    en: {
      langName: "English",
      greeting: "Hello, Farmer",
      subGreeting: "Welcome to Occamy Bioscience",
      search: "Search bio-solutions...",
      supplies: "Premium Bio-Solutions",
      seeAll: "Full Catalog",
      viewDetail: "Product Info",
      quickAdd: "In-Stock Now",
      exit: "Log Out",
      products: [
        {
          id: "bovi",
          name: "Occamy BOVI",
          category: "Bio-Stimulant",
          sticker: "High Yield",
          summary: "A powerful combination of organic acids and plant extracts that enhances soil microbial activity.",
          price: "₹1,450",
          image: "/bovi.png" // Ensure images are in /public folder
        },
        {
          id: "rakshak",
          name: "Occamy RAKSHAK",
          category: "Plant Protector",
          sticker: "Eco-Guard",
          summary: "Bio-rational plant protector that builds immunity against various fungal and bacterial stresses.",
          price: "₹950",
          image: "/rakshak.png"
        },
        {
          id: "jodi",
          name: "Occamy JODI",
          category: "Yield Enhancer",
          sticker: "Best Result",
          summary: "A synergistic dual-action formula for balanced vegetative growth and better flowering.",
          price: "₹1,850",
          image: "/jodi.png"
        }
      ]
    },
    hi: {
      langName: "हिन्दी",
      greeting: "नमस्ते, किसान",
      subGreeting: "Occamy Bioscience में स्वागत है",
      search: "खोजें...",
      supplies: "प्रीमियम उत्पाद",
      seeAll: "पूरा कैटलॉग",
      viewDetail: "विवरण",
      quickAdd: "स्टॉक में",
      exit: "बाहर निकलें",
      products: [
        { id: "bovi", name: "Occamy BOVI (बोवी)", category: "मिट्टी सुधारक", sticker: "अधिक पैदावार", summary: "मिट्टी की उर्वरता बढ़ाने के लिए जैविक एसिड।", price: "₹1,450", image: "/bovi.png" },
        { id: "rakshak", name: "Occamy RAKSHAK (रक्षक)", category: "पौधा रक्षक", sticker: "सुरक्षा कवच", summary: "फफूंद और बैक्टीरिया से सुरक्षा।", price: "₹950", image: "/rakshak.png" },
        { id: "jodi", name: "Occamy JODI (जोड़ी)", category: "पैदावार वर्धक", sticker: "बेहतरीन परिणाम", summary: "बेहतर फूलों और विकास के लिए जोड़ी।", price: "₹1,850", image: "/jodi.png" }
      ]
    }
  };

  const t = translations[lang] || translations['en'];

  return (
    <div className="min-h-screen bg-[#F9F9F9] font-sans pb-32">
      <nav className="px-6 pt-6 flex flex-col items-center gap-3">
        <div className="flex items-center gap-2 text-gray-500 mb-1">
          <Globe size={16} className="text-emerald-600" />
          <span className="text-[10px] font-black uppercase tracking-widest">Language / भाषा</span>
        </div>
        <div className="bg-white border border-gray-100 p-1.5 rounded-2xl flex w-full max-w-sm shadow-xl shadow-emerald-900/5">
          {Object.keys(translations).map((key) => (
            <button key={key} onClick={() => setLang(key)} className={`flex-1 py-3 rounded-xl text-sm font-bold transition-all ${lang === key ? 'bg-emerald-600 text-white shadow-lg' : 'text-gray-400'}`}>
              {translations[key].langName}
            </button>
          ))}
        </div>
      </nav>

      <header className="px-6 pt-8 pb-6 space-y-6">
        <h1 className="text-2xl font-semibold text-gray-900">{t.greeting}</h1>
        <div className="flex gap-3">
          <div className="relative flex-1">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
            <input type="text" placeholder={t.search} className="w-full bg-white py-4 pl-12 pr-4 rounded-2xl shadow-sm focus:outline-none text-sm" />
          </div>
        </div>
      </header>

      <section className="space-y-4">
        <div className="px-6 flex justify-between items-center">
          <h2 className="text-lg font-bold text-gray-900">{t.supplies}</h2>
          <span className="text-emerald-600 text-xs font-bold uppercase">{t.seeAll}</span>
        </div>

        <div className="flex overflow-x-auto gap-5 px-6 pb-8 no-scrollbar">
          {t.products.map((product) => (
            <Link key={product.id} href={`/products/${product.id}`} className="relative min-w-[300px] h-[420px] rounded-[2.5rem] overflow-hidden shadow-2xl active:scale-95 transition-transform">
              <img src={product.image} className="absolute inset-0 w-full h-full object-cover" alt={product.name} />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 space-y-3">
                <p className="text-emerald-400 text-[10px] font-bold uppercase tracking-[0.2em]">{product.category}</p>
                <h3 className="text-white text-2xl font-bold">{product.name}</h3>
                <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-2 flex items-center justify-between border border-white/20">
                  <span className="text-white text-xs font-bold pl-3">{t.viewDetail}</span>
                  <div className="bg-emerald-500 text-white p-2 rounded-xl"><ChevronRight size={18} /></div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>
      
      {/* Footer Nav omitted for brevity, same as your previous code */}
    </div>
  );
};

export default FarmerDashboard;