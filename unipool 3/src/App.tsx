import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { 
  Car, 
  Calendar, 
  Shield, 
  Users, 
  Coins, 
  DollarSign, 
  Map, 
  School,
  ChevronRight,
  Star,
  Clock,
  UserCheck,
  CheckCircle2,
  Building2,
  Coffee,
  ShoppingBag,
  BookOpen
} from 'lucide-react';
import StudentLogin from './pages/StudentLogin';
import BookRide from './pages/BookRide';
import BecomeDriver from './pages/BecomeDriver';
import RideMatching from './pages/RideMatching';
import BookingConfirmation from './pages/BookingConfirmation';

function FeatureCard({ icon: Icon, title, description }: { 
  icon: React.ElementType, 
  title: string, 
  description: string 
}) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className={`bg-white p-6 rounded-xl shadow-lg transition-all duration-300 ${
        isHovered ? 'transform -translate-y-2 shadow-2xl' : ''
      }`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className={`w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-4 transition-all duration-300 ${
        isHovered ? 'bg-indigo-200 scale-110' : ''
      }`}>
        <Icon className={`w-6 h-6 text-indigo-600 transition-transform duration-300 ${
          isHovered ? 'scale-110' : ''
        }`} />
      </div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}

function Testimonial({ name, role, quote, image }: {
  name: string;
  role: string;
  quote: string;
  image: string;
}) {
  return (
    <div className="bg-white p-6 rounded-xl shadow-lg">
      <div className="flex items-center gap-4 mb-4">
        <img src={image} alt={name} className="w-12 h-12 rounded-full object-cover" />
        <div>
          <h4 className="font-semibold text-lg">{name}</h4>
          <p className="text-gray-600 text-sm">{role}</p>
        </div>
      </div>
      <p className="text-gray-700 italic">&ldquo;{quote}&rdquo;</p>
    </div>
  );
}

function PopularDestination({ icon: Icon, title, time }: {
  icon: React.ElementType,
  title: string,
  time: string
}) {
  return (
    <div className="bg-white p-4 rounded-lg shadow-md flex items-center gap-4">
      <div className="w-10 h-10 bg-indigo-100 rounded-lg flex items-center justify-center">
        <Icon className="w-5 h-5 text-indigo-600" />
      </div>
      <div>
        <h4 className="font-semibold">{title}</h4>
        <p className="text-sm text-gray-600">{time} avg. ride</p>
      </div>
    </div>
  );
}

