import React from 'react';
import { Outlet, Link } from "react-router-dom";



  const Navbar = () => {
    return (
      <>
      <nav style={styles.nav}>
        <ul style={styles.ul} >
          <li>
            <Link style={styles.link}   to="/">Home</Link>
          </li>
          <li>
            <Link style={styles.link}   to="/about">About</Link>
          </li>
          <li>
            <Link style={styles.link}   to="/services">Service</Link>
          </li>
          <li>
            <Link style={styles.link}   to="/contact">Contact</Link>
          </li>
        
        </ul>
      </nav>

      <Outlet />
    </>
    );
  };
  
  const styles = {
    nav: {
      padding: '10px',
      backgroundColor: '#333',
      color: '#fff',
    },
    ul: {
      listStyleType: 'none',
      display: 'flex',
      justifyContent: 'space-around',
      margin: 0,
      padding: 0,
    },
    li: {
      margin: '0 10px',
    },
    link: {
      textDecoration: 'none',
      color: '#fff',
    },
   };
  
  export default Navbar;