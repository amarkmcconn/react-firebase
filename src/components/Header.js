import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import styled from 'styled-components';

const HelpQueueHeader = styled.h1`
  font-size: 24px;
  text-align: center;
  color: white;
`;
  

function Header(){
  return (
    <React.Fragment>
      <HelpQueueHeader>
        <motion.div
          whileInView={{ x: [-100, 0], opacity: [0,1]}}
          transition={{duration: 1}}
        >
        <h1>Help Queue</h1>
        </motion.div>
      </HelpQueueHeader>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/signin">Sign In</Link>
            </li>
          </ul>
    </React.Fragment>
  );
}

export default Header;