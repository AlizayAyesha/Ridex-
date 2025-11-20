import React from 'react';
import { motion } from 'framer-motion';
import { cars } from '../data';

const FeaturedCars: React.FC = () => {
  return (
    <section className="section featured-car" id="featured-car">
      <div className="container">
        <div className="title-wrapper">
          <h2 className="h2 section-title">Featured cars</h2>
          <a href="#" className="featured-car-link">
            <span>View more</span>
            {React.createElement('ion-icon', { name: 'arrow-forward-outline' })}
          </a>
        </div>
        <ul className="featured-car-list">
          {cars.map((car, index) => (
            <motion.li
              key={car.id}
              className="featured-car-card"
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
            >
              <figure className="card-banner">
                <img src={car.image} alt={`${car.name} ${car.year}`} loading="lazy" width="440" height="300" className="w-100" />
              </figure>
              <div className="card-content">
                <div className="card-title-wrapper">
                  <h3 className="h3 card-title">
                    <a href="#">{car.name}</a>
                  </h3>
                  <data className="year" value={car.year.toString()}>{car.year}</data>
                </div>
                <ul className="card-list">
                  <li className="card-list-item">
                    {React.createElement('ion-icon', { name: 'people-outline' })}
                    <span className="card-item-text">{car.features.people} People</span>
                  </li>
                  <li className="card-list-item">
                    {React.createElement('ion-icon', { name: 'flash-outline' })}
                    <span className="card-item-text">{car.features.fuel}</span>
                  </li>
                  <li className="card-list-item">
                    {React.createElement('ion-icon', { name: 'speedometer-outline' })}
                    <span className="card-item-text">{car.features.mileage}</span>
                  </li>
                  <li className="card-list-item">
                    {React.createElement('ion-icon', { name: 'hardware-chip-outline' })}
                    <span className="card-item-text">{car.features.transmission}</span>
                  </li>
                </ul>
                <div className="card-price-wrapper">
                  <p className="card-price">
                    <strong>${car.price}</strong> / month
                  </p>
                  <button className="btn fav-btn" aria-label="Add to favourite list">
                    {React.createElement('ion-icon', { name: 'heart-outline' })}
                  </button>
                  <button className="btn">Rent now</button>
                </div>
              </div>
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  );
};


export default FeaturedCars;
