import React, { useState, useEffect, useRef, useCallback } from 'react';
import { ChevronDown, Menu, X, Phone, Mail, MapPin, Clock, Users, Award, BookOpen, Star, Facebook, Instagram, Youtube, ArrowRight, CheckCircle, Calendar, Globe } from 'lucide-react';

// Import individual section components
import Navbar from './components/common/Navbar';
import MessageBox from './components/common/MessageBox';
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import Programs from './components/sections/Programs';
import Scholarships from './components/sections/Scholarships';
import Contact from './components/sections/Contact';

// Import your SplashScreen component
import SplashScreen from './components/common/SplashScreen'; // **Ensure this path is correct**

const App = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const [activeSection, setActiveSection] = useState('home');
    const [showMessageBox, setShowMessageBox] = useState(false);
    const [revealedSections, setRevealedSections] = useState(new Set());
    const [showSplashScreen, setShowSplashScreen] = useState(true); // State to control splash screen visibility

    // Refs for each section to observe their visibility
    const homeRef = useRef(null);
    const aboutRef = useRef(null);
    const programsRef = useRef(null);
    const scholarshipsRef = useRef(null);
    const contactRef = useRef(null);

    // Effect for Navbar scroll shadow/blur
    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // --- CRITICAL DEBUGGING AREA ---
    // Effect to hide splash screen after its animation completes
    useEffect(() => {
        console.log("App.js: SplashScreen useEffect initiated. Initial showSplashScreen state:", showSplashScreen);
        const timerDuration = 4000; // 4 seconds

        const timer = setTimeout(() => {
            setShowSplashScreen(false);
            // --- NEW: Immediately reveal the 'home' section when splash hides ---
            setRevealedSections(prev => new Set(prev).add('home'));
            console.log("App.js: Timeout fired! showSplashScreen set to FALSE. Home section revealed.");
        }, timerDuration);

        return () => {
            clearTimeout(timer);
            console.log("App.js: SplashScreen useEffect cleanup performed.");
        };
    }, []);

    // New useEffect to explicitly monitor when showSplashScreen changes
    useEffect(() => {
        console.log("App.js: showSplashScreen state HAS CHANGED to:", showSplashScreen);
        if (!showSplashScreen) {
            console.log("App.js: showSplashScreen is now FALSE. Main content should be visible.");
        }
    }, [showSplashScreen]); // This hook runs whenever showSplashScreen changes
    // --- END CRITICAL DEBUGGING AREA ---


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

        const sections = [homeRef, aboutRef, programsRef, scholarshipsRef, contactRef]; // Include new ref
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
    }, [revealedSections]);

    const toggleMenu = useCallback(() => setIsMenuOpen(prev => !prev), []);

    const smoothScroll = useCallback((id) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
        setIsMenuOpen(false); // Close menu on mobile after clicking
    }, []);

    // Message box functions
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form submitted!');
        setShowMessageBox(true);
        e.target.reset();
    };
    const closeMessageBox = () => {
        setShowMessageBox(false);
    };

    // Helper to get animation classes based on visibility
    const getAnimationClass = useCallback((sectionId, animationType = 'fade-in') => {
        return revealedSections.has(sectionId) ? `animate-${animationType}` : 'opacity-0';
    }, [revealedSections]);

    // Passed to Navbar to determine active link styling
    const getNavLinkClass = useCallback((sectionId) =>
        `relative text-gray-700 hover:text-green-600 transition-all duration-300 font-medium group ${
            activeSection === sectionId ? 'text-green-600' : ''
        }`, [activeSection]
    );

    const galleryImages = [
        "https://scontent-sea1-1.xx.fbcdn.net/v/t39.30808-6/481183628_1070289631781908_245153255143542819_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeGe3xJQBlFGJVBjl_z3bNjKUBlAJtQ-UjdQGUAm1D5SN0Fo-GSYSomzoK9vGDz4WdX4YLzIrO9gV8uEIgiLigEC&_nc_ohc=BNY3VTIIpqIQ7kNvwHn5t7K&_nc_oc=AdlxTr1KK8nxEkDcy2BOzLO5PbVKFk55KFmfs0ttXo3Ql9fbqVTFPZqjj2L4gByeuLM&_nc_zt=23&_nc_ht=scontent-sea1-1.xx&_nc_gid=kUcBW9bY5DxcQfqAxNoLKg&oh=00_AfPmTdGF699pzLXogGcX06v1dhzO4EH2NRw-zJYIkpEKdQ&oe=685AB107",
        "https://scontent-sea1-1.xx.fbcdn.net/v/t39.30808-6/482003868_1070289735115231_473155605975933866_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeFWOd-tEYAGp7pDdAN9EYx29C4gNxFI5an0LiA3EUjlqV3Veq_JLjPOO5AFlrar2s0sIDrH7xq4div3oTbGDOPN&_nc_ohc=jChDpTUW8VcQ7kNvwGkMqHX&_nc_oc=Adl-lfFqpOYb34V3A8nXINLnd_778C0XBtvbuJV5TVFoJpK43tZ1yW-E0_WZ9BqRNhY&_nc_zt=23&_nc_ht=scontent-sea1-1.xx&_nc_gid=LYNqQQ8stCo3RAm5MEi6uw&oh=00_AfOZRz2KsREONmP3K8aR1O57HMyYczqAL9c0jViE_uMTzQ&oe=685A8D3E",
        "https://scontent-sea1-1.xx.fbcdn.net/v/t1.6435-9/123953992_366293311461739_5837877242810322381_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeFYZ8b37iQCYRrwB4o7bNm-q9vUnaBhLYar29SdoGEthvtnnFiuxJISNw73zOAXFve567f_Gi4pGSD1glf0X-Aq&_nc_ohc=XTOOXrHLzMkQ7kNvwG65T38&_nc_oc=AdnZihdBAhSJu3sf0qffYoAMj45BozvtRBYwa7j_Nsri2hhW8L-jeiIygDFiSnouE1c&_nc_zt=23&_nc_ht=scontent-sea1-1.xx&_nc_gid=py99LGTREQWT591fX3SMCw&oh=00_AfMxx-OSuWCcI-bJQUxg_b22NcXsxtetaG2BJnE2xIfcIQ&oe=687C2AD2",
        "https://images.unsplash.com/photo-1566554273541-37a9ca77b91f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        "https://scontent-sea1-1.xx.fbcdn.net/v/t1.6435-9/75580536_114906309933775_16437007345516544_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeEBhHv-yXn5qPhoYnqYXd3phOtNbOFeLWCE601s4V4tYMx3zZQqJdzSGidrOs6M__uCQNzpgn49GAX-t_pBqJEJ&_nc_ohc=u_PZasZLbxgQ7kNvwF9VulI&_nc_oc=AdkJX5hRZmw4yc5YR31pQZTbWDFzSSk5a4roD2QCdhw6f_YFjhnbUoKM4rKBUNz2IFw&_nc_zt=23&_nc_ht=scontent-sea1-1.xx&_nc_gid=arTVY9OG_MA4q-PiUGO6cg&oh=00_AfOLQrYgM3U9mP77t2-AOhx5GtlCdQJYtB16wdfgfBUc3w&oe=687C5843",
    ];

    const [currentSlide, setCurrentSlide] = useState(0); // State moved here for now
    // Auto-slide effect for gallery
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % galleryImages.length);
        }, 4000);
        return () => clearInterval(interval);
    }, [galleryImages.length]);

    return (
        <div className="min-h-screen bg-white font-sans text-gray-800 overflow-x-hidden">
            {/* Custom styles for animations and body font (Ideally, move to src/styles/index.css) */}
            <style>
                {`
                body {
                    font-family: 'Inter', sans-serif;
                    background-color: #f0f2f5;
                }
                @keyframes fadeIn { from { opacity: 0; transform: translateY(20px); } to { opacity: 1; transform: translateY(0); } }
                @keyframes slideInLeft { from { opacity: 0; transform: translateX(-50px); } to { opacity: 1; transform: translateX(0); } }
                @keyframes slideInRight { from { opacity: 0; transform: translateX(50px); } to { opacity: 1; transform: translateX(0); } }
                @keyframes pulse-slow { 0%, 100% { transform: scale(1); } 50% { transform: scale(1.05); } }
                @keyframes float { 0% { transform: translateY(0px); } 50% { transform: translateY(-10px); } 100% { transform: translateY(0px); } }
                @keyframes fade-in-down { from { opacity: 0; transform: translateY(-20px); } to { opacity: 1; transform: translateY(0); } }
                @keyframes fade-in-up { from { opacity: 0; transform: translateY(20px); } to { opacity: 1; transform: translateY(0); } }
                @keyframes gradient-x { 0% { background-position: 0% 50%; } 50% { background-position: 100% 50%; } 100% { background-position: 0% 50%; } }
                @keyframes bounce-slow { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(-15px); } }
                @keyframes blob { 0%, 100% { border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%; } 50% { border-radius: 30% 60% 70% 40% / 50% 60% 30% 60%; } }
                @keyframes pulse-logo { 0%, 100% { transform: scale(1); opacity: 1; } 50% { transform: scale(1.03); opacity: 0.95; } }
                @keyframes pulse { 0%, 100% { transform: scale(1); opacity: 0.4; } 50% { transform: scale(1.1); opacity: 0.8; } }


                .animate-fade-in { animation: fadeIn 1s ease-out forwards; }
                .animate-slide-in-left { animation: slideInLeft 1s ease-out forwards; }
                .animate-slide-in-right { animation: slideInRight 1s ease-out forwards; }
                .animate-pulse-slow { animation: pulse-slow 3s infinite ease-in-out; }
                .animate-float { animation: float 3s ease-in-out infinite; }
                .animate-fade-in-down { animation: fade-in-down 1s ease-out forwards; }
                .animate-fade-in-up { animation: fade-in-up 1s ease-out forwards; }
                .animate-gradient-x { background-size: 200% auto; animation: gradient-x 4s linear infinite; }
                .animate-bounce-slow { animation: bounce-slow 2s infinite; }
                .animate-blob { animation: blob 8s infinite; }
                .animate-pulse-logo { animation: pulse-logo 2s infinite ease-in-out; }
                .animate-pulse { animation: pulse 2s infinite ease-in-out; } /* Added pulse for the splash screen border */


                .delay-100 { animation-delay: 0.1s; } .delay-200 { animation-delay: 0.2s; } .delay-300 { animation-delay: 0.3s; }
                .delay-400 { animation-delay: 0.4s; } .delay-500 { animation-delay: 0.5s; } .delay-600 { animation-delay: 0.6s; }
                .delay-700 { animation-delay: 0.7s; } .delay-800 { animation-delay: 0.8s; } .delay-900 { animation-delay: 0.9s; }
                .delay-1000 { animation-delay: 1s; } .delay-1100 { animation-delay: 1.1s; } .delay-1200 { animation-delay: 1.2s; }
                .animation-delay-2000 { animation-delay: 2s; }

                html { scroll-behavior: smooth; }
                `}
            </style>

            {/* Conditionally render the SplashScreen or the main app content */}
            {showSplashScreen ? (
                <SplashScreen onAnimationComplete={() => setShowSplashScreen(false)} />
            ) : (
                <>
                    <Navbar
                        isScrolled={isScrolled}
                        isMenuOpen={isMenuOpen}
                        toggleMenu={toggleMenu}
                        smoothScroll={smoothScroll}
                        getNavLinkClass={getNavLinkClass}
                    />

                    <Hero ref={homeRef} getAnimationClass={getAnimationClass} smoothScroll={smoothScroll} />
                    <About ref={aboutRef} getAnimationClass={getAnimationClass} galleryImages={galleryImages} currentSlide={currentSlide} setCurrentSlide={setCurrentSlide} smoothScroll={smoothScroll} />
                    <Programs ref={programsRef} getAnimationClass={getAnimationClass} />


                    <Scholarships ref={scholarshipsRef} getAnimationClass={getAnimationClass} smoothScroll={smoothScroll} />
                    <Contact ref={contactRef} getAnimationClass={getAnimationClass} handleSubmit={handleSubmit} />

                    {/* Enhanced Footer - Icons would need to be passed down or imported directly */}
                    <footer className="bg-gray-900 text-white py-16 lg:py-20">
                        <div className="container mx-auto px-4 lg:px-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16">
                                {/* Branding */}
                                <div className="space-y-6">
                                    <div className="flex items-center space-x-4">
                                        <div className="relative w-14 h-14">
                                            <div className="absolute inset-0 bg-gradient-to-br from-green-400 via-green-600 to-green-800 rounded-xl shadow-lg transform rotate-6"></div>
                                            <div className="relative bg-gradient-to-br from-green-500 to-green-700 rounded-xl flex items-center justify-center w-full h-full shadow-lg">
                                                <img src="https://scontent-sea1-1.xx.fbcdn.net/v/t1.6435-9/103440114_255080559249682_8395978773242303870_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeH8bHCsMO8F6RHT8ISmDAH_IfZmjKVZ9mYh9maMpVn2ZqXe0dQ0rj6wMS12GuC3s6E5-_i_Eodbts-J2pHQars6&_nc_ohc=Tkp9Wr_hCH8Q7kNvwGTuKt0&_nc_oc=AdnYu_B82t5hZc2IOlsDbIbsYA1IT6Ed3LjMQ0m0fgRNBEeUSJ9-Sm2zMdjTdZlYXL0&_nc_zt=23&_nc_ht=scontent-sea1-1.xx&_nc_gid=pAJUEUyUxyfnka5VmbdqXw&oh=00_AfMSmkUR-pF-pS1Yo68nN2m0m6J7d-wP4q9l2F-5qFWShQ&oe=687C5ACC" alt="HTTA Logo" className="w-16 h-16 lg:w-20 lg:h-11 object-contain" />
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
                                © {new Date().getFullYear()} HTTA, Inc. All rights reserved.
                            </div>
                        </div>
                    </footer>

                    <MessageBox showMessageBox={showMessageBox} closeMessageBox={closeMessageBox} />
                </>
            )}
        </div>
    );
};

export default App;