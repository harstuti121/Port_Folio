import React from 'react';
import { motion } from 'framer-motion';

const Text = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      Graphic Designer at Matrix Technical Society
    </motion.div>
  );
};

const App = () => {
  return (
    <div className="App">
      <AnimatedText />
    </div>
  );
};

export default App;
