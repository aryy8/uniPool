import React, { useState } from 'react';
import { Car, MapPin, Calendar, Clock, ChevronRight, Shield } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';

const BookRide: React.FC = () => {
  const navigate = useNavigate();
  const [pickup, setPickup] = useState('');
  const [dropoff, setDropoff] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, you would validate the form data here
    navigate('/ride-matching');
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-indigo-50 via-white to-indigo-50 pt-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white p-8 rounded-2xl shadow-xl">
          {/* Logo */}
          <div className="text-center mb-8">
            <Link to="/" className="inline-flex items-center gap-2 text-2xl font-bold text-gray-900">
              <Car className="w-8 h-8 text-[#4338CA]" />
              <span>uniPool</span>
            </Link>
          </div>

          <h2 className="text-3xl font-bold text-center text-gray-900 mb-2">
            Book Your Ride
          </h2>
          <p className="text-center text-gray-600 mb-8">
            Get to your destination safely and affordably
          </p>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="pickup" className="block text-sm font-medium text-gray-700 mb-1">
                  Pickup Location
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <MapPin className="h-5 w-5 text-gray-400" />
                  </div>
                  <input
                    type="text"
                    id="pickup"
                    value={pickup}
                    onChange={(e) => setPickup(e.target.value)}
                    className="appearance-none block w-full pl-10 px-4 py-3 border border-gray-300 rounded-xl placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#4338CA] focus:border-transparent transition-all"
                    placeholder="Enter pickup location"
                    required
                  />
                </div>
              </div>

              <div>
                <label htmlFor="dropoff" className="block text-sm font-medium text-gray-700 mb-1">
                  Drop-off Location
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <MapPin className="h-5 w-5 text-gray-400" />
                  </div>
                  <input
                    type="text"
                    id="dropoff"
                    value={dropoff}
                    onChange={(e) => setDropoff(e.target.value)}
                    className="appearance-none block w-full pl-10 px-4 py-3 border border-gray-300 rounded-xl placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#4338CA] focus:border-transparent transition-all"
                    placeholder="Enter drop-off location"
                    required
                  />
                </div>
              </div>

              <div>
                <label htmlFor="date" className="block text-sm font-medium text-gray-700 mb-1">
                  Date
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Calendar className="h-5 w-5 text-gray-400" />
                  </div>
                  <input
                    type="date"
                    id="date"
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                    className="appearance-none block w-full pl-10 px-4 py-3 border border-gray-300 rounded-xl placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#4338CA] focus:border-transparent transition-all"
                    required
                  />
                </div>
              </div>

              <div>
                <label htmlFor="time" className="block text-sm font-medium text-gray-700 mb-1">
                  Time
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Clock className="h-5 w-5 text-gray-400" />
                  </div>
                  <input
                    type="time"
                    id="time"
                    value={time}
                    onChange={(e) => setTime(e.target.value)}
                    className="appearance-none block w-full pl-10 px-4 py-3 border border-gray-300 rounded-xl placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#4338CA] focus:border-transparent transition-all"
                    required
                  />
                </div>
              </div>
            </div>

            <div className="pt-4">
              <button
                type="submit"
                className="w-full flex justify-center items-center py-3 px-4 border border-transparent rounded-xl shadow-sm text-sm font-medium text-white bg-[#4338CA] hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#4338CA] transition-all gap-2"
              >
                Book Now
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </form>

          {/* Trust indicators */}
          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="flex items-center gap-3 justify-center p-4 bg-indigo-50 rounded-xl">
              <Shield className="w-5 h-5 text-[#4338CA]" />
              <span className="text-sm text-gray-700">Verified Drivers</span>
            </div>
            <div className="flex items-center gap-3 justify-center p-4 bg-indigo-50 rounded-xl">
              <Clock className="w-5 h-5 text-[#4338CA]" />
              <span className="text-sm text-gray-700">24/7 Support</span>
            </div>
            <div className="flex items-center gap-3 justify-center p-4 bg-indigo-50 rounded-xl">
              <Shield className="w-5 h-5 text-[#4338CA]" />
              <span className="text-sm text-gray-700">Secure Payments</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookRide; 