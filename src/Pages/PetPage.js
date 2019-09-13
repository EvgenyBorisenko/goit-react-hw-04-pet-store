import React from 'react';
// import PropTypes from 'prop-types';
import ReactRouterPropTypes from 'react-router-prop-types';
import pets from '../assets/pets.json';
import Pet from '../Components/Pet';
import css from '../Styles.module.css';

const getPetObj = (arr, id) => arr.find(el => el.id === id);

const PetPage = ({ match, history }) => {
  const { id } = match.params;
  return (
    <div className={css.container}>
      <button
        className={css.returnButton}
        type="button"
        onClick={() => history.push('/pets')}
      >
        Return
      </button>
      <Pet {...getPetObj(pets, id)} />
    </div>
  );
};

PetPage.propTypes = {
  history: ReactRouterPropTypes.history.isRequired,
  match: ReactRouterPropTypes.match.isRequired,
};

export default PetPage;
