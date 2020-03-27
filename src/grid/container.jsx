import React from 'react';

const Container = ({ children, widthMax, style }) => {
  const maxWidth = widthMax || 1152;
  return (
    <div className='container' style={{ maxWidth, margin: '0 auto', ...style }}>
      {children}
    </div>
  );
};

export default Container;
