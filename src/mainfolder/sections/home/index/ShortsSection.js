import React from 'react';
import Link from "next/link";
import { motion } from 'framer-motion';
import Tilt from 'react-parallax-tilt';

const ShortsSection = () => {
    return (
        <div className="bg-black ">
            <section className="shorts-section-wrapper">
                

                <div >
                    <div className="row align-items-center justify-content-between">
                        {/* Left Side */}
                        <motion.div
                            className="col-md-6"
                            initial={{ x: -80, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ duration: 1 }}
                        >
                            <h1 className="shorts-section-title">Oxmite's Do</h1>
                            <h2 className="shorts-section-subtitle">
                                {['Build', 'Scale', 'Launch'].map((word, i) => (
                                    <motion.span
                                        key={word}
                                        className="shorts-section-animated-word"
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: 0.3 + i * 0.2 }}
                                    >
                                        {word}.
                                    </motion.span>
                                ))}
                            </h2>
                            <p className="shorts-section-description">
                                We craft scalable web and mobile solutions using the latest in AI, cloud, and modern tech stacks. Partner with us to bring your ideas to life.
                            </p>

                            <div className="d-flex gap-2 mt-4 flex-wrap">
                                <Link href="/contact-us">
                                    <motion.button
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                        className="shorts-section-btn primary"
                                    >
                                        Contact Us
                                    </motion.button>
                                </Link>

                                <Link href="/services">
                                    <motion.button
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                        className="shorts-section-btn secondary"
                                    >
                                        Our Services
                                    </motion.button>
                                </Link>
                            </div>
                        </motion.div>

                        {/* Right Side with GIFs */}
                        <div className="col-md-6 d-none d-md-flex justify-content-center position-relative shorts-section-gif-container">
                            {/* GIF 1: Develop */}
                            <motion.div
                                initial={{ y: 100, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ delay: 1, duration: 0.7 }}
                                className="shorts-gif gif-develop"
                            >
                                <Tilt tiltMaxAngleX={10} tiltMaxAngleY={10}>
                                    <motion.div
                                        animate={{ rotate: [-10, 10, -10] }}
                                        transition={{
                                            duration: 2,
                                            repeat: Infinity,
                                            repeatType: 'loop',
                                            ease: 'easeInOut'
                                        }}
                                        className="shorts-gif-wrapper glass"
                                    >
                                        <img
                                            src="https://media.giphy.com/media/qgQUggAC3Pfv687qPC/giphy.gif"
                                            alt="coding"
                                            className="shorts-gif-img"
                                        />
                                    </motion.div>
                                </Tilt>
                                <p className="shorts-gif-label">Develop</p>
                            </motion.div>

                            {/* GIF 2: Deploy */}
                            <motion.div
                                initial={{ scale: 0.7, opacity: 0 }}
                                animate={{ scale: 1, opacity: 1 }}
                                transition={{ delay: 1.4, duration: 0.6 }}
                                className="shorts-gif gif-deploy"
                            >
                                <Tilt>
                                    <motion.div className="shorts-gif-wrapper shadow-pink">
                                        <img
                                            src="https://media.giphy.com/media/l3vR85PnGsBwu1PFK/giphy.gif"
                                            alt="deploy"
                                            className="shorts-gif-img large"
                                        />
                                    </motion.div>
                                </Tilt>
                                <p className="shorts-gif-label">Deploy</p>
                            </motion.div>

                            {/* GIF 3: Innovate */}
                            <motion.div
                                initial={{ y: -100, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ delay: 1.8, duration: 0.7 }}
                                className="shorts-gif gif-innovate"
                            >
                                <Tilt>
                                    <div className="shorts-gif-wrapper glass rotated">
                                        <img
                                            src="https://media.giphy.com/media/U3qYN8S0j3bpK/giphy.gif"
                                            alt="ai"
                                            className="shorts-gif-img"
                                        />
                                    </div>
                                </Tilt>
                                <p className="shorts-gif-label rotated-text">Innovate</p>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default ShortsSection;