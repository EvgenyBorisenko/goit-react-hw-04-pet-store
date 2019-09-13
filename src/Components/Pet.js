import React from 'react';
import PropTypes from 'prop-types';
import styles from './Pet.module.css';

const Pet = ({ image, name, age, gender, color, breed, description, alt }) => (
  <>
    <h2>All about {name}</h2>
    <div className={styles.wrapp}>
      <img src={image} alt={alt} className={styles.image} />
      <div>
        <p className={styles.text}>
          Age: <span className={styles.data}>{age}</span>
        </p>
        <p className={styles.text}>
          Geder: <span className={styles.data}>{gender}</span>
        </p>
        <p className={styles.text}>
          Color: <span className={styles.data}>{color}</span>
        </p>
        <p className={styles.text}>
          Breed: <span className={styles.data}>{breed}</span>
        </p>
      </div>
    </div>
    <p>{description}</p>
  </>
);

Pet.defaultProps = {
  alt: `${Pet.name} photo`,
};

Pet.propTypes = {
  name: PropTypes.string.isRequired,
  age: PropTypes.number.isRequired,
  gender: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  breed: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  alt: PropTypes.string,
};

export default Pet;
