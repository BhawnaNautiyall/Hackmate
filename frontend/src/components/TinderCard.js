import React from 'react';
import { motion, useMotionValue, useTransform, useAnimation } from 'framer-motion';
import './TinderCard.css';

function TinderCard({ card, onSwipe }) {
  const x = useMotionValue(0);
  const controls = useAnimation();

  const rotate = useTransform(x, [-200, 0, 200], [-10, 0, 10]);
  const opacity = useTransform(x, [-150, 0, 150], [0, 1, 0]);

  const handleDragEnd = (event, info) => {
    if (info.offset.x > 100) {
      controls.start({ x: 500, opacity: 0, transition: { duration: 0.3 } });
      onSwipe('right', card.id);
    } else if (info.offset.x < -100) {
      controls.start({ x: -500, opacity: 0, transition: { duration: 0.3 } });
      onSwipe('left', card.id);
    } else {
      controls.start({ x: 0, rotate: 0, transition: { type: 'spring', stiffness: 500, damping: 30 } });
    }
  };

  return (
    <motion.div
      drag="x"
      dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
      dragElastic={0.8}
      style={{
        x,
        rotate,
        opacity,
        backgroundColor: card.color || '#e89f9f' // fallback color
      }}
      onDragEnd={handleDragEnd}
      animate={controls}
      className="custom-card"
    >
      <div className="card-content">
        <h3>{card.name}</h3>
        <p>Email: {card.email}</p>
        <p>Branch: {card.branch}</p>
        <p>Year: {card.year}</p>
        <p>Skills: {card.skills}</p>
      </div>
    </motion.div>
  );
}

export default TinderCard;