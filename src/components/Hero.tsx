import React from 'react';
import { motion } from 'framer-motion';

const Hero: React.FC = () => {
  return (
    <section className="section hero" id="home">
      <div className="container">
        <motion.div
          className="hero-content"
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="h1 hero-title">The easy way to takeover a lease</h2>
          <p className="hero-text">
            Live in New York, New Jerset and Connecticut!
          </p>
        </motion.div>
        <motion.form
          action=""
          className="hero-form"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <div className="input-wrapper">
            <label htmlFor="input-1" className="input-label">Car, model, or brand</label>
            <input type="text" name="car-model" id="input-1" className="input-field" placeholder="What car are you looking?" />
          </div>
          <div className="input-wrapper">
            <label htmlFor="input-2" className="input-label">Max. monthly payment</label>
            <input type="text" name="monthly-pay" id="input-2" className="input-field" placeholder="Add an amount in $" />
          </div>
          <div className="input-wrapper">
            <label htmlFor="input-3" className="input-label">Make Year</label>
            <input type="text" name="year" id="input-3" className="input-field" placeholder="Add a minimal make year" />
          </div>
          <button type="submit" className="btn">Search</button>
        </motion.form>
        <motion.div
          animate={{
            scale: [1, 1.05, 1],
          }}
          transition={{
            duration: 0.8,
            repeat: Infinity,
            repeatType: 'loop',
          }}
          style={{position: 'absolute', top: '100px', left: '60%', zIndex: -1}}
        >
          <div style={{
            position: 'absolute',
            top: '-50px',
            left: '-250px',
            width: '750px',
            height: '500px',
            backgroundImage: 'url(/backup/assets/images/bghero.png)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            zIndex: -2,
            borderRadius: '40px'
          }}></div>
          <video
            autoPlay
            muted
            loop
            className="hero-video"
            style={{
              width: '400px',
              height: '350px',
              objectFit: 'cover',
              objectPosition: 'bottom',
              borderRadius: '30px',
              position: 'relative',
              zIndex: 1
            }}
          >
            <source src="https://backend.wallpics.app/live/2025/08/31/4JSVHexeDho3MWtYlN0Xe9kkH8hzstZMo7JICGmD.mp4" type="video/mp4" />
          </video>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
