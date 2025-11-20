import React from 'react';
import { motion } from 'framer-motion';

const AboutUs: React.FC = () => {
  return (
    <section className="section about">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="h2 section-title">About Us</h2>
          <p className="about-text">
            We are a leading car rental company committed to providing exceptional experiences for our customers. With years of expertise in the automotive industry, we offer a wide range of vehicles to suit every need and occasion. Our mission is to make transportation easy, affordable, and reliable for everyone.
          </p>
          <p className="about-text">
            Whether you're planning a family vacation, a business trip, or need a car for daily commuting, we have the perfect solution. Our fleet includes the latest models, all meticulously maintained and ready for the road. Trust us to get you where you need to go safely and comfortably.
          </p>
        </motion.div>
        <div className="hero-banner"></div>
      </div>
    </section>
  );
};

export default AboutUs;
