import { useState, useEffect } from 'react';

function useWindowWidth() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize); //jabbhi hum window resize krenge to ye event

    // Cleanup function to remove event listener
    return () => {
      window.removeEventListener('resize', handleResize);
      alert("clean up fn called")
    };
  }, []); // Empty dependency array ensures this effect runs only once

  return windowWidth;    //hum windowwidth call kr rahe app.jsx mai to wo ye return krega
}
export default useWindowWidth;


//q1. here useefffect runs only once when the component is mounted but actually when ever i am resizing the window the size is changing 

