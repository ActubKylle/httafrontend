import React from 'react';
import { motion } from 'framer-motion'; // For advanced animations

// Install framer-motion: npm install framer-motion or yarn add framer-motion

const SplashScreen = ({ onAnimationComplete }) => {
    // Variants for the main container fading out
    const containerVariants = {
        hidden: { opacity: 1 },
        visible: {
            opacity: 0,
            transition: {
                delay: 2.5, // Total animation time before starting fade out
                duration: 0.8, // Fade out duration
                ease: "easeOut"
            }
        }
    };

    // Variants for the logo scaling and fading in/out
    const logoVariants = {
        hidden: { scale: 0.5, opacity: 0, y: '50px' },
        visible: {
            scale: 1,
            opacity: 1,
            y: '0px',
            transition: {
                type: "spring", // More natural spring-like animation
                stiffness: 150,
                damping: 10,
                delay: 0.2, // Delay before logo animation starts
                duration: 1 // How long the logo takes to animate in
            }
        },
        exit: {
            scale: 1.2, // Slightly scale up before fading out
            opacity: 0,
            transition: {
                delay: 1.8, // Start fading out before container, for a smoother transition
                duration: 0.7,
                ease: "easeIn"
            }
        }
    };

    // Variants for the motto text
    const mottoVariants = {
        hidden: { opacity: 0, y: '20px' },
        visible: {
            opacity: 1,
            y: '0px',
            transition: {
                delay: 1.0, // Appear after logo is almost fully visible
                duration: 0.6,
                ease: "easeOut"
            }
        },
        exit: {
            opacity: 0,
            y: '-20px',
            transition: {
                delay: 1.5, // Start fading out before container
                duration: 0.7,
                ease: "easeIn"
            }
        }
    };

    return (
        <motion.div
            className="fixed inset-0 bg-gradient-to-br from-green-900 via-green-800 to-yellow-700 flex flex-col items-center justify-center z-[9999]"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            onAnimationComplete={() => {
                // This callback is for the container's *exit* animation,
                // but we trigger the hide state from App.jsx after a delay
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
                exit="exit" // Use exit animation when component is removed
            >
                {/* Logo with a more defined background and subtle glow */}
                <div className="relative w-48 h-48 lg:w-64 lg:h-64 bg-gradient-to-br from-green-500 to-green-700 rounded-full flex items-center justify-center shadow-2xl overflow-hidden">
                    {/* Inner glowing circle */}
                    <div className="absolute inset-4 rounded-full bg-green-400 opacity-20 blur-xl animate-pulse-slow"></div>
                    <img
                        src="https://scontent-sea1-1.xx.fbcdn.net/v/t1.6435-9/103440114_255080559249682_8395978773242303870_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeH8bHCsMO8F6RHT8ISmDAH_IfZmjKVZ9mYh9maMpVn2ZqXe0dQ0rj6wMS12GuC3s6E5-_i_Eodbts-J2pHQars6&_nc_ohc=Tkp9Wr_hCH8Q7kNvwGTuKt0&_nc_oc=AdnYu_B82t5hZc2IOlsDbIbsYA1IT6Ed3LjMQ0m0fgRNBEeUSJ9-Sm2zMdjTdZlYXL0&_nc_zt=23&_nc_ht=scontent-sea1-1.xx&_nc_gid=pAJUEUyUxyfnka5VmbdqXw&oh=00_AfMSmkUR-pF-pS1Yo68nN2m0m6J7d-wP4q9l2F-5qFWShQ&oe=687C5ACC"
                        alt="Highlands Technical Training Academy Logo"
                        className="w-36 h-36 lg:w-48 lg:h-48 object-contain relative z-10"
                    />
                </div>
                <motion.p
                    className="mt-8 text-3xl md:text-4xl lg:text-5xl font-bold text-white text-center tracking-wide"
                    variants={mottoVariants}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                >
                   Highlands Technical Training Academy INC
                </motion.p>
            </motion.div>
        </motion.div>
    );
};

export default SplashScreen;