import React from 'react';
import PropTypes from 'prop-types';

const TextLogoLink = ({ titleLogo, link }) => {
  return (
    <div className="logo-title" onClick={link}>
      {titleLogo}
    </div>
  );
};

TextLogoLink.propTypes = {
  titleLogo: PropTypes.string.isRequired,
  link: PropTypes.func.isRequired,
};

export default TextLogoLink;
