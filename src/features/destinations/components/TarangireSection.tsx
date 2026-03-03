'use client';

interface TarangireSectionProps {
  onExploreTours: () => void;
}

export default function TarangireSection({ onExploreTours }: TarangireSectionProps) {
  return (
    <section id="tarangire-section" className="py-20 bg-gradient-to-br from-emerald-50 to-lime-50">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="animate-fade-in">
            <div className="mb-4">
              <span className="bg-emerald-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
                🐘 Elephant Paradise
              </span>
            </div>
            <h2 className="text-5xl font-bold text-gray-800 mb-6">
              Tarangire National Park
            </h2>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Discover Tanzania's hidden gem, famous for its massive elephant herds, ancient baobab trees, 
              and diverse birdlife. During dry season, Tarangire boasts the highest concentration of wildlife 
              outside the Serengeti ecosystem, offering intimate safari experiences away from the crowds.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="bg-white p-6 rounded-2xl shadow-lg border border-emerald-100">
                <h4 className="font-bold text-gray-800 mb-3 text-lg">Wildlife Wonders</h4>
                <ul className="text-gray-600 space-y-2">
                  <li className="flex items-center">🐘 3,000+ elephants</li>
                  <li className="flex items-center">🌳 Ancient baobab forests</li>
                  <li className="flex items-center">🦜 550+ bird species</li>
                  <li className="flex items-center">🦌 Rare kudu & oryx</li>
                </ul>
              </div>
              <div className="bg-white p-6 rounded-2xl shadow-lg border border-emerald-100">
                <h4 className="font-bold text-gray-800 mb-3 text-lg">Unique Features</h4>
                <ul className="text-gray-600 space-y-2">
                  <li className="flex items-center">💧 Tarangire River</li>
                  <li className="flex items-center">🌊 Silale Swamp</li>
                  <li className="flex items-center">👥 Less crowded</li>
                  <li className="flex items-center">📅 Year-round viewing</li>
                </ul>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <button 
                onClick={onExploreTours}
                className="bg-gradient-to-r from-emerald-600 to-emerald-700 text-white px-8 py-4 rounded-2xl font-semibold hover:from-emerald-700 hover:to-emerald-800 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 text-lg flex-1"
              >
                🐘 Tarangire Safaris
              </button>
              <button className="border-2 border-emerald-600 text-emerald-600 px-8 py-4 rounded-2xl font-semibold hover:bg-emerald-600 hover:text-white transition-all duration-300 transform hover:scale-105 text-lg flex-1">
                🦜 Bird Watching Tours
              </button>
            </div>
          </div>

          {/* Visual */}
          <div className="relative animate-float">
            <div className="bg-gradient-to-br from-emerald-500 to-yellow-600 h-96 rounded-3xl flex items-center justify-center text-white shadow-2xl">
              <div className="text-center">
                <div className="text-8xl mb-4">🐘</div>
                <p className="text-2xl font-bold mb-2">Elephant Paradise</p>
                <p className="text-lg opacity-90">Baobab Kingdom</p>
              </div>
            </div>
            <div className="absolute -bottom-4 -right-4 bg-white p-4 rounded-2xl shadow-lg border border-emerald-200">
              <div className="text-center">
                <div className="text-2xl font-bold text-emerald-600">3K+</div>
                <div className="text-sm text-gray-600">Elephants</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}