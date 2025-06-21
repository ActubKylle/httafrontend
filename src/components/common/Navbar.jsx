import React from 'react';
import { Menu, X, Phone, Mail, MapPin, Clock, Facebook, Instagram, Youtube, ArrowRight } from 'lucide-react'; // Ensure all needed icons are imported

const Navbar = ({ isScrolled, isMenuOpen, toggleMenu, smoothScroll, getNavLinkClass }) => {
    return (
        <>
            {/* Top Information Bar */}
            <div className={`bg-green-800 text-green-100 text-sm py-2 px-6 lg:px-8 transition-all duration-300
                            ${isScrolled ? 'hidden' : 'block'} z-50 w-full`}> {/* Hide on scroll for cleaner sticky effect */}
                <div className="container mx-auto flex flex-col md:flex-row justify-between items-center space-y-2 md:space-y-0 md:space-x-4">
                    <div className="flex flex-wrap justify-center md:justify-start items-center gap-x-6 gap-y-2">
                        <a href="tel:+639171234567" className="flex items-center space-x-2 hover:text-white transition-colors duration-200">
                            <Phone size={16} className="text-green-300" />
                            <span>+63 917 123 4567</span>
                        </a>
                        <a href="mailto:info@httacademy.edu.ph" className="flex items-center space-x-2 hover:text-white transition-colors duration-200">
                            <Mail size={16} className="text-green-300" />
                            <span>info@httacademy.edu.ph</span>
                        </a>
                        <div className="flex items-center space-x-2">
                            <Clock size={16} className="text-green-300" />
                            <span>Mon - Fri: 9:00 AM - 5:00 PM</span>
                        </div>
                    </div>
                    <div className="flex items-center space-x-4">
                        <span className="hidden md:block">Follow us on:</span>
                        <a href="https://www.facebook.com/highlandstta" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors duration-200">
                            <Facebook size={20} />
                        </a>
                        {/* Add other social media icons if needed */}
                        {/* <a href="#" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors duration-200">
                            <Instagram size={20} />
                        </a>
                        <a href="#" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors duration-200">
                            <Youtube size={20} />
                        </a> */}
                    </div>
                </div>
            </div>

            {/* Main Navbar */}
            <nav className={`fixed ${isScrolled ? 'top-4' : 'top-[3.5rem]'} left-4 right-4 z-50 transition-all duration-500 ${
                isScrolled
                    ? 'bg-white/90 backdrop-blur-xl shadow-2xl border border-white/20'
                    : 'bg-white/70 backdrop-blur-lg shadow-lg'
            } rounded-2xl`}>
                {/* Increased height of the main navbar container */}
                <div className="container mx-auto px-6 lg:px-8 h-28 lg:h-32 flex items-center justify-between"> {/* Increased height further */}
                    {/* Enhanced Logo Section */}
                    <div className="flex items-center space-x-4 flex-shrink-0">
                        {/* Significantly increased logo container size */}
                        <div className="relative w-24 h-24 lg:w-28 lg:h-28 animate-pulse-logo"> {/* Larger logo */}
                            {/* Inner gradient border for depth */}
                            <div className="absolute inset-0 bg-gradient-to-br from-green-400 via-green-600 to-green-800 rounded-xl shadow-lg transform rotate-6"></div>
                            {/* Logo background with subtle glow effect */}
                            <div className="relative bg-gradient-to-br from-green-500 to-green-700 rounded-xl flex items-center justify-center w-full h-full shadow-lg transform hover:scale-105 transition-transform duration-300 overflow-hidden">
                                {/* Added a radial gradient for a subtle glow behind the logo image */}
                                <div className="absolute inset-0 bg-gradient-to-br from-green-400/30 to-transparent rounded-full animate-pulse-slow"></div>
                                <img
                                    src="https://scontent-sea1-1.xx.fbcdn.net/v/t1.6435-9/103440114_255080559249682_8395978773242303870_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeH8bHCsMO8F6RHT8ISmDAH_IfZmjKVZ9mYh9maMpVn2ZqXe0dQ0rj6wMS12GuC3s6E5-_i_Eodbts-J2pHQars6&_nc_ohc=Tkp9Wr_hCH8Q7kNvwGTuKt0&_nc_oc=AdnYu_B82t5hZc2IOlsDbIbsYA1IT6Ed3LjMQ0m0fgRNBEeUSJ9-Sm2zMdjTdZlYXL0&_nc_zt=23&_nc_ht=scontent-sea1-1.xx&_nc_gid=pAJUEUyUxyfnka5VmbdqXw&oh=00_AfMSmkUR-pF-pS1Yo68nN2m0m6J7d-wP4q9l2F-5qFWShQ&oe=687C5ACC"
                                    alt="Highlands Technical Training Academy Logo"
                                    className="w-20 h-20 lg:w-24 lg:h-24 object-contain relative z-10" // Adjusted image size
                                />
                            </div>
                        </div>
                        <div className="hidden sm:block">
                            {/* Reduced font size for the main text, increased for tagline */}
                            <div className="text-xl lg:text-2xl font-bold bg-gradient-to-r from-green-700 to-green-600 bg-clip-text text-transparent whitespace-nowrap">
                                Highlands Technical Training Academy
                            </div>
                            {/* Moved "INC" to the tagline with bold styling */}
                            <div className="text-sm lg:text-base text-gray-600 font-semibold whitespace-nowrap mt-1">INC | Technical Training Academy</div>
                        </div>
                    </div>

                    {/* Enhanced Desktop Navigation */}
                    <div className="hidden lg:flex items-center space-x-12 mx-auto">
                        {['home', 'about', 'programs', 'scholarships', 'contact'].map((section) => (
                            <button
                                key={section}
                                className={getNavLinkClass(section)}
                                onClick={() => smoothScroll(section)}
                            >
                                {section.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')}
                                <span className={`absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-green-500 to-green-600 transition-all duration-300 group-hover:w-full ${
                                    getNavLinkClass(section).includes('text-green-600') ? 'w-full' : ''
                                }`}></span>
                            </button>
                        ))}
                    </div>

                    {/* Enhanced CTA Buttons */}
                    <div className="hidden lg:flex items-center space-x-6 flex-shrink-0">
                        
                        <a href="/register" className="bg-gradient-to-r from-green-600 via-green-600 to-green-700 text-white px-8 py-4 rounded-full hover:from-green-700 hover:to-green-800 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 font-medium relative overflow-hidden group">
                            <span className="relative z-10">Enroll </span>
                            <div className="absolute inset-0 bg-gradient-to-r from-green-400 to-green-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
                        </a>
                    </div>

                    {/* Mobile Menu Button */}
                    <button onClick={toggleMenu} className="lg:hidden text-gray-700 hover:text-green-600 transition duration-300 p-2 rounded-lg hover:bg-gray-50">
                        {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>

                {/* Enhanced Mobile Menu */}
                {isMenuOpen && (
                    <div className="lg:hidden bg-white/95 backdrop-blur-xl border-t border-gray-200 rounded-b-2xl mt-2 py-6 space-y-4 shadow-xl">
                        {['home', 'about', 'programs', 'additional-info', 'scholarships', 'contact'].map((section) => (
                            <button
                                key={section}
                                className="block text-gray-700 hover:text-green-600 transition duration-300 font-medium px-6 py-2 rounded-lg hover:bg-green-50 mx-4"
                                onClick={() => smoothScroll(section)}
                            >
                                {section.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')}
                            </button>
                        ))}
                        <div className="border-t border-gray-200 pt-4 px-4 space-y-3">
                            <a
                                href="https://www.facebook.com/highlandstta"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center space-x-2 text-blue-600 hover:text-blue-700 transition duration-300 font-medium px-2"
                            >
                                <Facebook className="w-5 h-5 mr-2" />
                                <span>Follow us on Facebook</span>
                            </a>
                            <a href="/login" className="block text-green-600 hover:text-green-700 transition duration-300 font-medium px-2">
                                Login
                            </a>
                            <a href="/register" className="block bg-gradient-to-r from-green-600 to-green-700 text-white px-6 py-3 rounded-full text-center hover:from-green-700 hover:to-green-800 transition duration-300 shadow-lg font-medium">
                                Enroll Now
                            </a>
                        </div>
                    </div>
                )}
            </nav>
        </>
    );
};

export default Navbar;