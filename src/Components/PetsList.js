import React from 'react';
import PropTypes from 'prop-types';
import { Link, withRouter } from 'react-router-dom';
import ReactRouterPropTypes from 'react-router-prop-types';
import css from '../Styles.module.css';

const PetsList = ({ pets = [], match }) => (
  <ul className={css.petsList}>
    {pets.map(pet => (
      <li key={pet.id} className={css.petsItem}>
        <Link to={`${match.path}/${pet.id}`} className={css.petLink}>
          <img src={pet.image} alt="pet" className={css.petImage} />
          <h2 className={css.petName}>{pet.name}</h2>
        </Link>
      </li>
    ))}
  </ul>
);

PetsList.propTypes = {
  pets: PropTypes.arrayOf(PropTypes.object.isRequired).isRequired,
  match: ReactRouterPropTypes.match.isRequired,
};

export default withRouter(PetsList);
