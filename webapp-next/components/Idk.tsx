'use client';

import React, { useState } from 'react';
import { motion, useAnimation } from 'framer-motion';

const TweetAnimation: React.FC = () => {
  const controls = useAnimation();
  const [originalTweet, setOriginalTweet] = useState('Just had a great day!');

  const transformTweets = async () => {
    // Animate the original tweet fragments
    await controls.start({
      opacity: 0,
      transition: { duration: 0.5 },
    });

    // Update to the new banger tweet and animate it
    setOriginalTweet('Wow, this app is amazing!');
    await controls.start({
      opacity: 1,
      transition: { duration: 0.5 },
    });
  };

  return (
    <div>
      <motion.div initial={{ opacity: 1 }} animate={controls}>
        {originalTweet.split('').map((char, index) => (
          <motion.span key={index} style={{ display: 'inline-block' }}>
            {char}
          </motion.span>
        ))}
      </motion.div>
      <button onClick={transformTweets}>Generate Banger</button>
    </div>
  );
};

export default TweetAnimation;
