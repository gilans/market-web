import React from 'react';

import LinkToPage from '../src/components/LinkToPage/LinkToPage';

import '../styles/main-styles.scss';

const CustomError = ({ statusCode }) => {
  return (
    <div>
      <div className="error-msg__overlay"></div>
      <div className="error-msg">
        <h1>
          Error <span className="error-msg__errorcode">404</span>
        </h1>
        <p className="error-msg__output">
          The page you are looking for might have been removed, had its name changed or is
          temporarily unavailable.
        </p>
        <p className="error-msg__output">
          Please try to{' '}
          <LinkToPage className="error-msg__link" pagePath="">
            return to the homepage
          </LinkToPage>
          .
        </p>
        <p className="error-msg__output">Good luck.</p>
      </div>
    </div>
  );
};

const getInitialProps = ({ res, err }) => {
  if (res) return { statusCode: res.statusCode };
  if (err) return { statusCode: err.statusCode };

  return { statusCode: null };
};

CustomError.getInitialProps = getInitialProps;

export default CustomError;
