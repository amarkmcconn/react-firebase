import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

function Header(){
  return (
    <React.Fragment>
      <motion.div
        whileInView={{ x: [-100, 0], opacity: [0,1]}}
        transition={{duration: 1}}
      >
        <h1>Help Queue</h1>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/signin">Sign In</Link>
            </li>
          </ul>
      </motion.div>
    </React.Fragment>
  );
}

export default Header;