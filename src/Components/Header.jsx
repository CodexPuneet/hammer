import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../Assets/DS_logo.png';
import './Header.css'; // Import the CSS file for styles
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuItemOption,
  MenuGroup,
  MenuOptionGroup,
  MenuDivider,
} from '@chakra-ui/react'
import DehazeIcon from '@mui/icons-material/Dehaze';


const Header = () => {
  return (
    <div className="container">
      {/* Logo */}
      <img src={logo} alt="Logo" className="logo" />

      {/* Navigation */}
      <nav>
        <ul className="navList">
          <li className="navItem">
            <Link to="/" className="navLink">Home</Link>
          </li>
          <li className="navItem">
            <Link to="/about" className="navLink">About</Link>
          </li>
      
          <li className="navItem">
            <Link to="/contact" className="navLink">Contact</Link>
          </li>
        </ul>
      </nav>
      <div className='mobilemenu'>
      <Menu >
        <MenuButton as="button" className="navLink">
       <DehazeIcon />
        </MenuButton>
        <MenuList style={{ backgroundColor: '#a5d3d0', width: '50px'   }}>
          <MenuItem style={{ backgroundColor: '#a5d3d0' }}>
            <Link to="/" className="navLink">Home</Link>
          </MenuItem>
          <MenuItem style={{ backgroundColor: '#a5d3d0' }}>
            <Link to="/about" className="navLink">About</Link>
          </MenuItem>
          <MenuItem style={{ backgroundColor: '#a5d3d0' }}>
            <Link to="/contact" className="navLink">Contact</Link>
          </MenuItem>
        </MenuList>
      </Menu>
      </div>
    </div>
  );
}

export default Header;
