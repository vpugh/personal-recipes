import React from 'react';

const Container = ({ children, style }) => {
  return (
    <div className='container' style={{ margin: '0 auto', ...style }}>
      {children}
    </div>
  );
};

export default Container;
