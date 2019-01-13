import React from 'react';

const StretchableItem = ({ children }) => {
  return <React.Fragment>
    <h2>Item</h2>
    {children}
  </React.Fragment>;
}

export default StretchableItem;