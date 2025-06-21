import React, { forwardRef } from 'react';
import { ArrowRight, CheckCircle } from 'lucide-react';

const Programs = forwardRef(({ getAnimationClass }, ref) => {
    return (
        <section id="programs" ref={ref} className={`py-24 lg:py-32 bg-gradient-to-br from-green-900 via-green-800 to-green-900 text-white relative overflow-hidden ${getAnimationClass('programs', 'fade-in')}`}>
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
                                {["Food preparation and cooking techniques", "Kitchen safety and sanitation", "Menu planning and cost control", "Professional presentation skills"].map((item, index) => (
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
                                {["Baking fundamentals and advanced techniques", "Yeast-raised products (breads, rolls)", "Cakes, cookies, and pastries production", "Dessert preparation and presentation", "Food hygiene and workplace safety"].map((item, index) => (
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
    );
});

export default Programs;