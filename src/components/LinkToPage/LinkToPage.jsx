import React from 'react';
import Router from 'next/router';
import classNames from 'classnames';

const LinkToPage = ({ className, children, pagePath }) => {
  const handleClick = () => {
    Router.push(`/${pagePath}`);
  };
  return (
    <span className={classNames(className, 'comp-link-to-page')} onClick={handleClick}>
      {children}
    </span>
  );
};
export default LinkToPage;
