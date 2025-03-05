import React, { useState } from 'react';
import { MapPin, Clock, Car, CreditCard, Wallet, IndianRupee, CheckCircle2, Tag } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';

const BookingConfirmation: React.FC = () => {
  const [selectedPayment, setSelectedPayment] = useState<string | null>(null);
  const [showSuccess, setShowSuccess] = useState(false);
  const [couponCode, setCouponCode] = useState('');
  const [appliedCoupon, setAppliedCoupon] = useState<string | null>(null);
  const [couponError, setCouponError] = useState('');
  const navigate = useNavigate();

  const handleApplyCoupon = () => {
    // Simulate coupon validation
    if (couponCode === 'STUDENT10') {
      setAppliedCoupon(couponCode);
      setCouponError('');
    } else {
      setCouponError('Invalid coupon code');
    }
  };

  const handleConfirmPayment = () => {
    setShowSuccess(true);
    setTimeout(() => {
      navigate('/');
    }, 2000);
  };

  // Calculate final price with discount
  const basePrice = 250;
  const discount = appliedCoupon ? basePrice * 0.1 : 0; // 10% discount
  const finalPrice = basePrice - discount;

  return (
    <div className="min-h-screen bg-gradient-to-b from-indigo-50 via-white to-indigo-50 pt-16">
      {/* Success Popup */}
      {showSuccess && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-8 rounded-2xl shadow-xl max-w-md w-full mx-4 transform transition-all">
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
                <CheckCircle2 className="w-8 h-8 text-green-500" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Booking Confirmed!</h3>
              <p className="text-gray-600 mb-6">
                Your ride has been successfully booked. You will receive a confirmation email shortly.
              </p>
              <div className="animate-pulse text-indigo-600">
                Redirecting to home page...
              </div>
            </div>
          </div>
        </div>
      )}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white p-8 rounded-2xl shadow-xl">
          {/* Header */}
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-2">
              Confirm Your Booking
            </h2>
            <p className="text-gray-600">
              Review your ride details and select payment method
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Map Section */}
            <div className="lg:col-span-2">
              <div className="bg-gray-100 rounded-xl overflow-hidden h-[400px] mb-4">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3558.895614416123!2d75.8045!3d26.9124!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396db4ea7d4c82fd%3A0x1234567890abcdef!2sJaipur%2C%20Rajasthan!5e0!3m2!1sen!2sin!4v1234567890!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>

              {/* Ride Details */}
              <div className="bg-indigo-50 p-6 rounded-xl">
                <h3 className="text-xl font-semibold mb-4">Ride Details</h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <MapPin className="w-5 h-5 text-indigo-600" />
                    <div>
                      <p className="text-sm text-gray-600">From</p>
                      <p className="font-medium">Block A, MUJ Campus</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <MapPin className="w-5 h-5 text-indigo-600" />
                    <div>
                      <p className="text-sm text-gray-600">To</p>
                      <p className="font-medium">Hawa Mahal, Jaipur</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Clock className="w-5 h-5 text-indigo-600" />
                    <div>
                      <p className="text-sm text-gray-600">Pickup Time</p>
                      <p className="font-medium">2:30 PM</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Car className="w-5 h-5 text-indigo-600" />
                    <div>
                      <p className="text-sm text-gray-600">Driver</p>
                      <p className="font-medium">Rahul Verma (Swift Dzire)</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Payment Section */}
            <div className="lg:col-span-1">
              <div className="bg-white p-6 rounded-xl border border-gray-200">
                <h3 className="text-xl font-semibold mb-4">Payment Options</h3>
                
                {/* Price Summary */}
                <div className="bg-indigo-50 p-4 rounded-lg mb-6">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-gray-600">Base Fare</span>
                    <span className="font-medium">₹200</span>
                  </div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-gray-600">Distance Fare</span>
                    <span className="font-medium">₹50</span>
                  </div>
                  {appliedCoupon && (
                    <div className="flex justify-between items-center mb-2 text-green-600">
                      <span>Discount (10%)</span>
                      <span>-₹{discount}</span>
                    </div>
                  )}
                  <div className="border-t border-gray-200 pt-2 mt-2">
                    <div className="flex justify-between items-center">
                      <span className="font-semibold">Total Amount</span>
                      <span className="font-bold text-indigo-600">₹{finalPrice}</span>
                    </div>
                  </div>
                </div>

                {/* Coupon Code Section */}
                <div className="mb-6">
                  <div className="flex items-center gap-2 mb-2">
                    <Tag className="w-5 h-5 text-indigo-600" />
                    <span className="text-sm font-medium text-gray-700">Have a coupon code?</span>
                  </div>
                  <div className="flex gap-2">
                    <input
                      type="text"
                      value={couponCode}
                      onChange={(e) => setCouponCode(e.target.value)}
                      placeholder="Enter coupon code"
                      className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                      disabled={!!appliedCoupon}
                    />
                    <button
                      onClick={handleApplyCoupon}
                      disabled={!couponCode || !!appliedCoupon}
                      className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                        !couponCode || !!appliedCoupon
                          ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                          : 'bg-indigo-600 text-white hover:bg-indigo-700'
                      }`}
                    >
                      {appliedCoupon ? 'Applied' : 'Apply'}
                    </button>
                  </div>
                  {couponError && (
                    <p className="text-red-500 text-sm mt-2">{couponError}</p>
                  )}
                  {appliedCoupon && (
                    <p className="text-green-600 text-sm mt-2">Coupon applied successfully!</p>
                  )}
                </div>

                {/* Payment Methods */}
                <div className="space-y-4">
                  <button
                    onClick={() => setSelectedPayment('upi')}
                    className={`w-full flex items-center gap-3 p-4 rounded-lg border-2 transition-all ${
                      selectedPayment === 'upi'
                        ? 'border-indigo-600 bg-indigo-50'
                        : 'border-gray-200 hover:border-indigo-200'
                    }`}
                  >
                    <Wallet className="w-6 h-6 text-indigo-600" />
                    <span className="font-medium">UPI Payment</span>
                  </button>

                  <button
                    onClick={() => setSelectedPayment('cash')}
                    className={`w-full flex items-center gap-3 p-4 rounded-lg border-2 transition-all ${
                      selectedPayment === 'cash'
                        ? 'border-indigo-600 bg-indigo-50'
                        : 'border-gray-200 hover:border-indigo-200'
                    }`}
                  >
                    <IndianRupee className="w-6 h-6 text-indigo-600" />
                    <span className="font-medium">Cash Payment</span>
                  </button>
                </div>

                {/* Action Buttons */}
                <div className="mt-8 space-y-4">
                  <button
                    disabled={!selectedPayment}
                    onClick={handleConfirmPayment}
                    className={`w-full py-3 px-4 rounded-xl text-white font-medium transition-all ${
                      selectedPayment
                        ? 'bg-indigo-600 hover:bg-indigo-700'
                        : 'bg-gray-300 cursor-not-allowed'
                    }`}
                  >
                    Confirm Payment
                  </button>
                  <Link
                    to="/ride-matching"
                    className="block w-full py-3 px-4 rounded-xl text-indigo-600 font-medium border-2 border-indigo-600 hover:bg-indigo-50 text-center transition-all"
                  >
                    Back to Ride Matching
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="py-6 text-center text-gray-600">
        <p className="flex items-center justify-center gap-2">
          Made with <span className="text-red-500">❤️</span> by Aryan
          <a 
            href="https://www.linkedin.com/in/aryy8" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-indigo-600 hover:text-indigo-700 ml-2"
          >
            LinkedIn
          </a>
        </p>
      </footer>
    </div>
  );
};

export default BookingConfirmation; 