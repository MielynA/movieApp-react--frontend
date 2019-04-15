import React from 'react';
import { Link } from 'react-router-dom';
import '../style/navbar.css';

const Navbar = (props) => {
    return (
        <React.Fragment>
            <nav className="navbar navbar-dark  navstyle" style={{ backgroundColor: '#00008b', fontFamily: 'sans-serif' }}>
                <Link className="navbar-brand " to='/'>Home</Link>
                <div>
                    <Link className="navbar-brand nav-link" to='/movies'>All Movies <span class="sr-only">(current)</span></Link>
                    <Link className="navbar-brand nav-link" to='/movies/genres'>By Genre</Link>
                </div>
            </nav>
        </React.Fragment>
    );

}


export default Navbar; 