import React from 'react';
import PropTypes from 'prop-types';
import CardStyle from './CardStyle';

const Card = ({ data, edit }) => (
  <CardStyle>
    <img src={`${process.env.DOMAIN}${data.logoUrl}`} alt={data.name} />
    <div className='store-info'>
      <h5 className='store-label'>STORE INFO.</h5>
      <ul>
        <li>
          <p className='store-name'>
            <span className='label store-name__label'>Name:</span>
            <span className='text store-name__text'>{data.name}</span>
          </p>
        </li>
        <li>
          <p className='store-address'>
            <span className='label store-address__label'>Address:</span>
            <span className='text store-address__text'>{data.address}, {data.district}, {data.city}</span>
          </p>
        </li>
        <li>
          <p className='store-phone'>
            <span className='label store-phone__label'>Phone #:</span>
            <span className='text store-phone__text'>{data.phone}</span>
          </p>
        </li>
      </ul>
    </div>
    <button className='edit-card' onClick={edit}>Edit</button>
  </CardStyle>
);

Card.propTypes = {
  data: PropTypes.shape({
    logoUrl: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    address: PropTypes.string.isRequired,
    city: PropTypes.string.isRequired,
    district: PropTypes.string.isRequired
  }).isRequired,
  edit: PropTypes.func,
}

Card.defaultProps = {
  edit: () => {},
};

export default Card;
