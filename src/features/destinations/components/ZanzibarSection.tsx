'use client';

interface ZanzibarSectionProps {
  onExploreTours: () => void;
}

export default function ZanzibarSection({ onExploreTours }: ZanzibarSectionProps) {
  return (
    <section id="zanzibar-section" className="py-20 bg-gradient-to-br from-blue-50 to-cyan-50">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="animate-fade-in">
            <div className="mb-4">
              <span className="bg-blue-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
                🏝️ Island Paradise
              </span>
            </div>
            <h2 className="text-5xl font-bold text-gray-800 mb-6">
              Zanzibar Archipelago
            </h2>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Relax on pristine white-sand beaches, explore historic Stone Town, and immerse 
              yourself in the rich Swahili culture. Zanzibar offers the perfect blend of 
              beach relaxation, cultural exploration, and aquatic adventures in the Indian Ocean.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="bg-white p-6 rounded-2xl shadow-lg border border-blue-100">
                <h4 className="font-bold text-gray-800 mb-3 text-lg">Attractions</h4>
                <ul className="text-gray-600 space-y-2">
                  <li className="flex items-center">🏖️ Pristine beaches</li>
                  <li className="flex items-center">🏛️ Stone Town UNESCO site</li>
                  <li className="flex items-center">🌿 Spice plantations</li>
                  <li className="flex items-center">🐠 Coral reefs</li>
                </ul>
              </div>
              <div className="bg-white p-6 rounded-2xl shadow-lg border border-blue-100">
                <h4 className="font-bold text-gray-800 mb-3 text-lg">Activities</h4>
                <ul className="text-gray-600 space-y-2">
                  <li className="flex items-center">🤿 Snorkeling & diving</li>
                  <li className="flex items-center">🐬 Dolphin tours</li>
                  <li className="flex items-center">👃 Spice farm visits</li>
                  <li className="flex items-center">⛵ Sunset dhow cruises</li>
                </ul>
              </div>
            </div>
            <button 
              onClick={onExploreTours}
              className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-8 py-4 rounded-2xl font-semibold hover:from-blue-700 hover:to-cyan-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 text-lg"
            >
              🏝️ Explore Zanzibar Packages
            </button>
          </div>

          {/* Visual */}
          <div className="relative animate-float">
            <div className="bg-gradient-to-br from-blue-400 to-teal-600 h-96 rounded-3xl flex items-center justify-center text-white shadow-2xl">
              <div className="text-center">
                <div className="text-8xl mb-4">🏝️</div>
                <p className="text-2xl font-bold mb-2">Tropical Paradise</p>
                <p className="text-lg opacity-90">Spice Island Beauty</p>
              </div>
            </div>
            <div className="absolute -bottom-4 -right-4 bg-white p-4 rounded-2xl shadow-lg border border-blue-200">
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-600">25°C</div>
                <div className="text-sm text-gray-600">Average Temp</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}