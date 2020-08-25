import React from 'react';

const Container = ({ children, style, className }) => {
  return (
    <div
      className={`container ${className || ''}`}
      style={{ margin: '0 auto', ...style }}
    >
      {children}
    </div>
  );
};

export default Container;
