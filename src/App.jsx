import React from 'react';
import useWindowWidth from './hooks/windosizw';

function WindowWidthComponent() {
  const windowWidth = useWindowWidth();

  return (
    <div>
      <h2>Window Width: {windowWidth}</h2>
    </div>
  );
}

export default WindowWidthComponent;
