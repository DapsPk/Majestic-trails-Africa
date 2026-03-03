'use client';

import { useState } from 'react';
import { calculateSuccessRate, getSuccessMessage, SuccessFactors, getRouteInfo } from '../utils/calculateSuccess';
import Button from '@/components/ui/Button';
import Card from '@/components/ui/Card';

export default function SuccessCalculator() {
  const [factors, setFactors] = useState<SuccessFactors>({
    fitnessLevel: 3,
    preparation: 3,
    experience: 3,
    route: 'machame',
    season: 'dry',
    duration: '7-8'
  });
  const [successRate, setSuccessRate] = useState<number | null>(null);
  const [isCalculating, setIsCalculating] = useState(false);

  const handleCalculate = () => {
    setIsCalculating(true);
    // Simulate calculation delay for better UX
    setTimeout(() => {
      const rate = calculateSuccessRate(factors);
      setSuccessRate(rate);
      setIsCalculating(false);
    }, 800);
  };

  const handleFactorChange = (key: keyof SuccessFactors, value: number | string) => {
    setFactors(prev => ({ ...prev, [key]: value }));
    // Reset success rate when factors change
    setSuccessRate(null);
  };

  const getRatingLabel = (value: number, labels: string[]) => {
    return labels[value - 1] || labels[2];
  };

  const resetCalculator = () => {
    setFactors({
      fitnessLevel: 3,
      preparation: 3,
      experience: 3,
      route: 'machame',
      season: 'dry',
      duration: '7-8'
    });
    setSuccessRate(null);
  };

  return (
    <div className="w-full">
      <div className="text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
          Kilimanjaro Success Calculator
        </h2>
        <p className="text-xl text-gray-300 max-w-2xl mx-auto">
          Estimate your chances of successfully summiting Mount Kilimanjaro based on your preparation, experience, and chosen route.
        </p>
      </div>

      <div className="max-w-6xl mx-auto">
        <Card className="bg-gray-800 border-gray-700 dark:bg-gray-800 dark:border-gray-700">
          <div className="p-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
              {/* Left Column - Personal Factors */}
              <div className="space-y-8">
                <div className="text-center mb-6">
                  <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-red-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">💪</span>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">Personal Factors</h3>
                  <p className="text-gray-400">Your physical and mental preparation</p>
                </div>

                {/* Fitness Level */}
                <div className="bg-gray-700/50 p-6 rounded-2xl">
                  <label className="block text-lg font-semibold text-white mb-4">
                    Fitness Level: <span className="text-orange-400">{getRatingLabel(factors.fitnessLevel, ['Beginner', 'Fair', 'Good', 'Very Good', 'Excellent'])}</span>
                  </label>
                  <input
                    type="range"
                    min="1"
                    max="5"
                    value={factors.fitnessLevel}
                    onChange={(e) => handleFactorChange('fitnessLevel', parseInt(e.target.value))}
                    className="w-full h-3 bg-gray-600 rounded-lg appearance-none cursor-pointer slider [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:h-5 [&::-webkit-slider-thumb]:w-5 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-gradient-to-r [&::-webkit-slider-thumb]:from-orange-500 [&::-webkit-slider-thumb]:to-red-600"
                  />
                  <div className="flex justify-between text-sm text-gray-400 mt-3">
                    <span className="text-center">
                      <div className="text-xs">🚶‍♂️</div>
                      <div>Beginner</div>
                    </span>
                    <span className="text-center">
                      <div className="text-xs">🏃‍♂️</div>
                      <div>Excellent</div>
                    </span>
                  </div>
                </div>

                {/* Preparation */}
                <div className="bg-gray-700/50 p-6 rounded-2xl">
                  <label className="block text-lg font-semibold text-white mb-4">
                    Preparation: <span className="text-orange-400">{getRatingLabel(factors.preparation, ['Minimal', 'Basic', 'Moderate', 'Good', 'Extensive'])}</span>
                  </label>
                  <input
                    type="range"
                    min="1"
                    max="5"
                    value={factors.preparation}
                    onChange={(e) => handleFactorChange('preparation', parseInt(e.target.value))}
                    className="w-full h-3 bg-gray-600 rounded-lg appearance-none cursor-pointer slider [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:h-5 [&::-webkit-slider-thumb]:w-5 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-gradient-to-r [&::-webkit-slider-thumb]:from-orange-500 [&::-webkit-slider-thumb]:to-red-600"
                  />
                  <div className="flex justify-between text-sm text-gray-400 mt-3">
                    <span className="text-center">
                      <div className="text-xs">📚</div>
                      <div>Minimal</div>
                    </span>
                    <span className="text-center">
                      <div className="text-xs">🎯</div>
                      <div>Extensive</div>
                    </span>
                  </div>
                </div>

                {/* Experience */}
                <div className="bg-gray-700/50 p-6 rounded-2xl">
                  <label className="block text-lg font-semibold text-white mb-4">
                    High-Altitude Experience: <span className="text-orange-400">{getRatingLabel(factors.experience, ['None', 'Little', 'Moderate', 'Experienced', 'Very Experienced'])}</span>
                  </label>
                  <input
                    type="range"
                    min="1"
                    max="5"
                    value={factors.experience}
                    onChange={(e) => handleFactorChange('experience', parseInt(e.target.value))}
                    className="w-full h-3 bg-gray-600 rounded-lg appearance-none cursor-pointer slider [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:h-5 [&::-webkit-slider-thumb]:w-5 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-gradient-to-r [&::-webkit-slider-thumb]:from-orange-500 [&::-webkit-slider-thumb]:to-red-600"
                  />
                  <div className="flex justify-between text-sm text-gray-400 mt-3">
                    <span className="text-center">
                      <div className="text-xs">🆕</div>
                      <div>None</div>
                    </span>
                    <span className="text-center">
                      <div className="text-xs">🏔️</div>
                      <div>Very Exp.</div>
                    </span>
                  </div>
                </div>
              </div>

              {/* Right Column - Route & External Factors */}
              <div className="space-y-8">
                <div className="text-center mb-6">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">🗺️</span>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">Route & Conditions</h3>
                  <p className="text-gray-400">Your chosen route and climbing conditions</p>
                </div>

                {/* Route Selection */}
                <div className="bg-gray-700/50 p-6 rounded-2xl">
                  <label className="block text-lg font-semibold text-white mb-4">
                    Preferred Route
                  </label>
                  <select
                    value={factors.route}
                    onChange={(e) => handleFactorChange('route', e.target.value)}
                    className="w-full px-4 py-3 bg-gray-600 border border-gray-500 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-orange-500 transition-colors"
                  >
                    <option value="marangu">Marangu Route - "Coca-Cola Route"</option>
                    <option value="rongai">Rongai Route - "Northern Route"</option>
                    <option value="machame">Machame Route - "Whiskey Route"</option>
                    <option value="lemosho">Lemosho Route - "Scenic Route"</option>
                    <option value="northern-circuit">Northern Circuit - "360° Route"</option>
                    <option value="umbwe">Umbwe Route - "Challenge Route"</option>
                  </select>
                  <div className="mt-3 p-3 bg-gray-600/50 rounded-lg">
                    <div className="flex justify-between text-sm text-white mb-1">
                      <span>Difficulty:</span>
                      <span className="font-semibold">{getRouteInfo(factors.route).difficulty}</span>
                    </div>
                    <div className="flex justify-between text-sm text-white mb-1">
                      <span>Typical Success:</span>
                      <span className="font-semibold text-green-400">{getRouteInfo(factors.route).success}</span>
                    </div>
                    <div className="text-xs text-gray-400 mt-2">
                      {getRouteInfo(factors.route).description}
                    </div>
                  </div>
                </div>

                {/* Season Selection */}
                <div className="bg-gray-700/50 p-6 rounded-2xl">
                  <label className="block text-lg font-semibold text-white mb-4">
                    Climbing Season
                  </label>
                  <select
                    value={factors.season}
                    onChange={(e) => handleFactorChange('season', e.target.value)}
                    className="w-full px-4 py-3 bg-gray-600 border border-gray-500 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-orange-500 transition-colors"
                  >
                    <option value="dry">Dry Season (Jan-Mar, Jun-Oct) - Best Conditions</option>
                    <option value="shoulder">Shoulder Season (Nov, Dec) - Good Conditions</option>
                    <option value="wet">Wet Season (Apr-May) - Challenging Conditions</option>
                  </select>
                  <div className="mt-3 text-sm text-gray-400">
                    {factors.season === 'dry' && '☀️ Clear skies, best climbing conditions'}
                    {factors.season === 'shoulder' && '⛅ Mixed weather, fewer crowds'}
                    {factors.season === 'wet' && '🌧️ Rainy, challenging but possible'}
                  </div>
                </div>

                {/* Duration Selection */}
                <div className="bg-gray-700/50 p-6 rounded-2xl">
                  <label className="block text-lg font-semibold text-white mb-4">
                    Trip Duration
                  </label>
                  <select
                    value={factors.duration}
                    onChange={(e) => handleFactorChange('duration', e.target.value)}
                    className="w-full px-4 py-3 bg-gray-600 border border-gray-500 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-orange-500 transition-colors"
                  >
                    <option value="5-6">5-6 Days (Fast & Challenging)</option>
                    <option value="7-8">7-8 Days (Recommended)</option>
                    <option value="9+">9+ Days (Best Acclimatization)</option>
                  </select>
                  <div className="mt-3 text-sm text-gray-400">
                    {factors.duration === '5-6' && '⚡ Faster ascent, higher altitude risk'}
                    {factors.duration === '7-8' && '✅ Optimal balance of speed and safety'}
                    {factors.duration === '9+' && '🎯 Best acclimatization, highest success'}
                  </div>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex gap-4 mb-8">
              <Button
                onClick={handleCalculate}
                size="lg"
                disabled={isCalculating}
                className="flex-1 bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-700 hover:to-red-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 transform hover:scale-105"
              >
                {isCalculating ? (
                  <div className="flex items-center justify-center">
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
                    Calculating...
                  </div>
                ) : (
                  '🎯 Calculate My Success Rate'
                )}
              </Button>
              <Button
                onClick={resetCalculator}
                variant="outline"
                size="lg"
                className="border-gray-500 text-gray-300 hover:bg-gray-700 hover:text-white transition-all duration-300"
              >
                🔄 Reset
              </Button>
            </div>

            {/* Results */}
            {successRate !== null && (
              <div className="mt-8 p-8 bg-gradient-to-r from-gray-700 to-gray-800 rounded-2xl border border-gray-600 animate-fade-in">
                <div className="text-center">
                  <div className="text-5xl font-bold text-white mb-4">
                    {successRate}% Success Rate
                  </div>
                  
                  {/* Animated Progress Bar */}
                  <div className="w-full bg-gray-600 rounded-full h-6 mb-6 overflow-hidden">
                    <div 
                      className="h-6 rounded-full bg-gradient-to-r from-green-400 via-yellow-400 to-red-400 transition-all duration-1000 ease-out"
                      style={{ width: `${successRate}%` }}
                    ></div>
                  </div>
                  
                  {/* Success Message */}
                  <p className="text-xl text-gray-200 mb-6">
                    {getSuccessMessage(successRate)}
                  </p>

                  {/* Detailed Recommendations */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
                    {successRate >= 80 && (
                      <div className="bg-green-500/20 p-4 rounded-lg border border-green-500/30">
                        <div className="text-green-400 text-2xl mb-2">🎉</div>
                        <h4 className="font-semibold text-green-400 mb-2">Excellent!</h4>
                        <p className="text-sm text-green-300">You're well-prepared for this challenge</p>
                      </div>
                    )}
                    {successRate >= 60 && successRate < 80 && (
                      <div className="bg-yellow-500/20 p-4 rounded-lg border border-yellow-500/30">
                        <div className="text-yellow-400 text-2xl mb-2">💪</div>
                        <h4 className="font-semibold text-yellow-400 mb-2">Good Chance</h4>
                        <p className="text-sm text-yellow-300">Focus on fitness and preparation</p>
                      </div>
                    )}
                    {successRate < 60 && (
                      <div className="bg-red-500/20 p-4 rounded-lg border border-red-500/30">
                        <div className="text-red-400 text-2xl mb-2">📚</div>
                        <h4 className="font-semibold text-red-400 mb-2">Needs Work</h4>
                        <p className="text-sm text-red-300">Consider guided support and training</p>
                      </div>
                    )}

                    {/* Improvement Tips */}
                    <div className="bg-blue-500/20 p-4 rounded-lg border border-blue-500/30">
                      <div className="text-blue-400 text-2xl mb-2">💡</div>
                      <h4 className="font-semibold text-blue-400 mb-2">Improvement Tip</h4>
                      <p className="text-sm text-blue-300">
                        {successRate < 70 ? 'Consider a longer itinerary for better acclimatization' : 'Maintain your current preparation level'}
                      </p>
                    </div>

                    {/* Next Steps */}
                    <div className="bg-purple-500/20 p-4 rounded-lg border border-purple-500/30">
                      <div className="text-purple-400 text-2xl mb-2">🚀</div>
                      <h4 className="font-semibold text-purple-400 mb-2">Next Steps</h4>
                      <p className="text-sm text-purple-300">
                        {successRate >= 70 ? 'Ready to book your adventure!' : 'Focus on cardio training and altitude preparation'}
                      </p>
                    </div>
                  </div>

                  {/* CTA Button */}
                  <div className="mt-8">
                    <Button
                      size="lg"
                      className="bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 px-8"
                      onClick={() => document.getElementById('routes-section')?.scrollIntoView({ behavior: 'smooth' })}
                    >
                      🏔️ Explore Climbing Packages
                    </Button>
                  </div>
                </div>
              </div>
            )}

            {/* Tips Section */}
            {!successRate && (
              <div className="mt-8 p-6 bg-gray-700/50 rounded-2xl border border-gray-600">
                <h4 className="text-lg font-semibold text-white mb-4 flex items-center">
                  <span className="text-yellow-400 mr-2">💡</span>
                  Tips for Higher Success
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-gray-300">
                  <div className="flex items-start space-x-3">
                    <span className="text-green-400 text-lg">✓</span>
                    <span>Choose longer itineraries (7+ days) for better acclimatization</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <span className="text-green-400 text-lg">✓</span>
                    <span>Focus on cardiovascular fitness and leg strength training</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <span className="text-green-400 text-lg">✓</span>
                    <span>Climb during dry seasons (Jan-Mar or Jun-Oct)</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <span className="text-green-400 text-lg">✓</span>
                    <span>Consider routes with better acclimatization profiles</span>
                  </div>
                </div>
              </div>
            )}
          </div>
        </Card>
      </div>
    </div>
  );
}