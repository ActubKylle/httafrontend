import React, { forwardRef } from 'react';
import { Phone, Mail, MapPin, Clock, ArrowRight } from 'lucide-react';

const Contact = forwardRef(({ getAnimationClass, handleSubmit }, ref) => {
    return (
        <section id="contact" ref={ref} className={`py-24 lg:py-32 bg-gradient-to-br from-green-700 to-green-900 text-white relative overflow-hidden ${getAnimationClass('contact', 'fade-in')}`}>
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
                                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15783.181829631627!2d124.63060675!3d8.47196015!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x32ff87019241b315%3A0x63390c5c64c74823!2sCagayan%20de%20Oro%2C%20Northern%20Mindanao%2C%20Philippines!5e0!3m2!1sen!2sph!4v1701321000000!5m2!1sen!2sph" // Placeholder
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
    );
});

export default Contact;