'use client';

interface NgorongoroSectionProps {
  onExploreTours: () => void;
}

export default function NgorongoroSection({ onExploreTours }: NgorongoroSectionProps) {
  return (
    <section id="ngorongoro-section" className="py-20 bg-gradient-to-br from-amber-50 to-orange-50">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Visual */}
          <div className="relative order-2 lg:order-1 animate-fade-in">
            <div className="bg-gradient-to-br from-amber-500 to-orange-700 h-96 rounded-3xl flex items-center justify-center text-white shadow-2xl">
              <div className="text-center">
                <div className="text-8xl mb-4">🦏</div>
                <p className="text-2xl font-bold mb-2">World's Largest Caldera</p>
                <p className="text-lg opacity-90">UNESCO World Heritage</p>
              </div>
            </div>
            <div className="absolute -bottom-4 -left-4 bg-white p-4 rounded-2xl shadow-lg border border-amber-200">
              <div className="text-center">
                <div className="text-2xl font-bold text-amber-600">600m</div>
                <div className="text-sm text-gray-600">Crater Depth</div>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="order-1 lg:order-2 animate-fade-in">
            <div className="mb-4">
              <span className="bg-amber-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
                🏞️ Crater Safari
              </span>
            </div>
            <h2 className="text-5xl font-bold text-gray-800 mb-6">
              Ngorongoro Conservation Area
            </h2>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Descend into the world's largest intact volcanic caldera, often called "Africa's Garden of Eden." 
              This UNESCO World Heritage Site is home to over 25,000 large animals including the rare black rhino, 
              creating one of the most dense wildlife viewing experiences on the planet.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="bg-white p-6 rounded-2xl shadow-lg border border-amber-100">
                <h4 className="font-bold text-gray-800 mb-3 text-lg">Wildlife Highlights</h4>
                <ul className="text-gray-600 space-y-2">
                  <li className="flex items-center">🦁 Big Five sightings</li>
                  <li className="flex items-center">🦏 Endangered black rhino</li>
                  <li className="flex items-center">🦩 Flamingo colonies</li>
                  <li className="flex items-center">🐆 Large predator populations</li>
                </ul>
              </div>
              <div className="bg-white p-6 rounded-2xl shadow-lg border border-amber-100">
                <h4 className="font-bold text-gray-800 mb-3 text-lg">Unique Features</h4>
                <ul className="text-gray-600 space-y-2">
                  <li className="flex items-center">🏔️ 600m deep crater</li>
                  <li className="flex items-center">📏 260 sq km floor</li>
                  <li className="flex items-center">👑 Maasai cultural experiences</li>
                  <li className="flex items-center">🦴 Olduvai Gorge nearby</li>
                </ul>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <button 
                onClick={onExploreTours}
                className="bg-gradient-to-r from-amber-600 to-amber-700 text-white px-8 py-4 rounded-2xl font-semibold hover:from-amber-700 hover:to-amber-800 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 text-lg flex-1"
              >
                🦏 Ngorongoro Safaris
              </button>
              <button className="border-2 border-amber-600 text-amber-600 px-8 py-4 rounded-2xl font-semibold hover:bg-amber-600 hover:text-white transition-all duration-300 transform hover:scale-105 text-lg flex-1">
                📚 Learn About Conservation
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}