import React, { useEffect } from 'react'

function Splash({showSplash, hideSplashHandler}) {

    useEffect(() => {
      let timeout;
      if (showSplash) {
          timeout = setTimeout(() => {
              hideSplashHandler()
          }, 5000);
      }
    
      return () => {
        clearTimeout(timeout)
      }
    }, []) //eslint-disable-line

  return (
    <div  className='splash'>
        <div className="loader"></div>
    </div>
  )
}

export default Splash