import React from 'react';
import { motion } from 'framer-motion';

const SplashScreen = ({ onAnimationComplete }) => {
    const containerVariants = {
        hidden: { opacity: 1 },
        visible: {
            opacity: 0,
            transition: {
                delay: 2.5,
                duration: 1.0,
                ease: "easeOut"
            }
        }
    };

    const logoVariants = {
        hidden: { scale: 0.5, opacity: 0, y: '50px' },
        visible: {
            scale: 1.1,
            opacity: 1,
            y: '0px',
            transition: {
                type: "spring",
                stiffness: 170,
                damping: 12,
                delay: 0.3,
                duration: 1.2
            }
        },
        exit: {
            scale: 1.3,
            opacity: 0,
            transition: {
                delay: 1.7,
                duration: 0.8,
                ease: "easeIn"
            }
        }
    };

    const mottoVariants = {
        hidden: { opacity: 0, y: '30px' },
        visible: {
            opacity: 1,
            y: '0px',
            transition: {
                delay: 1.2,
                duration: 0.7,
                ease: "easeOut"
            }
        },
        exit: {
            opacity: 0,
            y: '-30px',
            transition: {
                delay: 1.4,
                duration: 0.6,
                ease: "easeIn"
            }
        }
    };

    return (
        <motion.div
            // Changed background gradient to green/gold tones
            className="fixed inset-0 bg-gradient-to-br from-green-900 via-green-800 to-yellow-700 flex flex-col items-center justify-center z-[9999]"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            onAnimationComplete={() => {
                if (onAnimationComplete) {
                    onAnimationComplete();
                }
            }}
        >
            <motion.div
                className="relative flex flex-col items-center justify-center p-8 rounded-full"
                variants={logoVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
            >
                <div className="relative w-52 h-52 lg:w-72 lg:h-72 bg-gradient-to-br from-green-600 to-yellow-600 rounded-full flex items-center justify-center shadow-2xl overflow-hidden">
                    {/* Inner glowing circle adjusted to a softer gold/green blur */}
                    <div className="absolute inset-4 rounded-full bg-yellow-300 opacity-30 blur-xl animate-pulse-slow"></div>
                    <img
                        src="https://scontent-sea1-1.xx.fbcdn.net/v/t1.6435-9/103440114_255080559249682_8395978773242303870_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeH8bHCsMO8F6RHT8ISmDAH_IfZmjKVZ9mYh9maMpVn2ZqXe0dQ0rj6wMS12GuC3s6E5-_i_Eodbts-J2pHQars6&_nc_ohc=Tkp9Wr_hCH8Q7kNvwGTuKt0&_nc_oc=AdnYu_B82t5hZc2IOlsDbIbsYA1IT6Ed3LjMQ0m0fgRNBEeUSJ9-Sm2zMdjTdZlYXL0&_nc_zt=23&_nc_ht=scontent-sea1-1.xx&_nc_gid=pAJUEUyUxyfnka5VmbdqXw&oh=00_AfMSmkUR-pF-pS1Yo68nN2m0m6J7d-wP4q9l2F-5qFWShQ&oe=687C5ACC"
                        alt="Highlands Technical Training Academy Logo"
                        className="w-40 h-40 lg:w-56 lg:h-56 object-contain relative z-10"
                    />
                    {/* Border pulse remains white for contrast, but you could change it */}
                    <div className="absolute inset-0 border-4 border-opacity-40 border-white rounded-full animate-pulse" style={{ animationDuration: '6s' }}></div>
                </div>
                <motion.p
                    className="mt-8 text-4xl md:text-5xl lg:text-6xl font-extrabold text-white text-center tracking-wide uppercase"
                    variants={mottoVariants}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                >
                    HTTA INC.
                </motion.p>
                <motion.p
                    className="mt-4 text-xl md:text-2xl lg:text-3xl font-semibold text-white text-center tracking-wide"
                    variants={mottoVariants}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                >
                    Empowering Futures
                </motion.p>
            </motion.div>
        </motion.div>
    );
};

export default SplashScreen;