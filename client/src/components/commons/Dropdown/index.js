import React, { useState } from 'react';
import PropTypes from 'prop-types';

import DropDownStyle from './DropdownStyle';

const DropDown = (props) => {
  const [open, setOpen] = useState(false)
  const { className, options } = props

  const toggle = () => {
    setOpen((open) => !open)
  }

  return (
    <DropDownStyle className={className} open={open}>
      <button className='label' onClick={toggle}>
        {options[0].label}
        <i className='fas fa-chevron-down'></i>
      </button>
      <ul className='list'>
        {options.map((option, idx) => (
          <li className='item' key={idx}>
            <div
              onClick={(e) => e.preventDefault()}
            >{option.label}</div>
          </li>
        ))}
      </ul>
    </DropDownStyle>
  )
}

DropDown.propTypes = {
  className: PropTypes.string,
  options: PropTypes.arrayOf(PropTypes.shape({
    label: PropTypes.string,
  }).isRequired).isRequired,
};

export default DropDown;