function App() {
  const [isScrolled, setIsScrolled] = useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-b from-indigo-50 via-white to-indigo-50">
        {/* Sticky Header */}
        <header className={`fixed w-full z-50 transition-all duration-300 ${
          isScrolled ? 'bg-white shadow-md py-4' : 'bg-transparent py-6'
        }`}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
            <Link to="/" className="flex items-center gap-2">
              <Car className="w-6 h-6 text-indigo-600" />
              <span className="font-bold text-xl">uniPool</span>
            </Link>
            <div className="flex items-center gap-4">
              <Link to="/become-driver" className="bg-indigo-600 text-white px-6 py-2 rounded-full text-sm font-semibold hover:bg-indigo-700 transition-colors">
                Become a Driver
              </Link>
            </div>
          </div>
        </header>

        <Routes>
          <Route path="/student-login" element={<StudentLogin />} />
          <Route path="/book-ride" element={<BookRide />} />
          <Route path="/become-driver" element={<BecomeDriver />} />
          <Route path="/ride-matching" element={<RideMatching />} />
          <Route path="/booking-confirmation" element={<BookingConfirmation />} />
          <Route path="/" element={
            <>
              {/* Hero Section */}
              <div className="relative pt-24">
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1541339907198-e08756dedf3f')] bg-cover bg-center opacity-10" />
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16 relative">
                  <div className="text-center">
                    <div className="inline-block animate-bounce mb-4">
                      <div className="bg-indigo-100 text-indigo-600 px-4 py-2 rounded-full text-sm font-semibold">
                        Exclusive for MUJ Students
                      </div>
                    </div>
                    <h1 className="text-6xl font-bold text-gray-900 mb-6">
                      Smart rides on the <span className="text-indigo-600 relative">
                        Go!
                        <span className="absolute -bottom-2 left-0 w-full h-2 bg-indigo-200 -z-10 transform -rotate-2"></span>
                      </span>
                    </h1>
                    <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
                      Connect with trusted local drivers for affordable rides from your hostel to popular student spots. Safe, convenient, and budget-friendly.
                    </p>
                    <div className="flex gap-4 justify-center">
                      <Link to="/book-ride" className="bg-indigo-600 text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-indigo-700 transition-all duration-300 hover:scale-105 inline-flex items-center gap-2">
                        Book a Ride <ChevronRight className="w-5 h-5" />
                      </Link>
                      <Link to="/student-login" className="bg-white text-indigo-600 px-8 py-3 rounded-full text-lg font-semibold border-2 border-indigo-600 hover:bg-indigo-50 transition-all duration-300 hover:scale-105">
                        Student Login
                      </Link>
                    </div>
                  </div>
                </div>
              </div>

              {/* Popular Destinations */}
              <div className="bg-white py-12 border-y border-gray-100">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                  <h2 className="text-2xl font-bold text-center mb-8">Popular Destinations</h2>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    <PopularDestination 
                      icon={Building2}
                      title="Hawa Mahal"
                      time="1 hr"
                    />
                    <PopularDestination 
                      icon={ShoppingBag}
                      title="Sindhi Camp"
                      time="1.5 hr"
                    />
                    <PopularDestination 
                      icon={Coffee}
                      title="Hotel Highway King"
                      time="5 min"
                    />
                    <PopularDestination 
                      icon={Map}
                      title="Railway Station"
                      time="1 hr"
                    />
                  </div>
                </div>
              </div>

              {/* Trust Indicators */}
              <div className="bg-gradient-to-r from-indigo-600 to-indigo-800 text-white py-8">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                  <div className="flex justify-center items-center gap-12 flex-wrap">
                    <div className="flex items-center gap-2">
                      <UserCheck className="w-5 h-5" />
                      <span>Verified Local Drivers</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Shield className="w-5 h-5" />
                      <span>Background Checked</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Star className="w-5 h-5" />
                      <span>4.9/5 Student Rating</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Features Grid */}
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
                <h2 className="text-4xl font-bold text-center mb-4">Why Choose uniPool?</h2>
                <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
                  Safe, reliable, and affordable rides for MUJ students and trusted opportunities for local drivers.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  <FeatureCard 
                    icon={Clock}
                    title="Quick Pickups"
                    description="Get picked up from your hostel within minutes of booking."
                  />
                  <FeatureCard 
                    icon={Shield}
                    title="Safety First"
                    description="All drivers are locally verified and background checked."
                  />
                  <FeatureCard 
                    icon={Users}
                    title="Student Community"
                    description="Share rides with fellow MUJ students and save more."
                  />
                  <FeatureCard 
                    icon={Coins}
                    title="Student Discounts"
                    description="Special rates for frequent routes and group bookings."
                  />
                  <FeatureCard 
                    icon={DollarSign}
                    title="Fair Driver Pay"
                    description="Transparent pricing ensuring drivers earn fairly."
                  />
                  <FeatureCard 
                    icon={Map}
                    title="Popular Routes"
                    description="Regular rides to student hotspots and hangout places."
                  />
                </div>
              </div>

              {/* Testimonials */}
              <div className="bg-indigo-50 py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                  <h2 className="text-4xl font-bold text-center mb-4">What Our Community Says</h2>
                  <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
                    Hear from students and drivers who use uniPool daily.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <Testimonial
                      name="Priya Sharma"
                      role="MUJ Student"
                      quote="Perfect for late-night concerts returns! The drivers are always punctual and super friendly."
                      image="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=300&h=300&q=80"
                    />
                    <Testimonial
                      name="Rahul Verma"
                      role="Local Driver"
                      quote="Great platform to connect with students. The app is easy to use and payments are always on time."
                      image="https://images.unsplash.com/photo-1618886487325-f665032b6352?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=300&h=300&q=80"
                    />
                    <Testimonial
                      name="Anjali Patel"
                      role="MUJ Student"
                      quote="Saved so much on transportation costs! The student discounts are really helpful."
                      image="https://images.unsplash.com/photo-1611042553365-9b101441c135?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=300&h=300&q=80"
                    />
                  </div>
                </div>
              </div>

              {/* CTA Section */}
              <div className="bg-[#4338CA] text-white py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                  <h2 className="text-5xl font-bold mb-4">Ready for Smarter Travel?</h2>
                  <p className="text-xl mb-8">
                    Join your fellow MUJ students in making travel easier, safer, and more affordable.
                  </p>
                  <Link to="/student-login" className="inline-block bg-white text-[#4338CA] px-8 py-3 rounded-full text-lg font-semibold hover:bg-opacity-90 transition-all duration-300 mb-12">
                    Sign Up Now
                  </Link>
                  <div className="flex items-center justify-center gap-12">
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-5 h-5" />
                      <span>Student Verified</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-5 h-5" />
                      <span>Local Drivers</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-5 h-5" />
                      <span>24/7 Support</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Footer */}
              <footer className="bg-[#0F172A] text-gray-300 py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                  <div className="grid grid-cols-4 gap-8 mb-12">
                    <div>
                      <h4 className="font-semibold text-white mb-4">For Students</h4>
                      <ul className="space-y-2">
                        <li><Link to="/book-ride" className="hover:text-white transition-colors">Book a Ride</Link></li>
                        <li><Link to="/safety" className="hover:text-white transition-colors">Safety</Link></li>
                        <li><Link to="/discounts" className="hover:text-white transition-colors">Student Discounts</Link></li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-white mb-4">For Drivers</h4>
                      <ul className="space-y-2">
                        <li><Link to="/become-driver" className="hover:text-white transition-colors">Join as Driver</Link></li>
                        <li><Link to="/earnings" className="hover:text-white transition-colors">Earnings</Link></li>
                        <li><Link to="/requirements" className="hover:text-white transition-colors">Requirements</Link></li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-white mb-4">Support</h4>
                      <ul className="space-y-2">
                        <li><Link to="/help" className="hover:text-white transition-colors">Help Center</Link></li>
                        <li><Link to="/contact" className="hover:text-white transition-colors">Contact</Link></li>
                        <li><Link to="/safety-guidelines" className="hover:text-white transition-colors">Safety Guidelines</Link></li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-white mb-4">Legal</h4>
                      <ul className="space-y-2">
                        <li><Link to="/terms" className="hover:text-white transition-colors">Terms</Link></li>
                        <li><Link to="/privacy" className="hover:text-white transition-colors">Privacy</Link></li>
                        <li><Link to="/driver-agreement" className="hover:text-white transition-colors">Driver Agreement</Link></li>
                      </ul>
                    </div>
                  </div>
                  <div className="text-center space-y-4">
                    <p className="text-gray-400">© 2025 uniPool. Exclusive ride-sharing platform for MUJ students.</p>
                    <p className="flex items-center justify-center gap-2 text-gray-400">
                      Made with <span className="text-red-500">❤️</span> by Aryan
                      <a 
                        href="https://www.linkedin.com/in/aryy8" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-indigo-400 hover:text-indigo-300 ml-2"
                      >
                        LinkedIn
                      </a>
                    </p>
                  </div>
                </div>
              </footer>
            </>
          } />
        </Routes>
      </div>
    </Router>
  );
}

export default App;