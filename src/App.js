import React, { useState, useEffect, useRef } from 'react';
// Make sure to install lucide-react: npm install lucide-react or yarn add lucide-react
import { ChevronDown, Menu, X, Phone, Mail, MapPin, Clock, Users, Award, BookOpen, Star, Facebook, Instagram, Youtube, ArrowRight, CheckCircle, Calendar, Globe } from 'lucide-react';
// Removed: import Logoo from './Logoo.png'; // Local file imports are not supported in this environment directly.

const App = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const [activeSection, setActiveSection] = useState('home');
    const [currentSlide, setCurrentSlide] = useState(0);
    // State to track if a section has been scrolled into view for animation
    const [revealedSections, setRevealedSections] = useState(new Set());

    // Refs for each section to observe their visibility
    const homeRef = useRef(null);
    const aboutRef = useRef(null);
    const programsRef = useRef(null);
    const scholarshipsRef = useRef(null);
    const contactRef = useRef(null);

    // Enhanced gallery images from Facebook page concept
    const galleryImages = [
        "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1574484284002-952d92456975?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1577219491135-ce391730fb2c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1566554273541-37a9ca77b91f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    ];

    // Auto-slide effect for gallery
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % galleryImages.length);
        }, 4000);
        return () => clearInterval(interval);
    }, [galleryImages.length]);

    // Effect for Navbar scroll shadow/blur
    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Effect for Active Navbar Link and Scroll Animations
    useEffect(() => {
        const observerOptions = {
            root: null,
            rootMargin: '-50% 0px -50% 0px', // When the section is roughly in the middle of the viewport
            threshold: 0,
        };

        const animationObserverOptions = {
            root: null,
            rootMargin: '0px 0px -10% 0px', // Trigger animation when 90% of element is visible
            threshold: 0.1, // Adjust as needed
        };

        const activeSectionObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    setActiveSection(entry.target.id);
                }
            });
        }, observerOptions);

        const animationTriggerObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting && !revealedSections.has(entry.target.id)) {
                    setRevealedSections(prev => new Set(prev).add(entry.target.id));
                }
            });
        }, animationObserverOptions);

        const sections = [homeRef, aboutRef, programsRef, scholarshipsRef, contactRef];
        sections.forEach(ref => {
            if (ref.current) {
                activeSectionObserver.observe(ref.current);
                animationTriggerObserver.observe(ref.current);
            }
        });

        return () => {
            sections.forEach(ref => {
                if (ref.current) {
                    activeSectionObserver.unobserve(ref.current);
                    animationTriggerObserver.unobserve(ref.current);
                }
            });
        };
    }, [revealedSections]); // Depend on revealedSections to re-run and add new observers if needed

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

    const smoothScroll = (id) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
        setIsMenuOpen(false); // Close menu on mobile after clicking
    };

    const getNavLinkClass = (sectionId) =>
        `relative text-gray-700 hover:text-green-600 transition-all duration-300 font-medium group ${
            activeSection === sectionId ? 'text-green-600' : ''
        }`;

    // Message box state and functions
    const [showMessageBox, setShowMessageBox] = useState(false);
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form submitted!'); // In a real application, you would send this data to a server
        setShowMessageBox(true);
        e.target.reset(); // Clear form fields
    };
    const closeMessageBox = () => {
        setShowMessageBox(false);
    };

    // Helper to get animation classes based on visibility
    const getAnimationClass = (sectionId, animationType = 'fade-in') => {
        return revealedSections.has(sectionId) ? `animate-${animationType}` : 'opacity-0';
    };

    return (
        <div className="min-h-screen bg-white font-sans text-gray-800 overflow-x-hidden">
            {/* Custom styles for animations and body font */}
            <style>
                {`
                body {
                    font-family: 'Inter', sans-serif;
                    background-color: #f0f2f5;
                }
                @keyframes fadeIn {
                    from { opacity: 0; transform: translateY(20px); }
                    to { opacity: 1; transform: translateY(0); }
                }
                @keyframes slideInLeft {
                    from { opacity: 0; transform: translateX(-50px); }
                    to { opacity: 1; transform: translateX(0); }
                }
                @keyframes slideInRight {
                    from { opacity: 0; transform: translateX(50px); }
                    to { opacity: 1; transform: translateX(0); }
                }
                @keyframes pulse-slow {
                    0%, 100% { transform: scale(1); }
                    50% { transform: scale(1.05); }
                }
                @keyframes float {
                    0% { transform: translateY(0px); }
                    50% { transform: translateY(-10px); }
                    100% { transform: translateY(0px); }
                }
                @keyframes fade-in-down {
                    from { opacity: 0; transform: translateY(-20px); }
                    to { opacity: 1; transform: translateY(0); }
                }
                @keyframes fade-in-up {
                    from { opacity: 0; transform: translateY(20px); }
                    to { opacity: 1; transform: translateY(0); }
                }
                @keyframes gradient-x {
                    0% { background-position: 0% 50%; }
                    50% { background-position: 100% 50%; }
                    100% { background-position: 0% 50%; }
                }
                @keyframes bounce-slow {
                    0%, 100% { transform: translateY(0); }
                    50% { transform: translateY(-15px); }
                }
                @keyframes blob {
                    0%, 100% { border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%; }
                    50% { border-radius: 30% 60% 70% 40% / 50% 60% 30% 60%; }
                }
                @keyframes pulse-logo { /* New animation for the logo */
                    0%, 100% { transform: scale(1); opacity: 1; }
                    50% { transform: scale(1.03); opacity: 0.95; }
                }
                
                .animate-fade-in { animation: fadeIn 1s ease-out forwards; }
                .animate-slide-in-left { animation: slideInLeft 1s ease-out forwards; }
                .animate-slide-in-right { animation: slideInRight 1s ease-out forwards; }
                .animate-pulse-slow { animation: pulse-slow 3s infinite ease-in-out; }
                .animate-float { animation: float 3s ease-in-out infinite; }
                .animate-fade-in-down { animation: fade-in-down 1s ease-out forwards; }
                .animate-fade-in-up { animation: fade-in-up 1s ease-out forwards; }
                .animate-gradient-x {
                    background-size: 200% auto;
                    animation: gradient-x 4s linear infinite;
                }
                .animate-bounce-slow { animation: bounce-slow 2s infinite; }
                .animate-blob { animation: blob 8s infinite; }
                .animate-pulse-logo { animation: pulse-logo 2s infinite ease-in-out; } /* Apply new logo animation */

                /* Specific delays for animations */
                .delay-100 { animation-delay: 0.1s; }
                .delay-200 { animation-delay: 0.2s; }
                .delay-300 { animation-delay: 0.3s; }
                .delay-400 { animation-delay: 0.4s; }
                .delay-500 { animation-delay: 0.5s; }
                .delay-600 { animation-delay: 0.6s; }
                .delay-700 { animation-delay: 0.7s; }
                .delay-800 { animation-delay: 0.8s; }
                .delay-900 { animation-delay: 0.9s; }
                .delay-1000 { animation-delay: 1s; }
                .delay-1100 { animation-delay: 1.1s; }
                .delay-1200 { animation-delay: 1.2s; }
                .animation-delay-2000 { animation-delay: 2s; }

                /* Smooth scrolling */
                html { scroll-behavior: smooth; }
                `}
            </style>

            {/* Enhanced Floating Navbar */}
            <nav className={`fixed top-4 left-4 right-4 z-50 transition-all duration-500 ${
                isScrolled
                    ? 'bg-white/90 backdrop-blur-xl shadow-2xl border border-white/20'
                    : 'bg-white/70 backdrop-blur-lg shadow-lg'
            } rounded-2xl`}>
                <div className="container mx-auto px-6 lg:px-8">
                    <div className="flex justify-between items-center h-16 lg:h-18">
                        {/* Enhanced Logo */}
                        <div className="flex items-center space-x-3">
                            {/* Added animate-pulse-logo to the outer container for subtle pulsing */}
                            <div className="relative w-12 h-12 lg:w-14 lg:h-14 animate-pulse-logo">
                                <div className="absolute inset-0 bg-gradient-to-br from-green-400 via-green-600 to-green-800 rounded-xl shadow-lg transform rotate-6"></div>
                                {/* Added hover:scale-105 to the inner container for interactive animation */}
                                <div className="relative bg-gradient-to-br from-green-500 to-green-700 rounded-xl flex items-center justify-center w-full h-full shadow-lg transform hover:scale-105 transition-transform duration-300">
                                    {/* Using a placeholder URL for the logo */}
                                    <img src="https://placehold.co/100x100/22c55e/ffffff?text=HTTA" alt="HTTA Logo" className="w-16 h-16 lg:w-20 lg:h-11 object-contain" />
                                </div>
                            </div>
                            <div className="hidden sm:block">
                                <div className="text-xl lg:text-2xl font-bold bg-gradient-to-r from-green-700 to-green-600 bg-clip-text text-transparent">
                                    HTTA, Inc.
                                </div>
                                <div className="text-xs lg:text-sm text-gray-600 font-medium">Technical Training Academy</div>
                            </div>
                        </div>

                        {/* Enhanced Desktop Navigation */}
                        <div className="hidden lg:flex items-center space-x-8">
                            {['home', 'about', 'programs', 'scholarships', 'contact'].map((section) => (
                                <button
                                    key={section}
                                    className={getNavLinkClass(section)}
                                    onClick={() => smoothScroll(section)}
                                >
                                    {section.charAt(0).toUpperCase() + section.slice(1)}
                                    <span className={`absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-green-500 to-green-600 transition-all duration-300 group-hover:w-full ${
                                        activeSection === section ? 'w-full' : ''
                                    }`}></span>
                                </button>
                            ))}
                        </div>

                        {/* Enhanced CTA Buttons */}
                        <div className="hidden lg:flex items-center space-x-4">
                            <a
                                href="https://www.facebook.com/highlandstta"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-2 text-blue-600 hover:text-blue-700 hover:bg-blue-50 rounded-lg transition-all duration-300"
                                title="Visit our Facebook page"
                            >
                                <Facebook className="w-5 h-5" />
                            </a>
                            <a href="/login" className="text-green-600 hover:text-green-700 transition duration-300 font-medium px-4 py-2 rounded-lg hover:bg-green-50">
                                Login
                            </a>
                            <a href="/register" className="bg-gradient-to-r from-green-600 via-green-600 to-green-700 text-white px-6 py-2.5 rounded-full hover:from-green-700 hover:to-green-800 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 font-medium relative overflow-hidden group">
                                <span className="relative z-10">Enroll Now</span>
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
                            {['home', 'about', 'programs', 'scholarships', 'contact'].map((section) => (
                                <button
                                    key={section}
                                    className="block text-gray-700 hover:text-green-600 transition duration-300 font-medium px-6 py-2 rounded-lg hover:bg-green-50 mx-4"
                                    onClick={() => smoothScroll(section)}
                                >
                                    {section.charAt(0).toUpperCase() + section.slice(1)}
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
                </div>
            </nav>

            {/* Enhanced Hero Section with Parallax Effect */}
            <section id="home" ref={homeRef} className={`relative min-h-screen flex items-center justify-center overflow-hidden pt-24 ${getAnimationClass('home', 'fade-in')}`}>
                {/* Animated Background */}
                <div className="absolute inset-0">
                    <div className="absolute inset-0 bg-gradient-to-br from-green-900/95 via-green-800/90 to-yellow-600/80"></div>
                    <div className="absolute inset-0 bg-black/20"></div>

                    {/* Floating Animation Elements */}
                    <div className="absolute top-20 left-10 w-20 h-20 bg-yellow-400/20 rounded-full blur-xl animate-pulse"></div>
                    <div className="absolute top-40 right-20 w-32 h-32 bg-green-400/20 rounded-full blur-xl animate-pulse delay-700"></div>
                    <div className="absolute bottom-20 left-1/4 w-24 h-24 bg-yellow-300/20 rounded-full blur-xl animate-pulse delay-1000"></div>
                </div>

                {/* Enhanced Mountain Silhouette */}
                <div className="absolute bottom-0 left-0 right-0 h-40 lg:h-56">
                    <svg viewBox="0 0 1200 320" className="w-full h-full">
                        <path d="M0,160 L300,40 L600,120 L900,20 L1200,80 L1200,320 L0,320 Z" fill="rgba(5, 46, 22, 0.8)"/>
                        <path d="M0,200 L200,100 L500,180 L800,60 L1200,140 L1200,320 L0,320 Z" fill="rgba(5, 46, 22, 0.6)"/>
                    </svg>
                </div>

                {/* Enhanced Content */}
                <div className="relative z-10 container mx-auto px-4 lg:px-6 text-center">
                    <div className="max-w-5xl mx-auto">
                        {/* Floating Badge */}
                        <div className="mb-8 animate-float">
                            <div className="inline-flex items-center space-x-3 bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 border border-white/20 shadow-lg">
                                <div className="relative">
                                    <Award className="w-6 h-6 text-yellow-300" />
                                    <div className="absolute -top-1 -right-1 w-3 h-3 bg-yellow-400 rounded-full animate-ping"></div>
                                </div>
                                <span className="text-white/90 font-medium">TESDA Accredited Institution</span>
                            </div>
                        </div>

                        {/* Main Heading with Gradient Text */}
                        <h1 className="text-5xl sm:text-6xl lg:text-8xl font-black text-white leading-tight mb-8 animate-fade-in-down">
                            Your Future in
                            <span className="block mt-2 bg-gradient-to-r from-yellow-300 via-yellow-400 to-yellow-500 bg-clip-text text-transparent animate-gradient-x">
                                Culinary Arts
                            </span>
                            <span className="block text-4xl sm:text-5xl lg:text-6xl font-light text-green-100 mt-4">
                                Starts Here
                            </span>
                        </h1>

                        {/* Enhanced Subtitle */}
                        <p className="text-xl lg:text-3xl text-green-100 mb-12 max-w-4xl mx-auto leading-relaxed animate-fade-in-up font-light">
                            Master professional culinary skills with our comprehensive
                            <span className="font-semibold text-yellow-300"> TESDA-accredited programs</span>
                            in the heart of Cagayan de Oro
                        </p>

                        {/* Enhanced CTA Buttons */}
                        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center animate-fade-in mb-16">
                            <a href="/register" className="group relative bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 text-green-900 font-bold px-10 py-5 rounded-full text-xl hover:from-yellow-500 hover:to-yellow-700 transition-all duration-500 shadow-2xl transform hover:scale-105 hover:shadow-yellow-500/30 w-full sm:w-auto overflow-hidden">
                                <span className="relative z-10 flex items-center justify-center">
                                    Start Your Journey
                                    <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                                </span>
                                <div className="absolute inset-0 bg-gradient-to-r from-yellow-300 to-yellow-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
                            </a>
                            <button onClick={() => smoothScroll('programs')} className="group border-2 border-white text-white font-bold px-10 py-5 rounded-full text-xl hover:bg-white hover:text-green-800 transition-all duration-500 w-full sm:w-auto backdrop-blur-sm">
                                <span className="flex items-center justify-center">
                                    Explore Programs
                                    <ChevronDown className="w-5 h-5 ml-2 group-hover:translate-y-1 transition-transform duration-300" />
                                </span>
                            </button>
                        </div>

                        {/* Scroll Indicator */}
                        <div className="animate-bounce-slow">
                            <ChevronDown className="w-10 h-10 text-white/70 mx-auto" />
                            <p className="text-white/60 text-sm mt-2">Scroll to explore</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Enhanced About Section with Image Gallery */}
            <section id="about" ref={aboutRef} className={`py-24 lg:py-32 bg-gradient-to-br from-gray-50 to-white ${getAnimationClass('about', 'fade-in')}`}>
                <div className="container mx-auto px-4 lg:px-6">
                    <div className="text-center mb-16 lg:mb-20">
                        <div className="inline-block p-1 bg-gradient-to-r from-green-500 to-green-600 rounded-full mb-6">
                            <div className="bg-white rounded-full px-6 py-2">
                                <span className="text-green-600 font-semibold text-sm">ABOUT US</span>
                            </div>
                        </div>
                        <h2 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
                            About <span className="bg-gradient-to-r from-green-600 to-green-500 bg-clip-text text-transparent">HTTA</span>
                        </h2>
                        <p className="text-xl lg:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
                            Empowering futures through quality technical education in the heart of Northern Mindanao
                        </p>
                    </div>

                    <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-center">
                        <div className={`space-y-8 ${getAnimationClass('about', 'slide-in-left')}`}>
                            <div className="prose prose-xl">
                                <p className="text-gray-700 leading-relaxed text-lg">
                                    Located in <strong className="text-green-600">Apovel, Bulua, Cagayan de Oro</strong>, Highlands Technical Training Academy, Inc. stands as a premier TESDA-accredited institution dedicated to providing world-class technical-vocational education in culinary arts.
                                </p>
                                <p className="text-gray-700 leading-relaxed text-lg">
                                    Our mission is to cultivate skilled, competent, and industry-ready professionals who will contribute meaningfully to the local and national economy while fostering innovation and excellence in their chosen fields.
                                </p>
                            </div>

                            {/* Enhanced Stats Grid */}
                            <div className="grid grid-cols-2 gap-6">
                                <div className="group p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-green-100 hover:border-green-200">
                                    <div className="flex items-center space-x-4">
                                        <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                                            <Award className="w-6 h-6 text-white" />
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-gray-900 text-lg">TESDA Accredited</h4>
                                            <p className="text-gray-600 text-sm">Recognized quality standards</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="group p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-yellow-100 hover:border-yellow-200">
                                    <div className="flex items-center space-x-4">
                                        <div className="w-12 h-12 bg-gradient-to-br from-yellow-500 to-yellow-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                                            <Users className="w-6 h-6 text-white" />
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-gray-900 text-lg">Expert Faculty</h4>
                                            <p className="text-gray-600 text-sm">Industry professionals</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Facebook Link Button */}
                            <div className="flex flex-col sm:flex-row gap-4">
                                <a
                                    href="https://www.facebook.com/highlandstta"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="group inline-flex items-center bg-blue-600 text-white px-6 py-3 rounded-full hover:bg-blue-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 font-medium"
                                >
                                    <Facebook className="w-5 h-5 mr-2" />
                                    Follow us on Facebook
                                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                                </a>
                                <button onClick={() => smoothScroll('contact')} className="inline-flex items-center text-green-600 font-semibold hover:text-green-700 transition-colors duration-300">
                                    Contact Us
                                    <ArrowRight className="w-4 h-4 ml-2" />
                                </button>
                            </div>
                        </div>

                        {/* Enhanced Image Gallery */}
                        <div className={`relative ${getAnimationClass('about', 'slide-in-right')}`}>
                            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                                <div className="relative h-96 lg:h-[500px]">
                                    {galleryImages.map((image, index) => (
                                        <img
                                            key={index}
                                            src={image}
                                            alt={`HTTA Campus ${index + 1}`}
                                            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
                                                index === currentSlide ? 'opacity-100' : 'opacity-0'
                                            }`}
                                        />
                                    ))}
                                    <div className="absolute inset-0 bg-gradient-to-t from-green-900/40 via-transparent to-transparent"></div>
                                </div>

                                {/* Gallery Dots */}
                                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                                    {galleryImages.map((_, index) => (
                                        <button
                                            key={index}
                                            onClick={() => setCurrentSlide(index)}
                                            className={`w-3 h-3 rounded-full transition-all duration-300 ${
                                                index === currentSlide ? 'bg-white scale-125' : 'bg-white/50 hover:bg-white/75'
                                            }`}
                                        />
                                    ))}
                                </div>
                            </div>

                            {/* Floating Elements */}
                            <div className="absolute -top-6 -right-6 w-24 h-24 bg-gradient-to-br from-yellow-400 to-yellow-500 rounded-full flex items-center justify-center shadow-xl animate-float">
                                <BookOpen className="w-10 h-10 text-white" />
                            </div>
                            <div className="absolute -bottom-4 -left-4 w-20 h-20 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center shadow-xl animate-float delay-1000">
                                <Star className="w-8 h-8 text-white" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Enhanced Programs Section */}
            <section id="programs" ref={programsRef} className={`py-24 lg:py-32 bg-gradient-to-br from-green-900 via-green-800 to-green-900 text-white relative overflow-hidden ${getAnimationClass('programs', 'fade-in')}`}>
                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-10">
                    <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-yellow-400/20 to-transparent"></div>
                    <div className="absolute bottom-0 right-0 w-96 h-96 bg-yellow-400/10 rounded-full blur-3xl"></div>
                </div>

                <div className="container mx-auto px-4 lg:px-6 relative z-10">
                    <div className="text-center mb-16 lg:mb-20">
                        <div className="inline-block p-1 bg-gradient-to-r from-yellow-400 to-yellow-500 rounded-full mb-6">
                            <div className="bg-green-900 rounded-full px-6 py-2">
                                <span className="text-yellow-400 font-semibold text-sm">OUR PROGRAMS</span>
                            </div>
                        </div>
                        <h2 className="text-4xl lg:text-6xl font-bold mb-6">
                            Our <span className="bg-gradient-to-r from-yellow-400 to-yellow-300 bg-clip-text text-transparent">Programs</span>
                        </h2>
                        <p className="text-xl lg:text-2xl text-green-100 max-w-4xl mx-auto leading-relaxed">
                            TESDA-accredited programs designed to prepare you for a successful career in the culinary industry
                        </p>
                    </div>

                    <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
                        {/* Cookery NC II - Enhanced */}
                        <div className={`group relative ${getAnimationClass('programs', 'slide-in-left')}`}>
                            <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 lg:p-10 h-full transition-all duration-500 hover:bg-white/15 hover:shadow-2xl hover:-translate-y-2 border border-white/20 hover:border-yellow-400/50">
                                <div className="flex items-center justify-between mb-8">
                                    <div className="relative">
                                        <div className="w-20 h-20 bg-gradient-to-br from-green-400 to-green-500 rounded-2xl flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform duration-300">
                                            <span className="text-4xl">🍳</span>
                                        </div>
                                        <div className="absolute -top-2 -right-2 w-6 h-6 bg-yellow-400 rounded-full flex items-center justify-center">
                                            <CheckCircle className="w-4 h-4 text-green-900" />
                                        </div>
                                    </div>
                                    <div className="px-4 py-2 bg-gradient-to-r from-green-500 to-green-400 text-green-900 rounded-full text-sm font-bold shadow-lg">
                                        NC II Certified
                                    </div>
                                </div>

                                <h3 className="text-3xl lg:text-4xl font-bold mb-6 group-hover:text-yellow-300 transition-colors duration-300">
                                    Cookery NC II
                                </h3>
                                <p className="text-green-100 mb-8 leading-relaxed text-lg">
                                    Master the fundamental skills in preparing and cooking hot and cold meals for various settings. Our comprehensive curriculum covers essential culinary techniques, food safety, and kitchen management.
                                </p>

                                <div className="space-y-4 mb-10">
                                    {[
                                        "Food preparation and cooking techniques",
                                        "Kitchen safety and sanitation",
                                        "Menu planning and cost control",
                                        "Professional presentation skills"
                                    ].map((item, index) => (
                                        <div key={index} className="flex items-center space-x-4 group-hover:translate-x-2 transition-transform duration-300" style={{transitionDelay: `${index * 100}ms`}}>
                                            <div className="w-2 h-2 bg-gradient-to-r from-yellow-400 to-yellow-300 rounded-full"></div>
                                            <span className="text-green-100 font-medium">{item}</span>
                                        </div>
                                    ))}
                                </div>

                                <a href="/programs/cookery" className="group/btn inline-flex items-center bg-gradient-to-r from-yellow-500 to-yellow-400 text-green-900 px-8 py-4 rounded-full hover:from-yellow-400 hover:to-yellow-300 transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:scale-105 font-bold text-lg">
                                    Learn More
                                    <ArrowRight className="w-5 h-5 ml-2 group-hover/btn:translate-x-1 transition-transform duration-300" />
                                </a>
                            </div>
                        </div>

                        {/* Bread & Pastry Production NC II - Enhanced */}
                        <div className={`group relative ${getAnimationClass('programs', 'slide-in-right')}`}>
                            <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 lg:p-10 h-full transition-all duration-500 hover:bg-white/15 hover:shadow-2xl hover:-translate-y-2 border border-white/20 hover:border-yellow-400/50">
                                <div className="flex items-center justify-between mb-8">
                                    <div className="relative">
                                        <div className="w-20 h-20 bg-gradient-to-br from-yellow-500 to-yellow-600 rounded-2xl flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform duration-300">
                                            <span className="text-4xl">🍞</span>
                                        </div>
                                        <div className="absolute -top-2 -right-2 w-6 h-6 bg-green-400 rounded-full flex items-center justify-center">
                                            <CheckCircle className="w-4 h-4 text-green-900" />
                                        </div>
                                    </div>
                                    <div className="px-4 py-2 bg-gradient-to-r from-yellow-500 to-yellow-400 text-green-900 rounded-full text-sm font-bold shadow-lg">
                                        NC II Certified
                                    </div>
                                </div>

                                <h3 className="text-3xl lg:text-4xl font-bold mb-6 group-hover:text-yellow-300 transition-colors duration-300">
                                    Bread & Pastry Production NC II
                                </h3>
                                <p className="text-green-100 mb-8 leading-relaxed text-lg">
                                    Unleash your creativity and precision in baking! This program equips you with the skills to prepare and produce a wide range of breads, pastries, cakes, and desserts with industry-standard quality.
                                </p>

                                <div className="space-y-4 mb-10">
                                    {[
                                        "Baking fundamentals and advanced techniques",
                                        "Yeast-raised products (breads, rolls)",
                                        "Cakes, cookies, and pastries production",
                                        "Dessert preparation and presentation",
                                        "Food hygiene and workplace safety"
                                    ].map((item, index) => (
                                        <div key={index} className="flex items-center space-x-4 group-hover:translate-x-2 transition-transform duration-300" style={{transitionDelay: `${index * 100}ms`}}>
                                            <div className="w-2 h-2 bg-gradient-to-r from-yellow-400 to-yellow-300 rounded-full"></div>
                                            <span className="text-green-100 font-medium">{item}</span>
                                        </div>
                                    ))}
                                </div>

                                <a href="/programs/bread-pastry" className="group/btn inline-flex items-center bg-gradient-to-r from-yellow-500 to-yellow-400 text-green-900 px-8 py-4 rounded-full hover:from-yellow-400 hover:to-yellow-300 transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:scale-105 font-bold text-lg">
                                    Learn More
                                    <ArrowRight className="w-5 h-5 ml-2 group-hover/btn:translate-x-1 transition-transform duration-300" />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Enhanced Scholarships Section */}
            <section id="scholarships" ref={scholarshipsRef} className={`py-24 lg:py-32 bg-gray-100 relative overflow-hidden ${getAnimationClass('scholarships', 'fade-in')}`}>
                {/* Abstract Shapes */}
                <div className="absolute top-0 left-0 w-64 h-64 bg-green-200 opacity-20 rounded-full -translate-x-1/2 -translate-y-1/2 blur-3xl animate-blob"></div>
                <div className="absolute bottom-0 right-0 w-80 h-80 bg-yellow-200 opacity-20 rounded-full translate-x-1/2 translate-y-1/2 blur-3xl animate-blob animation-delay-2000"></div>

                <div className="container mx-auto px-4 lg:px-6 relative z-10">
                    <div className="text-center mb-16 lg:mb-20">
                        <div className="inline-block p-1 bg-gradient-to-r from-yellow-500 to-yellow-600 rounded-full mb-6">
                            <div className="bg-white rounded-full px-6 py-2">
                                <span className="text-yellow-600 font-semibold text-sm">SCHOLARSHIPS</span>
                            </div>
                        </div>
                        <h2 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
                            Financial <span className="bg-gradient-to-r from-green-600 to-green-500 bg-clip-text text-transparent">Assistance</span>
                        </h2>
                        <p className="text-xl lg:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
                            We believe in making quality education accessible to everyone. Explore our scholarship opportunities.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-10 lg:gap-16">
                        {/* Scholarship Card 1 - TESDA Scholarship Programs */}
                        <div className={`bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 p-8 lg:p-10 border border-gray-200 ${getAnimationClass('scholarships', 'slide-in-left')}`}>
                            <div className="flex items-center space-x-5 mb-6">
                                <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center shadow-lg">
                                    <Award className="w-8 h-8 text-white" />
                                </div>
                                <h3 className="text-2xl lg:text-3xl font-bold text-gray-900">TESDA Scholarship Programs</h3>
                            </div>
                            <p className="text-gray-700 mb-6 leading-relaxed">
                                Avail of TESDA's various scholarship programs which provide financial assistance for tuition fees and other training expenses. Eligibility depends on TESDA guidelines and fund availability.
                            </p>
                            <ul className="space-y-3 mb-8">
                                <li className="flex items-center text-gray-600">
                                    <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                                    Full or partial tuition fee coverage
                                </li>
                                <li className="flex items-center text-gray-600">
                                    <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                                    Training allowance and assessment fees
                                </li>
                                <li className="flex items-center text-gray-600">
                                    <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                                    Book and tool allowances (for some programs)
                                </li>
                            </ul>
                            <a href="/scholarships/tesda" className="inline-flex items-center text-green-600 font-semibold hover:text-green-700 transition-colors duration-300">
                                Learn More about TESDA Scholarships
                                <ArrowRight className="w-4 h-4 ml-2" />
                            </a>
                        </div>

                        {/* Scholarship Card 2 - DBP RISE (as per previous request) */}
                        <div className={`bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 p-8 lg:p-10 border border-gray-200 ${getAnimationClass('scholarships', 'slide-in-right')}`}>
                            <div className="flex items-center space-x-5 mb-6">
                                <div className="w-16 h-16 bg-gradient-to-br from-yellow-500 to-yellow-600 rounded-xl flex items-center justify-center shadow-lg">
                                    <Calendar className="w-8 h-8 text-white" /> {/* Changed icon to Calendar for a generic scholarship */}
                                </div>
                                <h3 className="text-2xl lg:text-3xl font-bold text-gray-900">DBP RISE Scholarship Program</h3> {/* Explicitly named DBP RISE */}
                            </div>
                            <p className="text-gray-700 mb-6 leading-relaxed">
                                The DBP RISE (Reaching the Impoverished Sector for Education) scholarship program provides educational opportunities to underprivileged but deserving Filipino students, focusing on technical-vocational education.
                            </p>
                            <ul className="space-y-3 mb-8">
                                <li className="flex items-center text-gray-600">
                                    <CheckCircle className="w-5 h-5 text-yellow-500 mr-3 flex-shrink-0" />
                                    Full tuition fee coverage
                                </li>
                                <li className="flex items-center text-gray-600">
                                    <CheckCircle className="w-5 h-5 text-yellow-500 mr-3 flex-shrink-0" />
                                    Allowance for training materials and consumables
                                </li>
                                <li className="flex items-center text-gray-600">
                                    <CheckCircle className="w-5 h-5 text-yellow-500 mr-3 flex-shrink-0" />
                                    Monthly stipend for living expenses
                                </li>
                            </ul>
                            <a href="#contact" className="inline-flex items-center text-yellow-600 font-semibold hover:text-yellow-700 transition-colors duration-300">
                                Inquire about DBP RISE
                                <ArrowRight className="w-4 h-4 ml-2" />
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            {/* Enhanced Contact Section */}
            <section id="contact" ref={contactRef} className={`py-24 lg:py-32 bg-gradient-to-br from-green-700 to-green-900 text-white relative overflow-hidden ${getAnimationClass('contact', 'fade-in')}`}>
                {/* Abstract shapes */}
                <div className="absolute inset-0 opacity-10">
                    <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-white/10 rounded-full blur-3xl animate-pulse"></div>
                    <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-yellow-400/10 rounded-full blur-3xl animate-pulse delay-500"></div>
                </div>

                <div className="container mx-auto px-4 lg:px-6 relative z-10">
                    <div className="text-center mb-16 lg:mb-20">
                        <div className="inline-block p-1 bg-gradient-to-r from-white to-gray-200 rounded-full mb-6">
                            <div className="bg-green-800 rounded-full px-6 py-2">
                                <span className="text-white font-semibold text-sm">GET IN TOUCH</span>
                            </div>
                        </div>
                        <h2 className="text-4xl lg:text-6xl font-bold mb-6">
                            Contact <span className="bg-gradient-to-r from-yellow-400 to-yellow-300 bg-clip-text text-transparent">Us</span>
                        </h2>
                        <p className="text-xl lg:text-2xl text-green-100 max-w-4xl mx-auto leading-relaxed">
                            Have questions or ready to enroll? Reach out to us today!
                        </p>
                    </div>

                    <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
                        {/* Contact Information */}
                        <div className={`space-y-8 ${getAnimationClass('contact', 'slide-in-left')}`}>
                            <h3 className="text-3xl lg:text-4xl font-bold mb-6 text-white">Our Details</h3>
                            <div className="flex items-center space-x-5">
                                <div className="w-16 h-16 bg-white/10 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg">
                                    <Phone className="w-8 h-8 text-yellow-300" />
                                </div>
                                <div>
                                    <p className="text-green-100 text-lg">Call Us:</p>
                                    <a href="tel:+639171234567" className="text-white text-2xl font-semibold hover:text-yellow-300 transition-colors duration-300">+63 917 123 4567</a>
                                    <p className="text-green-200 text-sm">(Mon-Fri, 9AM-5PM)</p>
                                </div>
                            </div>
                            <div className="flex items-center space-x-5">
                                <div className="w-16 h-16 bg-white/10 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg">
                                    <Mail className="w-8 h-8 text-yellow-300" />
                                </div>
                                <div>
                                    <p className="text-green-100 text-lg">Email Us:</p>
                                    <a href="mailto:info@httacademy.edu.ph" className="text-white text-2xl font-semibold hover:text-yellow-300 transition-colors duration-300">info@httacademy.edu.ph</a>
                                </div>
                            </div>
                            <div className="flex items-center space-x-5">
                                <div className="w-16 h-16 bg-white/10 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg">
                                    <MapPin className="w-8 h-8 text-yellow-300" />
                                </div>
                                <div>
                                    <p className="text-green-100 text-lg">Visit Us:</p>
                                    <p className="text-white text-2xl font-semibold">Apovel, Bulua, Cagayan de Oro City</p>
                                    {/* Google Maps Embed in an iframe */}
                                    <div className="mt-4 w-full h-64 rounded-xl overflow-hidden shadow-lg border border-white/20">
                                        <iframe
                                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15783.181829631627!2d124.63060675!3d8.47196015!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x32ff87019241b315%3A0x63390c5c64c74823!2sCagayan%20de%20Oro%2C%20Northern%20Mindanao%2C%20Philippines!5e0!3m2!1sen!2sph!4v1701321000000!5m2!1sen!2sph"
                                            width="100%"
                                            height="100%"
                                            style={{ border: 0 }}
                                            allowFullScreen=""
                                            loading="lazy"
                                            referrerPolicy="no-referrer-when-downgrade"
                                            className="rounded-xl"
                                        ></iframe>
                                    </div>
                                </div>
                            </div>
                            <div className="flex items-center space-x-5">
                                <div className="w-16 h-16 bg-white/10 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg">
                                    <Clock className="w-8 h-8 text-yellow-300" />
                                </div>
                                <div>
                                    <p className="text-green-100 text-lg">Office Hours:</p>
                                    <p className="text-white text-2xl font-semibold">Mon-Fri: 9:00 AM - 5:00 PM</p>
                                    <p className="text-white text-base">Sat: 9:00 AM - 12:00 PM (By Appointment)</p>
                                </div>
                            </div>
                        </div>

                        {/* Contact Form */}
                        <div className={`bg-white/10 backdrop-blur-lg rounded-3xl p-8 lg:p-10 shadow-2xl border border-white/20 ${getAnimationClass('contact', 'slide-in-right')}`}>
                            <h3 className="text-3xl lg:text-4xl font-bold mb-8 text-white text-center">Send Us a Message</h3>
                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div>
                                    <label htmlFor="name" className="block text-green-100 text-lg font-medium mb-2">Your Name</label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        className="w-full px-5 py-3 rounded-xl bg-white/20 text-white placeholder-green-200 border border-white/30 focus:border-yellow-400 focus:ring-1 focus:ring-yellow-400 outline-none transition-all duration-300"
                                        placeholder="John Doe"
                                        required
                                    />
                                </div>
                                <div>
                                    <label htmlFor="email" className="block text-green-100 text-lg font-medium mb-2">Your Email</label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        className="w-full px-5 py-3 rounded-xl bg-white/20 text-white placeholder-green-200 border border-white/30 focus:border-yellow-400 focus:ring-1 focus:ring-yellow-400 outline-none transition-all duration-300"
                                        placeholder="john.doe@example.com"
                                        required
                                    />
                                </div>
                                <div>
                                    <label htmlFor="subject" className="block text-green-100 text-lg font-medium mb-2">Subject</label>
                                    <input
                                        type="text"
                                        id="subject"
                                        name="subject"
                                        className="w-full px-5 py-3 rounded-xl bg-white/20 text-white placeholder-green-200 border border-white/30 focus:border-yellow-400 focus:ring-1 focus:ring-yellow-400 outline-none transition-all duration-300"
                                        placeholder="Inquiry about programs"
                                        required
                                    />
                                </div>
                                <div>
                                    <label htmlFor="message" className="block text-green-100 text-lg font-medium mb-2">Your Message</label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        rows={6}
                                        className="w-full px-5 py-3 rounded-xl bg-white/20 text-white placeholder-green-200 border border-white/30 focus:border-yellow-400 focus:ring-1 focus:ring-yellow-400 outline-none transition-all duration-300 resize-y"
                                        placeholder="Write your message here..."
                                        required
                                    ></textarea>
                                </div>
                                <button
                                    type="submit"
                                    className="group relative w-full bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 text-green-900 font-bold px-8 py-4 rounded-full text-xl hover:from-yellow-500 hover:to-yellow-700 transition-all duration-500 shadow-xl hover:shadow-2xl transform hover:scale-105 overflow-hidden"
                                >
                                    <span className="relative z-10 flex items-center justify-center">
                                        Send Message
                                        <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                                    </span>
                                    <div className="absolute inset-0 bg-gradient-to-r from-yellow-300 to-yellow-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>

            {/* Enhanced Footer */}
            <footer className="bg-gray-900 text-white py-16 lg:py-20">
                <div className="container mx-auto px-4 lg:px-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16">
                        {/* Branding */}
                        <div className="space-y-6">
                            <div className="flex items-center space-x-4">
                                <div className="relative w-14 h-14">
                                    <div className="absolute inset-0 bg-gradient-to-br from-green-400 via-green-600 to-green-800 rounded-xl shadow-lg transform rotate-6"></div>
                                    <div className="relative bg-gradient-to-br from-green-500 to-green-700 rounded-xl flex items-center justify-center w-full h-full shadow-lg">
                                        {/* Using imported Logoo image */}
                                        <img src="https://placehold.co/100x100/22c55e/ffffff?text=HTTA" alt="HTTA Logo" className="w-16 h-16 lg:w-20 lg:h-11 object-contain" />
                                    </div>
                                </div>
                                <div>
                                    <div className="text-2xl font-bold bg-gradient-to-r from-green-500 to-green-400 bg-clip-text text-transparent">HTTA, Inc.</div>
                                    <div className="text-sm text-gray-400">Technical Training Academy</div>
                                </div>
                            </div>
                            <p className="text-gray-400 leading-relaxed">
                                Empowering futures through quality technical education, proudly serving Cagayan de Oro and beyond.
                            </p>
                            <div className="flex space-x-4">
                                <a href="https://www.facebook.com/highlandstta" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-500 transition-colors duration-300">
                                    <Facebook size={24} />
                                </a>
                                <a href="#" className="text-gray-400 hover:text-purple-500 transition-colors duration-300">
                                    <Instagram size={24} />
                                </a>
                                <a href="#" className="text-gray-400 hover:text-red-500 transition-colors duration-300">
                                    <Youtube size={24} />
                                </a>
                            </div>
                        </div>

                        {/* Quick Links */}
                        <div>
                            <h3 className="text-xl font-semibold text-white mb-6">Quick Links</h3>
                            <ul className="space-y-3">
                                {['home', 'about', 'programs', 'scholarships', 'contact'].map((section) => (
                                    <li key={section}>
                                        <button onClick={() => smoothScroll(section)} className="text-gray-400 hover:text-green-400 transition-colors duration-300">
                                            {section.charAt(0).toUpperCase() + section.slice(1)}
                                        </button>
                                    </li>
                                ))}
                                <li><a href="/login" className="text-gray-400 hover:text-green-400 transition-colors duration-300">Login</a></li>
                                <li><a href="/register" className="text-gray-400 hover:text-green-400 transition-colors duration-300">Enroll Now</a></li>
                            </ul>
                        </div>

                        {/* Programs */}
                        <div>
                            <h3 className="text-xl font-semibold text-white mb-6">Programs</h3>
                            <ul className="space-y-3">
                                <li><a href="/programs/cookery" className="text-gray-400 hover:text-green-400 transition-colors duration-300">Cookery NC II</a></li>
                                <li><a href="/programs/bread-pastry" className="text-gray-400 hover:text-green-400 transition-colors duration-300">Bread & Pastry Production NC II</a></li>
                                {/* Add more programs as needed */}
                            </ul>
                        </div>

                        {/* Contact Info */}
                        <div>
                            <h3 className="text-xl font-semibold text-white mb-6">Contact Info</h3>
                            <div className="space-y-4 text-gray-400">
                                <div className="flex items-center space-x-3">
                                    <MapPin size={20} className="text-green-400 flex-shrink-0" />
                                    <span>Apovel, Bulua, Cagayan de Oro City</span>
                                </div>
                                <div className="flex items-center space-x-3">
                                    <Phone size={20} className="text-green-400 flex-shrink-0" />
                                    <a href="tel:+639171234567" className="hover:text-green-400 transition-colors duration-300">+63 917 123 4567</a>
                                </div>
                                <div className="flex items-center space-x-3">
                                    <Mail size={20} className="text-green-400 flex-shrink-0" />
                                    <a href="mailto:info@httacademy.edu.ph" className="hover:text-green-400 transition-colors duration-300">info@httacademy.edu.ph</a>
                                </div>
                                <div className="flex items-center space-x-3">
                                    <Clock size={20} className="text-green-400 flex-shrink-0" />
                                    <span>Mon-Fri: 9:00 AM - 5:00 PM</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="border-t border-gray-700 mt-16 pt-8 text-center text-gray-500 text-sm">
                        &copy; {new Date().getFullYear()} HTTA, Inc. All rights reserved.
                    </div>
                </div>
            </footer>

            {/* Message Box Modal */}
            {showMessageBox && (
                <div className="fixed inset-0 bg-gray-600 bg-opacity-75 flex items-center justify-center z-50">
                    <div className="bg-white p-8 rounded-lg shadow-xl text-center max-w-sm">
                        <p className="text-lg font-semibold text-green-700 mb-4">Message Sent!</p>
                        <p className="text-gray-700 mb-6">Thank you for your inquiry. We will get back to you soon.</p>
                        <button onClick={closeMessageBox} className="bg-green-600 text-white font-bold py-2 px-6 rounded-full hover:bg-green-700 transition duration-300">Close</button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default App;
