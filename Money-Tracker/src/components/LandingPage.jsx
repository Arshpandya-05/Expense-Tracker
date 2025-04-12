import React from "react";
import { Wallet, PieChart, Shield, Check, ChevronRight, ArrowRight, Moon, Sun, Menu, X } from 'lucide-react';

function LandingPage() {
  const [darkMode, setDarkMode] = React(true);
  const [mobileMenuOpen, setMobileMenuOpen] = React(false);

  // Toggle dark mode
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className={`min-h-screen ${darkMode ? 'dark bg-slate-900 text-white' : 'bg-gray-50 text-slate-900'}`}>
      {/* Header/Navigation */}
      <header className={`fixed w-full z-10 ${darkMode ? 'bg-slate-900/80' : 'bg-white/80'} backdrop-blur-md shadow-sm`}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            {/* Logo */}
            <div className="flex items-center gap-2">
              <Wallet size={28} className={darkMode ? 'text-teal-400' : 'text-teal-600'} />
              <span className="text-xl font-bold">ExpenseTracker</span>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-8">
              <a href="#features" className={`text-sm font-medium ${darkMode ? 'text-gray-300 hover:text-white' : 'text-gray-600 hover:text-black'}`}>Features</a>
              <a href="#how-it-works" className={`text-sm font-medium ${darkMode ? 'text-gray-300 hover:text-white' : 'text-gray-600 hover:text-black'}`}>How it Works</a>
              <a href="#pricing" className={`text-sm font-medium ${darkMode ? 'text-gray-300 hover:text-white' : 'text-gray-600 hover:text-black'}`}>Pricing</a>
              <a href="#testimonials" className={`text-sm font-medium ${darkMode ? 'text-gray-300 hover:text-white' : 'text-gray-600 hover:text-black'}`}>Testimonials</a>
            </nav>

            {/* CTA and Dark Mode Toggle */}
            <div className="hidden md:flex items-center gap-4">
              <button 
                onClick={toggleDarkMode}
                className={`p-2 rounded-full ${darkMode ? 'bg-slate-800 text-teal-400 hover:bg-slate-700' : 'bg-gray-200 text-teal-600 hover:bg-gray-300'} transition`}
              >
                {darkMode ? <Sun size={20} /> : <Moon size={20} />}
              </button>
              
              <a href="#login" className={`px-4 py-2 rounded-lg font-medium ${darkMode ? 'text-teal-400 hover:text-teal-300' : 'text-teal-600 hover:text-teal-700'}`}>
                Login
              </a>
              
              <a href="#signup" className={`px-4 py-2 rounded-lg font-medium ${darkMode ? 'bg-teal-500 hover:bg-teal-400 text-slate-900' : 'bg-teal-600 hover:bg-teal-700 text-white'} transition`}>
                Sign Up Free
              </a>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center gap-3">
              <button 
                onClick={toggleDarkMode}
                className={`p-2 rounded-full ${darkMode ? 'bg-slate-800 text-teal-400' : 'bg-gray-200 text-teal-600'}`}
              >
                {darkMode ? <Sun size={20} /> : <Moon size={20} />}
              </button>
              
              <button 
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className={`p-2 rounded-lg ${darkMode ? 'text-white' : 'text-slate-900'}`}
              >
                {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className={`fixed inset-0 z-[5] pt-16 ${darkMode ? 'bg-slate-900' : 'bg-white'}`}>
          <div className="container mx-auto px-4 py-6">
            <nav className="flex flex-col gap-4">
              <a 
                href="#features" 
                className={`text-lg font-medium p-2 ${darkMode ? 'text-white hover:bg-slate-800' : 'text-slate-900 hover:bg-gray-100'} rounded-lg`}
                onClick={() => setMobileMenuOpen(false)}
              >
                Features
              </a>
              <a 
                href="#how-it-works" 
                className={`text-lg font-medium p-2 ${darkMode ? 'text-white hover:bg-slate-800' : 'text-slate-900 hover:bg-gray-100'} rounded-lg`}
                onClick={() => setMobileMenuOpen(false)}
              >
                How it Works
              </a>
              <a 
                href="#pricing" 
                className={`text-lg font-medium p-2 ${darkMode ? 'text-white hover:bg-slate-800' : 'text-slate-900 hover:bg-gray-100'} rounded-lg`}
                onClick={() => setMobileMenuOpen(false)}
              >
                Pricing
              </a>
              <a 
                href="#testimonials" 
                className={`text-lg font-medium p-2 ${darkMode ? 'text-white hover:bg-slate-800' : 'text-slate-900 hover:bg-gray-100'} rounded-lg`}
                onClick={() => setMobileMenuOpen(false)}
              >
                Testimonials
              </a>
              
              <div className="border-t my-4 border-gray-200 dark:border-slate-700"></div>
              
              <a 
                href="#login" 
                className={`text-lg font-medium p-2 ${darkMode ? 'text-teal-400 hover:bg-slate-800' : 'text-teal-600 hover:bg-gray-100'} rounded-lg`}
                onClick={() => setMobileMenuOpen(false)}
              >
                Login
              </a>
              <a 
                href="#signup" 
                className={`text-lg font-medium p-3 text-center rounded-lg ${darkMode ? 'bg-teal-500 text-slate-900 hover:bg-teal-400' : 'bg-teal-600 text-white hover:bg-teal-700'}`}
                onClick={() => setMobileMenuOpen(false)}
              >
                Sign Up Free
              </a>
            </nav>
          </div>
        </div>
      )}

      {/* Hero Section */}
      <section className="pt-24 pb-20 md:pt-32 md:pb-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-center">
            <div className="md:w-1/2 mb-10 md:mb-0">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                Take Control of Your <span className={darkMode ? 'text-teal-400' : 'text-teal-600'}>Finances</span>
              </h1>
              <p className={`text-lg mb-8 max-w-lg ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                Track expenses, analyze spending patterns, and achieve your financial goals with our intuitive expense tracker application.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a 
                  href="#signup" 
                  className={`px-6 py-3 rounded-lg font-medium text-center ${darkMode ? 'bg-teal-500 hover:bg-teal-400 text-slate-900' : 'bg-teal-600 hover:bg-teal-700 text-white'} transition flex items-center justify-center gap-2`}
                >
                  Get Started Free
                  <ArrowRight size={18} />
                </a>
                <a 
                  href="#demo" 
                  className={`px-6 py-3 rounded-lg font-medium text-center ${darkMode ? 'bg-slate-800 hover:bg-slate-700 text-white' : 'bg-gray-200 hover:bg-gray-300 text-slate-900'} transition`}
                >
                  See Demo
                </a>
              </div>
            </div>
            
            <div className="md:w-1/2 relative">
              {/* Glass Effect Dashboard Preview */}
              <div className={`relative mx-auto max-w-md rounded-xl overflow-hidden shadow-2xl ${darkMode ? 'bg-slate-800/60' : 'bg-white/80'} backdrop-blur-md border ${darkMode ? 'border-slate-700' : 'border-gray-200'}`}>
                {/* Mock Dashboard Header */}
                <div className={`p-4 border-b ${darkMode ? 'border-slate-700' : 'border-gray-200'}`}>
                  <div className="flex justify-between items-center">
                    <div className="flex items-center gap-2">
                      <Wallet size={20} className={darkMode ? 'text-teal-400' : 'text-teal-600'} />
                      <span className="font-medium">Dashboard</span>
                    </div>
                    <div className={`w-8 h-8 rounded-full ${darkMode ? 'bg-slate-700' : 'bg-gray-200'}`}></div>
                  </div>
                </div>
                
                {/* Mock Dashboard Content */}
                <div className="p-6">
                  <div className="mb-6">
                    <h3 className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-500'} mb-2`}>
                      Total Balance
                    </h3>
                    <p className="text-2xl font-bold">$4,582.23</p>
                  </div>
                  
                  {/* Expense Chart Preview */}
                  <div className="mb-6">
                    <div className="flex justify-between items-center mb-2">
                      <h3 className="text-sm font-medium">Monthly Expenses</h3>
                      <span className={`text-xs ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>2025</span>
                    </div>
                    <div className="h-32 flex items-end justify-between gap-1">
                      {[35, 50, 30, 70, 45, 60].map((height, index) => (
                        <div key={index} className="flex flex-col items-center flex-1">
                          <div 
                            className={`w-full ${darkMode ? 'bg-teal-500/60' : 'bg-teal-500/80'} rounded-t-sm`} 
                            style={{ height: `${height}%` }}
                          ></div>
                          <p className={`text-xs mt-1 ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                            {['J', 'F', 'M', 'A', 'M', 'J'][index]}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  {/* Recent Transactions Preview */}
                  <div>
                    <h3 className="text-sm font-medium mb-3">Recent Transactions</h3>
                    {['Grocery Shopping', 'Netflix Subscription', 'Coffee Shop'].map((item, index) => (
                      <div 
                        key={index} 
                        className={`flex justify-between items-center p-2 mb-2 rounded-lg ${darkMode ? 'bg-slate-700/60' : 'bg-gray-100/80'}`}
                      >
                        <span className="text-sm">{item}</span>
                        <span className="text-sm font-medium text-red-500">-$24.99</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              
              {/* Decorative Elements */}
              <div className="absolute top-10 -right-10 w-40 h-40 bg-teal-500/20 rounded-full blur-3xl"></div>
              <div className="absolute -bottom-5 -left-10 w-40 h-40 bg-purple-500/20 rounded-full blur-3xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Powerful Features to <span className={darkMode ? 'text-teal-400' : 'text-teal-600'}>Simplify</span> Your Finances
            </h2>
            <p className={`text-lg max-w-2xl mx-auto ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
              Our expense tracker comes with everything you need to manage your money effectively.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className={`p-6 rounded-xl ${darkMode ? 'bg-slate-800/60' : 'bg-white/80'} backdrop-blur-md shadow-lg border ${darkMode ? 'border-slate-700' : 'border-gray-200'}`}>
              <div className={`w-12 h-12 rounded-lg flex items-center justify-center mb-4 ${darkMode ? 'bg-teal-500/20 text-teal-400' : 'bg-teal-100 text-teal-600'}`}>
                <Wallet size={24} />
              </div>
              <h3 className="text-xl font-bold mb-2">Expense Tracking</h3>
              <p className={darkMode ? 'text-gray-300' : 'text-gray-600'}>
                Easily track your daily expenses and income with our intuitive interface. Categorize transactions and add notes for better organization.
              </p>
            </div>
            
            {/* Feature 2 */}
            <div className={`p-6 rounded-xl ${darkMode ? 'bg-slate-800/60' : 'bg-white/80'} backdrop-blur-md shadow-lg border ${darkMode ? 'border-slate-700' : 'border-gray-200'}`}>
              <div className={`w-12 h-12 rounded-lg flex items-center justify-center mb-4 ${darkMode ? 'bg-purple-500/20 text-purple-400' : 'bg-purple-100 text-purple-600'}`}>
                <PieChart size={24} />
              </div>
              <h3 className="text-xl font-bold mb-2">Visual Analytics</h3>
              <p className={darkMode ? 'text-gray-300' : 'text-gray-600'}>
                Visualize your spending patterns with beautiful charts and graphs. Identify areas where you can save money and optimize your budget.
              </p>
            </div>
            
            {/* Feature 3 */}
            <div className={`p-6 rounded-xl ${darkMode ? 'bg-slate-800/60' : 'bg-white/80'} backdrop-blur-md shadow-lg border ${darkMode ? 'border-slate-700' : 'border-gray-200'}`}>
              <div className={`w-12 h-12 rounded-lg flex items-center justify-center mb-4 ${darkMode ? 'bg-blue-500/20 text-blue-400' : 'bg-blue-100 text-blue-600'}`}>
                <Shield size={24} />
              </div>
              <h3 className="text-xl font-bold mb-2">Secure & Private</h3>
              <p className={darkMode ? 'text-gray-300' : 'text-gray-600'}>
                Your financial data is encrypted and protected. We prioritize privacy and security, giving you peace of mind.
              </p>
            </div>
          </div>
          
          {/* Additional Features in List Format */}
          <div className={`mt-16 p-8 rounded-xl ${darkMode ? 'bg-slate-800/60' : 'bg-white/80'} backdrop-blur-md shadow-lg border ${darkMode ? 'border-slate-700' : 'border-gray-200'}`}>
            <h3 className="text-xl font-bold mb-6 text-center">Everything You Need</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                "User sign-up and secure login",
                "CRUD operations for managing expenses",
                "Visual dashboards and spending analysis",
                "Expense categorization and filtering",
                "Budget planning and goal setting",
                "Responsive, mobile-friendly interface",
                "Data export and backup options",
                "Dark mode & customizable themes"
              ].map((feature, index) => (
                <div key={index} className="flex items-center gap-3">
                  <div className={`flex-shrink-0 ${darkMode ? 'text-teal-400' : 'text-teal-600'}`}>
                    <Check size={20} />
                  </div>
                  <span>{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`rounded-2xl overflow-hidden ${darkMode ? 'bg-gradient-to-r from-teal-600 to-blue-600' : 'bg-gradient-to-r from-teal-500 to-blue-500'}`}>
            <div className="p-8 md:p-12">
              <div className="max-w-3xl mx-auto text-center">
                <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
                  Ready to Take Control of Your Finances?
                </h2>
                <p className="text-lg mb-8 text-white/90">
                  Join thousands of users who have transformed their financial habits with our expense tracker.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a 
                    href="#signup" 
                    className={`px-8 py-3 rounded-lg font-medium text-center ${darkMode ? 'bg-slate-900 hover:bg-slate-800' : 'bg-white hover:bg-gray-100'} text-teal-500 transition flex items-center justify-center gap-2`}
                  >
                    Start Tracking Now
                    <ChevronRight size={18} />
                  </a>
                  <a 
                    href="#learn-more" 
                    className="px-8 py-3 rounded-lg font-medium text-center bg-transparent border-2 border-white text-white hover:bg-white/10 transition"
                  >
                    Learn More
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className={`py-12 ${darkMode ? 'bg-slate-800/60' : 'bg-gray-100/80'} backdrop-blur-md`}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between mb-8">
            <div className="mb-8 md:mb-0">
              <div className="flex items-center gap-2 mb-4">
                <Wallet size={24} className={darkMode ? 'text-teal-400' : 'text-teal-600'} />
                <span className="text-xl font-bold">ExpenseTracker</span>
              </div>
              <p className={`max-w-xs ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                Take control of your finances with our intuitive expense tracking application.
              </p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
              <div>
                <h3 className="font-bold mb-4">Product</h3>
                <ul className={`space-y-2 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                  <li><a href="#features" className="hover:underline">Features</a></li>
                  <li><a href="#pricing" className="hover:underline">Pricing</a></li>
                  <li><a href="#testimonials" className="hover:underline">Testimonials</a></li>
                  <li><a href="#faq" className="hover:underline">FAQ</a></li>
                </ul>
              </div>
              
              <div>
                <h3 className="font-bold mb-4">Company</h3>
                <ul className={`space-y-2 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                  <li><a href="#about" className="hover:underline">About Us</a></li>
                  <li><a href="#blog" className="hover:underline">Blog</a></li>
                  <li><a href="#careers" className="hover:underline">Careers</a></li>
                  <li><a href="#contact" className="hover:underline">Contact</a></li>
                </ul>
              </div>
              
              <div>
                <h3 className="font-bold mb-4">Legal</h3>
                <ul className={`space-y-2 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                  <li><a href="#terms" className="hover:underline">Terms of Service</a></li>
                  <li><a href="#privacy" className="hover:underline">Privacy Policy</a></li>
                  <li><a href="#cookies" className="hover:underline">Cookie Policy</a></li>
                </ul>
              </div>
            </div>
          </div>
          
          <div className={`pt-8 mt-8 border-t ${darkMode ? 'border-slate-700' : 'border-gray-200'} flex flex-col md:flex-row justify-between items-center`}>
            <p className={darkMode ? 'text-gray-400' : 'text-gray-600'}>
              &copy; {new Date().getFullYear()} ExpenseTracker. All rights reserved.
            </p>
            <div className="flex gap-6 mt-4 md:mt-0">
              <a href="#twitter" className={darkMode ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-black'}>
                Twitter
              </a>
              <a href="#facebook" className={darkMode ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-black'}>
                Facebook
              </a>
              <a href="#instagram" className={darkMode ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-black'}>
                Instagram
              </a>
              <a href="#linkedin" className={darkMode ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-black'}>
                LinkedIn
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
