'use client';

interface KilimanjaroSectionProps {
  onExploreTours: () => void;
}

export default function KilimanjaroSection({ onExploreTours }: KilimanjaroSectionProps) {
  return (
    <section id="kilimanjaro-section" className="py-20 bg-gradient-to-br from-white to-orange-50">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="animate-fade-in">
            <div className="mb-4">
              <span className="bg-orange-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
                🏔️ Mountain Adventure
              </span>
            </div>
            <h2 className="text-5xl font-bold text-gray-800 mb-6">
              Mount Kilimanjaro
            </h2>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Conquer Africa's highest peak and experience one of the world's most iconic treks. 
              Standing at 5,895 meters, Kilimanjaro offers breathtaking views and a life-changing 
              adventure through five distinct ecological zones.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="bg-white p-6 rounded-2xl shadow-lg border border-orange-100">
                <h4 className="font-bold text-gray-800 mb-3 text-lg">Key Features</h4>
                <ul className="text-gray-600 space-y-2">
                  <li className="flex items-center">✅ 7-day Machame Route</li>
                  <li className="flex items-center">✅ Expert local guides</li>
                  <li className="flex items-center">✅ All equipment provided</li>
                  <li className="flex items-center">✅ Summit certificate</li>
                </ul>
              </div>
              <div className="bg-white p-6 rounded-2xl shadow-lg border border-orange-100">
                <h4 className="font-bold text-gray-800 mb-3 text-lg">Best Time</h4>
                <ul className="text-gray-600 space-y-2">
                  <li className="flex items-center">📅 January - March</li>
                  <li className="flex items-center">📅 June - October</li>
                  <li className="flex items-center">☀️ Dry seasons</li>
                  <li className="flex items-center">🌤️ Clear skies</li>
                </ul>
              </div>
            </div>
            <button 
              onClick={onExploreTours}
              className="bg-gradient-to-r from-orange-500 to-red-600 text-white px-8 py-4 rounded-2xl font-semibold hover:from-orange-600 hover:to-red-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 text-lg"
            >
              🏔️ Explore Kilimanjaro Tours
            </button>
          </div>

          {/* Visual */}
          <div className="relative animate-float">
            <div className="bg-gradient-to-br from-orange-400 to-red-600 h-96 rounded-3xl flex items-center justify-center text-white shadow-2xl">
              <div className="text-center">
                <div className="text-8xl mb-4">🏔️</div>
                <p className="text-2xl font-bold mb-2">5,895m Elevation</p>
                <p className="text-lg opacity-90">Africa's Highest Peak</p>
              </div>
            </div>
            <div className="absolute -bottom-4 -right-4 bg-white p-4 rounded-2xl shadow-lg border border-orange-200">
              <div className="text-center">
                <div className="text-2xl font-bold text-orange-600">7-9 Days</div>
                <div className="text-sm text-gray-600">Average Trek</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}