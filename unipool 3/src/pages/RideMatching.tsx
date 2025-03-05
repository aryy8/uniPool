import React, { useState, useEffect } from 'react';
import { Car, Users, Clock, MapPin, Star, Shield } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';

interface Driver {
  id: string;
  name: string;
  rating: number;
  totalRides: number;
  carModel: string;
  carNumber: string;
  estimatedArrival: string;
  price: number;
  verified: boolean;
}

interface Student {
  id: string;
  name: string;
  pickup: string;
  dropoff: string;
  time: string;
}

const RideMatching: React.FC = () => {
  const navigate = useNavigate();
  const [drivers, setDrivers] = useState<Driver[]>([
    {
      id: '1',
      name: 'Rahul Verma',
      rating: 4.8,
      totalRides: 156,
      carModel: 'Swift Dzire',
      carNumber: 'RJ-14-AB-1234',
      estimatedArrival: '5 min',
      price: 250,
      verified: true
    },
    {
      id: '2',
      name: 'Amit Kumar',
      rating: 4.9,
      totalRides: 89,
      carModel: 'Honda City',
      carNumber: 'RJ-14-CD-5678',
      estimatedArrival: '8 min',
      price: 300,
      verified: true
    }
  ]);

  const [students, setStudents] = useState<Student[]>([
    {
      id: '1',
      name: 'Priya Sharma',
      pickup: 'Block A',
      dropoff: 'Hawa Mahal',
      time: '2:30 PM'
    },
    {
      id: '2',
      name: 'Rohan Singh',
      pickup: 'Block B',
      dropoff: 'Sindhi Camp',
      time: '2:45 PM'
    }
  ]);

  const [selectedDriver, setSelectedDriver] = useState<string | null>(null);
  const [matchingStudents, setMatchingStudents] = useState<Student[]>([]);

  useEffect(() => {
    // Simulate API call to get matching students
    const fetchMatchingStudents = () => {
      // In a real app, this would be an API call
      setMatchingStudents(students);
    };

    fetchMatchingStudents();
  }, []);

  const handleConfirmBooking = () => {
    navigate('/booking-confirmation');
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-indigo-50 via-white to-indigo-50 pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Finding Your Perfect Ride</h1>
          <p className="text-xl text-gray-600">We're matching you with available drivers and students for the best carpooling experience.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Available Drivers Section */}
          <div className="lg:col-span-2">
            <h2 className="text-2xl font-semibold mb-6">Available Drivers</h2>
            <div className="space-y-4">
              {drivers.map((driver) => (
                <div
                  key={driver.id}
                  className={`bg-white p-6 rounded-xl shadow-lg border-2 transition-all ${
                    selectedDriver === driver.id ? 'border-indigo-500' : 'border-transparent'
                  }`}
                >
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center">
                        <Car className="w-6 h-6 text-indigo-600" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-lg">{driver.name}</h3>
                        <div className="flex items-center gap-2 text-sm text-gray-600">
                          <Star className="w-4 h-4 text-yellow-400" />
                          <span>{driver.rating}</span>
                          <span>•</span>
                          <span>{driver.totalRides} rides</span>
                        </div>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-2xl font-bold text-indigo-600">₹{driver.price}</p>
                      <p className="text-sm text-gray-600">per person</p>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4 mb-4">
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <Car className="w-4 h-4" />
                      <span>{driver.carModel}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <Clock className="w-4 h-4" />
                      <span>Arrives in {driver.estimatedArrival}</span>
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 text-sm text-green-600">
                      <Shield className="w-4 h-4" />
                      <span>Verified Driver</span>
                    </div>
                    <button
                      onClick={() => setSelectedDriver(driver.id)}
                      className={`px-6 py-2 rounded-full text-sm font-semibold transition-all ${
                        selectedDriver === driver.id
                          ? 'bg-indigo-600 text-white'
                          : 'bg-indigo-50 text-indigo-600 hover:bg-indigo-100'
                      }`}
                    >
                      {selectedDriver === driver.id ? 'Selected' : 'Select Driver'}
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Matching Students Section */}
          <div className="lg:col-span-1">
            <h2 className="text-2xl font-semibold mb-6">Available for Carpooling</h2>
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <div className="space-y-4">
                {matchingStudents.map((student) => (
                  <div key={student.id} className="flex items-start gap-4 p-4 bg-indigo-50 rounded-lg">
                    <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
                      <Users className="w-5 h-5 text-indigo-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold">{student.name}</h3>
                      <div className="flex items-center gap-2 text-sm text-gray-600 mt-1">
                        <MapPin className="w-4 h-4" />
                        <span>{student.pickup} → {student.dropoff}</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-gray-600 mt-1">
                        <Clock className="w-4 h-4" />
                        <span>{student.time}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="mt-12 flex justify-center gap-4">
          <Link
            to="/book-ride"
            className="px-8 py-3 bg-white text-indigo-600 rounded-full text-lg font-semibold border-2 border-indigo-600 hover:bg-indigo-50 transition-all"
          >
            Back
          </Link>
          <button
            disabled={!selectedDriver}
            onClick={handleConfirmBooking}
            className={`px-8 py-3 rounded-full text-lg font-semibold transition-all ${
              selectedDriver
                ? 'bg-indigo-600 text-white hover:bg-indigo-700'
                : 'bg-gray-200 text-gray-500 cursor-not-allowed'
            }`}
          >
            Confirm Booking
          </button>
        </div>
      </div>
    </div>
  );
};

export default RideMatching; 