import React, { useEffect } from 'react'
import SplashScreenBg from '../../../common/component/customIcons/SplashScreenBg'

function Splash({showSplash, hideSplashHandler}) {

    useEffect(() => {
      let timeout;
      if (showSplash) {
          timeout = setTimeout(() => {
              hideSplashHandler()
          }, 3000);
      }
    
      return () => {
        clearTimeout(timeout)
      }
    }, []) //eslint-disable-line

  return (
    <div className='splash'>
        <SplashScreenBg />
    </div>
  )
}

export default Splash