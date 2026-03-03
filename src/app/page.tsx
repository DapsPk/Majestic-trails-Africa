'use client';

import { useState } from 'react';
import Hero from '@/features/hero/components/Hero';
import BookingModal from '@/features/booking/components/BookingModal';
import { Tour } from '@/features/tours/types/tour.types';
import Link from 'next/link';
import Button from '@/components/ui/Button';

export default function Home() {
  const [selectedTour, setSelectedTour] = useState<Tour | null>(null);
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);

  const handleBookNow = (tour: Tour) => {
    setSelectedTour(tour);
    setIsBookingModalOpen(true);
  };

  const handleCloseBooking = () => {
    setIsBookingModalOpen(false);
    setSelectedTour(null);
  };

  const testimonials = [
    {
      id: 1,
      name: "Emily & Jack",
      location: "UK",
      text: "Majestic Trails made our honeymoon unforgettable. The attention to detail, the warmth of the guides, and the experiences we had in Serengeti felt like scenes from a dream. We left Tanzania with full hearts.",
      rating: 5
    },
    {
      id: 2,
      name: "Ahmed",
      location: "UAE",
      text: "Climbing Kilimanjaro was something I feared, but Majestic Trails believed in me. Their patience, motivation, and professionalism made the summit possible. I will never forget this journey.",
      rating: 5
    },
    {
      id: 3,
      name: "Katrin",
      location: "Germany",
      text: "What makes them different is how personal the experience is. It doesn't feel like a tour. It feels like you're traveling with friends who want you to see the real Tanzania.",
      rating: 5
    }
  ];

  const faqs = [
    {
      question: "What types of tours do you offer?",
      answer: "We offer wildlife safaris, Mount Kilimanjaro climbs, Zanzibar holiday packages, cultural tours, day trips, and customized private experiences."
    },
    {
      question: "Do you arrange airport pickups and full travel planning?",
      answer: "Yes. We provide airport transfers, accommodation planning, transportation, and all necessary arrangements so your trip is smooth and comfortable."
    },
    {
      question: "Is Tanzania safe for travelers?",
      answer: "Yes. Tanzania is one of the safest travel destinations in Africa. Our team ensures your safety and comfort throughout your journey."
    },
    {
      question: "What is the best time to travel?",
      answer: "Tanzania is beautiful all year, but the most popular wildlife seasons are June to October and December to February. For Kilimanjaro, January to March and June to October are ideal."
    },
    {
      question: "Can you customize tours based on budget and interests?",
      answer: "Absolutely. Every traveler is unique, so we personalize experiences to match your style, pace, and budget."
    }
  ];

  const reviews = [
    { id: 1, rating: 5, text: "Professional and friendly team. Tanzania felt like home." },
    { id: 2, rating: 5, text: "The safari exceeded every expectation. Truly breathtaking." },
    { id: 3, rating: 5, text: "From start to finish, Majestic Trails handled everything perfectly." },
    { id: 4, rating: 5, text: "Life-changing experience with the most knowledgeable guides." },
    { id: 5, rating: 5, text: "Worth every penny! Already planning our next trip with them." }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <Hero />
      
      {/* Company History Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-600 rounded-full mb-6">
              <span className="text-2xl text-white">🌍</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-8">
              Our Story
            </h2>
            <div className="prose prose-lg text-gray-600 text-left mx-auto">
              <p className="text-xl leading-relaxed mb-6">
                <strong>Majestic Trails</strong> was founded with a simple belief: travel should touch the soul. Born in the heart of Tanzania, our company began as a small dream fueled by a passion for sharing the magic of our land.
              </p>
              <p className="text-xl leading-relaxed mb-6">
                From the Serengeti's endless plains and the snow-capped crown of Mount Kilimanjaro to the turquoise shores of Zanzibar, we grew up surrounded by beauty that the world deserves to experience.
              </p>
              <p className="text-xl leading-relaxed mb-6">
                Our journey started with a single thought: to connect travelers with real, meaningful adventure. No rush, no superficial tours, just authentic moments that stay with you. We listened to our clients, we learned from local communities, and we built a team of guides rooted in cultural knowledge, kindness, and a love for nature.
              </p>
              <p className="text-xl leading-relaxed">
                Today, <strong>Majestic Trails</strong> proudly welcomes travelers from all corners of the world, offering carefully crafted tours that honor Tanzania's landscapes, wildlife, heritage, and people. But despite our growth, our heart remains the same: share experiences that feel personal, warm, and unforgettable.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What We Do / Mission Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
              What We Do
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Crafting unforgettable journeys through Tanzania's most spectacular landscapes
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Mission Content */}
            <div>
              <div className="bg-gradient-to-r from-green-500 to-emerald-600 text-white p-8 rounded-3xl shadow-2xl">
                <h3 className="text-3xl font-bold mb-6">Our Mission</h3>
                <ul className="space-y-4 text-lg">
                  <li className="flex items-center">
                    <span className="text-2xl mr-4">✨</span>
                    To create journeys that inspire
                  </li>
                  <li className="flex items-center">
                    <span className="text-2xl mr-4">🌿</span>
                    To share the genuine beauty of Tanzania responsibly
                  </li>
                  <li className="flex items-center">
                    <span className="text-2xl mr-4">🤝</span>
                    To connect travelers with nature, culture, and community
                  </li>
                  <li className="flex items-center">
                    <span className="text-2xl mr-4">🛡️</span>
                    To ensure every traveler feels safe, valued, and enriched
                  </li>
                </ul>
              </div>
            </div>

            {/* Services */}
            <div className="space-y-6">
              <div className="bg-gray-50 p-6 rounded-2xl border-l-4 border-blue-500">
                <h4 className="text-xl font-bold text-gray-800 mb-3">Wildlife Safaris</h4>
                <p className="text-gray-600">Witness the Great Migration and encounter the Big Five in their natural habitat with expert guides.</p>
              </div>
              <div className="bg-gray-50 p-6 rounded-2xl border-l-4 border-orange-500">
                <h4 className="text-xl font-bold text-gray-800 mb-3">Kilimanjaro Climbs</h4>
                <p className="text-gray-600">Conquer Africa's highest peak with our experienced mountain guides and comprehensive support.</p>
              </div>
              <div className="bg-gray-50 p-6 rounded-2xl border-l-4 border-cyan-500">
                <h4 className="text-xl font-bold text-gray-800 mb-3">Zanzibar Retreats</h4>
                <p className="text-gray-600">Relax on pristine beaches and explore the rich cultural heritage of the Spice Islands.</p>
              </div>
            </div>
          </div>

          <div className="text-center mt-12">
            <p className="text-2xl text-gray-700 italic max-w-3xl mx-auto">
              "We walk beside you every step of the adventure. This isn't just tourism. It's storytelling. It's connection. It's discovery."
            </p>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gradient-to-br from-orange-50 to-amber-100">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
              Traveler Stories
            </h2>
            <p className="text-xl text-gray-600">Hear from adventurers who've journeyed with us</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <div key={testimonial.id} className="bg-white p-8 rounded-3xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="flex text-yellow-400 mb-4">
                  {'★'.repeat(testimonial.rating)}
                </div>
                <p className="text-gray-600 italic mb-6 text-lg">"{testimonial.text}"</p>
                <div className="border-t pt-4">
                  <p className="font-semibold text-gray-800">{testimonial.name}</p>
                  <p className="text-gray-500 text-sm">{testimonial.location}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
              What Our Travelers Say
            </h2>
            <div className="flex justify-center items-center space-x-2">
              <div className="flex text-yellow-400 text-2xl">
                {'★'.repeat(5)}
              </div>
              <span className="text-xl text-gray-600 font-semibold">5.0 • 127+ Reviews</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {reviews.map((review) => (
              <div key={review.id} className="bg-gray-50 p-6 rounded-2xl border border-gray-200">
                <div className="flex text-yellow-400 mb-3">
                  {'★'.repeat(review.rating)}
                </div>
                <p className="text-gray-700">"{review.text}"</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gradient-to-br from-purple-50 to-indigo-100">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-600">Everything you need to know before your adventure</p>
          </div>

          <div className="max-w-4xl mx-auto space-y-6">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
                <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
                  <span className="w-8 h-8 bg-purple-500 text-white rounded-full flex items-center justify-center mr-4 text-sm">
                    Q
                  </span>
                  {faq.question}
                </h3>
                <p className="text-gray-600 text-lg pl-12">{faq.answer}</p>
              </div>
            ))}
          </div>

          {/* CTA Section */}
          <div className="text-center mt-16">
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-12 rounded-3xl shadow-2xl max-w-4xl mx-auto">
              <h3 className="text-3xl md:text-4xl font-bold mb-4">
                Ready for Your Adventure?
              </h3>
              <p className="text-xl mb-8 opacity-90">
                Join thousands of travelers who've experienced Tanzania's magic with us
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/safari">
                  <Button size="lg" variant="secondary">
                    Explore Safari Tours
                  </Button>
                </Link>
                <Link href="/kilimanjaro">
                  <Button size="lg">
                    Discover Kilimanjaro
                  </Button>
                </Link>
                <Link href="/zanzibar">
                  <Button size="lg" variant="outline">
                    Zanzibar Getaways
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Booking Modal */}
      <BookingModal 
        isOpen={isBookingModalOpen}
        onClose={handleCloseBooking}
        tour={selectedTour}
      />
    </div>
  );
}