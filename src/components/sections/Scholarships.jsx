import React, { forwardRef } from 'react';
import { Award, Calendar, CheckCircle, ArrowRight } from 'lucide-react';

const Scholarships = forwardRef(({ getAnimationClass, smoothScroll }, ref) => {
    return (
        <section id="scholarships" ref={ref} className={`py-24 lg:py-32 bg-gray-100 relative overflow-hidden ${getAnimationClass('scholarships', 'fade-in')}`}>
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
                                <Calendar className="w-8 h-8 text-white" />
                            </div>
                            <h3 className="text-2xl lg:text-3xl font-bold text-gray-900">DBP RISE Scholarship Program</h3>
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
                        <a href="#contact" className="inline-flex items-center text-yellow-600 font-semibold hover:text-yellow-700 transition-colors duration-300" onClick={() => smoothScroll('contact')}>
                            Inquire about DBP RISE
                            <ArrowRight className="w-4 h-4 ml-2" />
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
});

export default Scholarships;