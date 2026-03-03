'use client';

interface SerengetiSectionProps {
  onExploreTours: () => void;
}

export default function SerengetiSection({ onExploreTours }: SerengetiSectionProps) {
  return (
    <section id="serengeti-section" className="py-20 bg-gradient-to-br from-green-50 to-yellow-50">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Visual */}
          <div className="relative order-2 lg:order-1 animate-fade-in">
            <div className="bg-gradient-to-br from-green-500 to-yellow-600 h-96 rounded-3xl flex items-center justify-center text-white shadow-2xl">
              <div className="text-center">
                <div className="text-8xl mb-4">🦁</div>
                <p className="text-2xl font-bold mb-2">Great Migration</p>
                <p className="text-lg opacity-90">World's Natural Wonder</p>
              </div>
            </div>
            <div className="absolute -bottom-4 -left-4 bg-white p-4 rounded-2xl shadow-lg border border-green-200">
              <div className="text-center">
                <div className="text-2xl font-bold text-green-600">1.5M+</div>
                <div className="text-sm text-gray-600">Wildebeest</div>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="order-1 lg:order-2 animate-fade-in">
            <div className="mb-4">
              <span className="bg-green-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
                🐾 Wildlife Safari
              </span>
            </div>
            <h2 className="text-5xl font-bold text-gray-800 mb-6">
              Serengeti National Park
            </h2>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Witness the spectacular Great Migration where over 1.5 million wildebeest and 
              hundreds of thousands of zebras and gazelles move in an annual pattern. 
              Experience unparalleled wildlife viewing in one of Africa's most famous parks.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="bg-white p-6 rounded-2xl shadow-lg border border-green-100">
                <h4 className="font-bold text-gray-800 mb-3 text-lg">Wildlife</h4>
                <ul className="text-gray-600 space-y-2">
                  <li className="flex items-center">🦁 Big Five present</li>
                  <li className="flex items-center">🐃 Great Migration</li>
                  <li className="flex items-center">🦅 500+ bird species</li>
                  <li className="flex items-center">🐆 Cheetah sightings</li>
                </ul>
              </div>
              <div className="bg-white p-6 rounded-2xl shadow-lg border border-green-100">
                <h4 className="font-bold text-gray-800 mb-3 text-lg">Experiences</h4>
                <ul className="text-gray-600 space-y-2">
                  <li className="flex items-center">🎈 Hot air balloon safaris</li>
                  <li className="flex items-center">⛺ Luxury tented camps</li>
                  <li className="flex items-center">📸 Photography tours</li>
                  <li className="flex items-center">👑 Cultural visits</li>
                </ul>
              </div>
            </div>
            <button 
              onClick={onExploreTours}
              className="bg-gradient-to-r from-green-600 to-green-700 text-white px-8 py-4 rounded-2xl font-semibold hover:from-green-700 hover:to-green-800 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 text-lg"
            >
              🦁 Discover Serengeti Safaris
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}