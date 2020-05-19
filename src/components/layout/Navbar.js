import React  from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom';
const Navbar = ({title}) => { 
    return (
        <nav className="navbar bg-primary">
            <h1>{title}</h1>
             <Link to='/'>home</Link> | 
             <Link to='/about'>about</Link>  | 
      
        </nav>
    ) 
}
Navbar.defaultProps = {
    title: 'Github'
};
Navbar.propTypes = {
    title: PropTypes.string.isRequired
};
export default Navbar;