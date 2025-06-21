import React, { forwardRef } from 'react';
import { Award, ArrowRight, ChevronDown } from 'lucide-react';

const Hero = forwardRef(({ getAnimationClass, smoothScroll }, ref) => {
    return (
        <section id="home" ref={ref} className={`relative min-h-screen flex items-center justify-center overflow-hidden pt-24 ${getAnimationClass('home', 'fade-in')}`}>
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
    );
});

export default Hero;