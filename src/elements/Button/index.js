/* eslint-disable react/forbid-prop-types */
/* eslint-disable react/button-has-type */
/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';

export default function Button(props) {
  const {
    type, href, className, style, target, children, isExternal, onClick,
  } = props;

  const onClickHandler = () => {
    if (onClick) onClick();
  };

  if (type === 'link') {
    if (isExternal) {
      return (
        <a
          href={href}
          className={className}
          style={style}
          target={target}
        >
          {children}
        </a>
      );
    }

    return (
      <NavLink
        to={href}
        className={className}
        style={style}
        onClick={onClickHandler}
      >
        {children}
      </NavLink>
    );
  }

  return (
    <button
      type={type}
      className={className}
      style={style}
      onClick={onClickHandler}
    >
      {children}
    </button>
  );
}

Button.defaultProps = {
  href: '',
  onClick: () => {},
  className: '',
  style: {},
  target: '',
  children: '',
  isExternal: false,
};

Button.propTypes = {
  type: PropTypes.oneOf(['link', 'button', 'submit', 'reset']).isRequired,
  href: PropTypes.string,
  onClick: PropTypes.func,
  className: PropTypes.string,
  style: PropTypes.object,
  target: PropTypes.string,
  children: PropTypes.string,
  isExternal: PropTypes.bool,
};
