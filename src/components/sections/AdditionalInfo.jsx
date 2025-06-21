import React, { forwardRef } from 'react';
import { Users, BookOpen, Clock, Calendar, Globe, CheckCircle, Award, ArrowRight } from 'lucide-react'; // Import necessary icons

const AdditionalInfo = forwardRef(({ getAnimationClass, smoothScroll }, ref) => {
    return (
        <section id="additional-info" ref={ref} className={`py-24 lg:py-32 bg-gray-50 relative overflow-hidden ${getAnimationClass('additional-info', 'fade-in')}`}>
            {/* Background elements (optional, similar to other sections) */}
            <div className="absolute inset-0 opacity-10">
                <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-blue-200/20 rounded-full blur-3xl animate-pulse delay-300"></div>
                <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-orange-200/20 rounded-full blur-3xl animate-pulse delay-700"></div>
            </div>

            <div className="container mx-auto px-4 lg:px-6 relative z-10">
                <div className="text-center mb-16 lg:mb-20">
                    <div className="inline-block p-1 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full mb-6">
                        <div className="bg-white rounded-full px-6 py-2">
                            <span className="text-blue-600 font-semibold text-sm">SYSTEM OVERVIEW</span>
                        </div>
                    </div>
                    <h2 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
                        Key <span className="bg-gradient-to-r from-blue-600 to-blue-500 bg-clip-text text-transparent">System Features</span>
                    </h2>
                    <p className="text-xl lg:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
                        Insights into the powerful system enhancing your HTTA experience.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-16">
                    {/* Feature Card: Administrators */}
                    <div className={`bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 p-8 lg:p-10 border border-gray-200 ${getAnimationClass('additional-info', 'slide-in-left')}`}>
                        <div className="flex items-center space-x-5 mb-6">
                            <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center shadow-lg">
                                <Users className="w-8 h-8 text-white" />
                            </div>
                            <h3 className="text-2xl font-bold text-gray-900">Administrator Access</h3>
                        </div>
                        <p className="text-gray-700 leading-relaxed">
                            Our system provides dedicated access for **administrators** to efficiently manage student enrollments, program details, and scholarship applications. This ensures smooth operations and centralized control.
                        </p>
                    </div>

                    {/* Feature Card: Covises Programs & Assessments */}
                    <div className={`bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 p-8 lg:p-10 border border-gray-200 ${getAnimationClass('additional-info', 'fade-in-up')}`}>
                        <div className="flex items-center space-x-5 mb-6">
                            <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl flex items-center justify-center shadow-lg">
                                <BookOpen className="w-8 h-8 text-white" />
                            </div>
                            <h3 className="text-2xl font-bold text-gray-900">Covises Programs & Assessments</h3>
                        </div>
                        <p className="text-gray-700 leading-relaxed">
                            The system integrates programs offered by **Covises**, including their vital assessments. This allows for seamless management and tracking of all related activities and results.
                        </p>
                    </div>

                    {/* Feature Card: Assessment Center Applications */}
                    <div className={`bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 p-8 lg:p-10 border border-gray-200 ${getAnimationClass('additional-info', 'slide-in-right')}`}>
                        <div className="flex items-center space-x-5 mb-6">
                            <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl flex items-center justify-center shadow-lg">
                                <Calendar className="w-8 h-8 text-white" />
                            </div>
                            <h3 className="text-2xl font-bold text-gray-900">Assessment Center</h3>
                        </div>
                        <p className="text-gray-700 leading-relaxed">
                            A dedicated assessment center functionality is built into the system for various applications, ensuring efficient scheduling, tracking, and recording of assessment results.
                        </p>
                    </div>

                    {/* Feature Card: Scholarship Program Tracking */}
                    <div className={`bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 p-8 lg:p-10 border border-gray-200 ${getAnimationClass('additional-info', 'slide-in-left')}`}>
                        <div className="flex items-center space-x-5 mb-6">
                            <div className="w-16 h-16 bg-gradient-to-br from-teal-500 to-teal-600 rounded-xl flex items-center justify-center shadow-lg">
                                <Award className="w-8 h-8 text-white" />
                            </div>
                            <h3 className="text-2xl font-bold text-gray-900">Scholarship Program Management</h3>
                        </div>
                        <p className="text-gray-700 leading-relaxed">
                            The system facilitates booking and tracking of training and assessment activities related to our scholarship programs, including post-training assessments, for a comprehensive view of scholar progress.
                        </p>
                    </div>

                    {/* Feature Card: CADS/CIC Access & Certification */}
                    <div className={`bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 p-8 lg:p-10 border border-gray-200 ${getAnimationClass('additional-info', 'fade-in-up')}`}>
                        <div className="flex items-center space-x-5 mb-6">
                            <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center shadow-lg">
                                <CheckCircle className="w-8 h-8 text-white" />
                            </div>
                            <h3 className="text-2xl font-bold text-gray-900">CADS/CIC Certification</h3>
                        </div>
                        <p className="text-gray-700 leading-relaxed">
                            Qualified CADS personnel will have tailored access to relevant data. CIC will also utilize the system to conduct assessments and certify individuals, streamlining the certification process.
                        </p>
                    </div>

                    {/* Feature Card: Upcoming Certifications & Tracking System */}
                    <div className={`bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 p-8 lg:p-10 border border-gray-200 ${getAnimationClass('additional-info', 'slide-in-right')}`}>
                        <div className="flex items-center space-x-5 mb-6">
                            <div className="w-16 h-16 bg-gradient-to-br from-red-500 to-red-600 rounded-xl flex items-center justify-center shadow-lg">
                                <Globe className="w-8 h-8 text-white" />
                            </div>
                            <h3 className="text-2xl font-bold text-gray-900">Future Certifications & Alumni Tracking</h3>
                        </div>
                        <p className="text-gray-700 leading-relaxed">
                            Prepare for upcoming certifications like heavy machinery, forklift, and backhoe operation. A robust tracking system is suggested to monitor graduate employment status and job types.
                        </p>
                        <button onClick={() => smoothScroll('contact')} className="mt-6 inline-flex items-center text-blue-600 font-semibold hover:text-blue-700 transition-colors duration-300">
                            Inquire about Future Programs
                            <ArrowRight className="w-4 h-4 ml-2" />
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
});

export default AdditionalInfo;