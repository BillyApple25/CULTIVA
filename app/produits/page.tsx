'use client';

import Header from '../components/Header';
import Footer from '../components/Footer';
import { useLanguage } from '../contexts/LanguageContext';

interface Product {
  id: number;
  name: string;
  varieties: {
    name: string;
    quantityPerHa: number;
    unitPrice: number;
  }[];
}

export default function Produits() {
  const { t } = useLanguage();

  const products: Product[] = [
    {
      id: 1,
      name: "Avocat",
      varieties: [
        { name: "Hass et Fuerte", quantityPerHa: 400, unitPrice: 2000 },
        { name: "Hickson, Both7, Anaheim, Tonnage, Taylor", quantityPerHa: 200, unitPrice: 1500 }
      ]
    },
    {
      id: 2,
      name: "Orange",
      varieties: [
        { name: "Pineapple", quantityPerHa: 400, unitPrice: 2000 },
        { name: "Valencia, Tangelo et Thomson", quantityPerHa: 400, unitPrice: 1500 }
      ]
    },
    {
      id: 3,
      name: "Citron",
      varieties: [
        { name: "Lime Mexicain et Lime Tahiti", quantityPerHa: 400, unitPrice: 1500 }
      ]
    },
    {
      id: 4,
      name: "Mandarine",
      varieties: [
        { name: "Clémentine et Satsuma", quantityPerHa: 400, unitPrice: 1500 }
      ]
    },
    {
      id: 5,
      name: "Pamplemousse",
      varieties: [
        { name: "Pomélo Rouge et Blanc", quantityPerHa: 400, unitPrice: 1500 }
      ]
    },
    {
      id: 6,
      name: "Bitter Cola",
      varieties: [
        { name: "Bitter Cola Greffé", quantityPerHa: 200, unitPrice: 2500 },
        { name: "Bitter Cola Non Greffé", quantityPerHa: 200, unitPrice: 2000 }
      ]
    },
    {
      id: 7,
      name: "Cocotier",
      varieties: [
        { name: "Nain", quantityPerHa: 200, unitPrice: 2500 },
        { name: "Géant de l'Ouest", quantityPerHa: 200, unitPrice: 2000 }
      ]
    },
    {
      id: 8,
      name: "Plantules Bananier Plantain",
      varieties: [
        { name: "Plantain", quantityPerHa: 2000, unitPrice: 70 }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-[#14230B] to-[#40200C]">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              {t('products.title')}
            </h1>
            <p className="text-xl text-[#D3FA53] max-w-3xl mx-auto leading-relaxed">
              {t('products.subtitle')}
            </p>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-[#14230B] mb-6">
              {t('products.list.title')}
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              {t('products.list.subtitle')}
            </p>
          </div>

          <div className="grid gap-8">
            {products.map((product) => (
              <div key={product.id} className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-all duration-300 border border-gray-100">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-[#D3FA53] rounded-full flex items-center justify-center mr-4">
                    <i className="ri-plant-line text-2xl text-[#14230B]"></i>
                  </div>
                  <h3 className="text-2xl font-bold text-[#14230B]">{product.name}</h3>
                </div>
                
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b-2 border-[#D3FA53]">
                        <th className="text-left py-3 px-4 font-semibold text-[#14230B]">
                          {t('products.table.variety')}
                        </th>
                        <th className="text-center py-3 px-4 font-semibold text-[#14230B]">
                          {t('products.table.quantity')}
                        </th>
                        <th className="text-right py-3 px-4 font-semibold text-[#14230B]">
                          {t('products.table.price')}
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {product.varieties.map((variety, index) => (
                        <tr key={index} className="border-b border-gray-100 hover:bg-gray-50 transition-colors">
                          <td className="py-4 px-4 text-gray-700 font-medium">
                            {variety.name}
                          </td>
                          <td className="py-4 px-4 text-center text-gray-600">
                            {variety.quantityPerHa.toLocaleString()} {t('products.table.perHa')}
                          </td>
                          <td className="py-4 px-4 text-right font-semibold text-[#14230B]">
                            {variety.unitPrice.toLocaleString()} FCFA
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            ))}
          </div>

          {/* Contact CTA */}
          <div className="text-center mt-16">
            <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-100">
              <h3 className="text-2xl font-bold text-[#14230B] mb-4">
                {t('products.cta.title')}
              </h3>
              <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
                {t('products.cta.subtitle')}
              </p>
              <a href="/rejoindre#contact">
                <button className="bg-[#D3FA53] text-[#14230B] px-8 py-4 rounded-full font-semibold text-lg hover:bg-opacity-90 transition-all transform hover:scale-105">
                  {t('products.cta.button')}
                </button>
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
} 