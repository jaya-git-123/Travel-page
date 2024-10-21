import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Img1 from '../Assets/Exploring the Serene Beaches of Bali.webp';
import Img2 from "../Assets/A Journey Through the Streets of Tokyo.jpg";
import Img3 from "../Assets/Hiking the Majestic Alps.webp";
import Img4 from "../Assets/Discovering Hidden Gems in Marrakech.jpg";
import Gallery1 from '../Assets/Bali Beach.jpg';
import Gallery2 from '../Assets/Tokyo Street.jpg';
import Gallery3 from '../Assets/Alps Mountain.jpg';
import Gallery4 from '../Assets/Marrakech Market.jpg';
import Gallery5 from '../Assets/Paris.jpg';
import Gallery6 from '../Assets/New York Skyline.jpg';

const posts = [
  { id: 1, title: 'Exploring the Serene Beaches of Bali', image: Img1 },
  { id: 2, title: 'A Journey Through the Streets of Tokyo', image: Img2 },
  { id: 3, title: 'Hiking the Majestic Alps', image: Img3 },
  { id: 4, title: 'Discovering Hidden Gems in Marrakech', image: Img4 },
];

const gallery = [
  { id: 1, src: Gallery1, alt: 'Bali Beach' },
  { id: 2, src: Gallery2, alt: 'Tokyo Street' },
  { id: 3, src: Gallery3, alt: 'Alps Mountain' },
  { id: 4, src: Gallery4, alt: 'Marrakech Market' },
  { id: 5, src: Gallery5, alt: 'Paris Eiffel Tower' },
  { id: 6, src: Gallery6, alt: 'New York Skyline' },
];

export default function Component() {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <div className="App">
      <header className="App-header">
        <div className="container">
          <h1 className="animate-fade-in">Destination Inspiration</h1>
          <p className="animate-slide-up">Exploring the world, one adventure at a time</p>
        </div>
      </header>

      <main className="container">
        <section className="featured-posts">
          <h2>Featured Posts</h2>
          <div className="post-grid">
            {posts.map((post) => (
              <motion.div
                key={post.id}
                className="post-card"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <img src={post.image} alt={post.title} className="post-image" />
                <div className="post-content">
                  <h3>{post.title}</h3>
                  <a href="#" className="read-more">Read more</a>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        <section className="latest-adventure">
          <h2>Latest Adventure</h2>
          <div className="adventure-card">
            <h3>A Week in the Heart of the Amazon</h3>
            <p>
              Venturing deep into the lush Amazon rainforest, we embarked on a journey that would challenge our
              perceptions and connect us with nature in ways we never imagined. From encounters with exotic wildlife
              to nights spent under the canopy of stars, every moment was filled with wonder and discovery.
            </p>
            <p>
              Our guide, a local shaman with decades of experience, shared ancient wisdom about the forest's
              medicinal plants and the delicate balance of this complex ecosystem. We learned about conservation
              efforts and the importance of preserving this vital "lung of the Earth" for future generations.
            </p>
            <a href="#" className="read-more">Continue reading...</a>
          </div>
        </section>

        <section className="photo-gallery">
          <h2>Photo Gallery</h2>
          <div className="gallery-grid">
            {gallery.map((image) => (
              <motion.div
                key={image.id}
                className="gallery-item"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
                onClick={() => setSelectedImage(image)}
              >
                <img src={image.src} alt={image.alt} />
              </motion.div>
            ))}
          </div>
        </section>
      </main>

      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="modal-overlay"
            onClick={() => setSelectedImage(null)}
          >
            <motion.div
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              className="modal-content"
            >
              <h2>{selectedImage.alt}</h2>
              <img src={selectedImage.src} alt={selectedImage.alt} />
              <button className="close-button" onClick={() => setSelectedImage(null)}>
                &times;
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <footer>
        <div className="container">
          <p>&copy; 2024 Destination Inspiration. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
