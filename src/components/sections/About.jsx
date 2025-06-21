import React, { forwardRef, useEffect } from 'react';
import { Users, Award, BookOpen, Star, Facebook, ArrowRight } from 'lucide-react';

const About = forwardRef(({ getAnimationClass, galleryImages, currentSlide, setCurrentSlide, smoothScroll }, ref) => {
    // Auto-slide effect for gallery - keeping it here for now as it's specific to this component
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % galleryImages.length);
        }, 4000);
        return () => clearInterval(interval);
    }, [galleryImages.length, setCurrentSlide]);

    return (
        <section id="about" ref={ref} className={`py-24 lg:py-32 bg-gradient-to-br from-gray-50 to-white ${getAnimationClass('about', 'fade-in')}`}>
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
    );
});

export default About;