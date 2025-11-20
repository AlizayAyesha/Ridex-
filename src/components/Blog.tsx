import React from 'react';
import { motion } from 'framer-motion';
import { blogPosts } from '../data';

const Blog: React.FC = () => {
  return (
    <section className="section blog" id="blog">
      <div className="container">
        <h2 className="h2 section-title">Our Blog</h2>
        <ul className="blog-list has-scrollbar">
          {blogPosts.map((post, index) => (
            <motion.li
              key={post.id}
              className="blog-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
            >
              <figure className="card-banner">
                <a href="#">
                  <img src={post.image} alt={post.title} loading="lazy" className="w-100" />
                </a>
                <a href="#" className="btn card-badge">{post.badge}</a>
              </figure>
              <div className="card-content">
                <h3 className="h3 card-title">
                  <a href="#">{post.title}</a>
                </h3>
                <div className="card-meta">
                  <div className="publish-date">
                    {React.createElement('ion-icon', { name: 'time-outline' })}
                    <time dateTime="2022-01-14">{post.date}</time>
                  </div>
                  <div className="comments">
                    {React.createElement('ion-icon', { name: 'chatbubble-ellipses-outline' })}
                    <data value={post.comments.toString()}>{post.comments}</data>
                  </div>
                </div>
              </div>
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Blog;
