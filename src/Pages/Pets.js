import React from 'react';
import PetsList from '../Components/PetsList';
// import PropTypes from 'prop-types';
import pets from '../assets/pets.json';
import css from '../Styles.module.css';

const Pets = () => (
  <div className={css.container}>
    <h2>Avaiable pets</h2>
    <PetsList pets={pets} />
  </div>
);

export default Pets;
