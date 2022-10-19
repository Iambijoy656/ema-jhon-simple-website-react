import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../../images/Logo.svg'
import './Header.css'
import { AuthContext } from "../Context/UserContext";

const Header = () => {
    const { user, logOut } = useContext(AuthContext)

    return (
        <nav className='header'>
            <img src={logo} alt="" />

            <div>
                <NavLink to="/">Shop</NavLink>
                <NavLink to="/oders">Orders</NavLink>
                <NavLink to="/inventory">Inventory</NavLink>
                <NavLink to="/about">About</NavLink>
                {user?.uid
                    ?

                    <NavLink className='logout' onClick={logOut}>LogOut</NavLink>

                    :
                    <>
                        <NavLink to="/login">Login</NavLink>
                        <NavLink to="/signup">SignUp</NavLink>
                    </>
                }
                <span className='user-email'>{user?.email}</span>

            </div>
        </nav>
    );
};

export default Header;