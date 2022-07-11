import React from "react";
import { motion } from "framer-motion";

function Header(){
  return (
    <motion.div
      whileInView={{ x: [-100, 0], opacity: [0,1]}}
      transition={{duration: 1}}
    >
      <h1>Help Queue</h1>
    </motion.div>
  );
}

export default Header;