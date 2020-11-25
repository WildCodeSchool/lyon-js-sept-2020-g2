import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import './style/Navbar.scss';
import CustomizedMenus from './Burger';
import logo from './img/logo.png';

const Navbar = () => {
  return (
    <header className="header">
      <nav className="menu" role="navigation">
        <div className="navbar-left">
          <Link to="/">
            <img className="logo" src={logo} alt="logo" />
          </Link>
        </div>

        <div className="navbar-right">
          <div>
            <CustomizedMenus />
          </div>
          <ul className="lien-navbar">
            <li>
              <Link className="liste" to="/">
                Accueil
              </Link>
            </li>
            <li>
              <Link className="liste" to="/ou-partir">
                Où partir ?
              </Link>
            </li>
            <li>
              <Link className="liste" to="/ou-sortir">
                Où sortir ?
              </Link>
            </li>
            <li>
              {useLocation().pathname === '/ou-partir' ? (
                <HashLink className="liste" to="/#news">
                  Actualités
                </HashLink>
              ) : (
                <HashLink className="liste" smooth to="/#news">
                  Actualités
                </HashLink>
              )}
            </li>
            <li>
              {useLocation().pathname === '/ou-partir' ? (
                <HashLink className="liste" to="/#contact">
                  Contact
                </HashLink>
              ) : (
                <HashLink className="liste" smooth to="/#contact">
                  Contact
                </HashLink>
              )}
            </li>
            <li>
              {useLocation().pathname === '/ou-partir' ? (
                <HashLink className="liste" to="/#about-us">
                  À Propos
                </HashLink>
              ) : (
                <HashLink className="liste" smooth to="/#about-us">
                  À Propos
                </HashLink>
              )}
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
