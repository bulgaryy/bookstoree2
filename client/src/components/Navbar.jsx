import React from 'react';
import { Link } from 'react-router-dom';
import '../css/Navbar.css';

const Navbar = ({ role }) => {
    return (
        <nav className='navbar'>
            <div className='navbar-left'>
                <Link to="/" className='navbar-brand'> 
                    <img src="Images/logo1.png" alt="Logo" height="70" width="150" style={{ marginTop: '-15px' }} />
                </Link>
            </div>
            <div className='navbar-right'> 
                {role === "" ? (
                    <>
                        <Link to="/login" className='navbar-link'>LOGIN</Link>
                        <Link to="/addstudent" className='navbar-link'>REGISTER</Link>
                    </>
                ) : (
                    <>
                        <Link to="/books" className='navbar-link'>BOOKS</Link>
                        {role === "admin" && (
                            <>
                                <Link to="/addbook" className='navbar-link'>ADD BOOK</Link>
                                <Link to="/dashboard" className='navbar-link'>DASHBOARD</Link>
                            </>
                        )}
                        <Link to="/logout" className='navbar-link'>LOGOUT</Link>
                    </>
                )}
            </div>
        </nav>
    );
};

export default Navbar;
