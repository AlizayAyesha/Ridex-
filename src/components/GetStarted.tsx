import React from 'react';
import { motion } from 'framer-motion';
import { startSteps } from '../data';

const GetStarted: React.FC = () => {
  return (
    <section className="section get-start">
      <div className="container">
        <h2 className="h2 section-title">Get started with 4 simple steps</h2>
        <ul className="get-start-list">
          {startSteps.map((step, index) => (
            <motion.li
              key={step.id}
              className="get-start-card"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.2, duration: 0.5 }}
              viewport={{ once: true }}
            >
              <div className={`card-icon ${step.iconClass}`}>
                {React.createElement('ion-icon', { name: index === 0 ? 'person-add-outline' : index === 1 ? 'car-outline' : index === 2 ? 'person-outline' : 'card-outline' })}
              </div>
              <h3 className="card-title">{step.title}</h3>
              <p className="card-text">{step.text}</p>
              {step.link && <a href="#" className="card-link">Get started</a>}
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default GetStarted;
