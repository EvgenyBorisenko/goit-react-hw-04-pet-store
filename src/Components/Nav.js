import React from 'react';
import { NavLink } from 'react-router-dom';
import css from '../Styles.module.css';

const Nav = () => (
  <ul className={css.nav}>
    <li>
      <NavLink to="/" exact className={css.link} activeClassName={css.active}>
        Home
      </NavLink>
    </li>
    <li>
      <NavLink to="/pets" className={css.link} activeClassName={css.active}>
        Pets
      </NavLink>
    </li>
    <li>
      <NavLink to="/about" className={css.link} activeClassName={css.active}>
        About
      </NavLink>
    </li>
  </ul>
);

export default Nav;
