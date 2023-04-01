import React, { useState, useEffect } from 'react'
import alanBtn from '@alan-ai/alan-sdk-web'

const Alan = () => {
    useEffect(() => {
        alanBtn({
          key: 'e87ac22a2ced1dec2530a4fb24a0190b2e956eca572e1d8b807a3e2338fdd0dc/stage',
          onCommand: (commandData) => {
            // if (commandData.command === 'go:back') {
            //   // Call the client code that will react to the received command
            // }
          }
        });
      }, []);
  return (
    <div> </div>
  )
}

export default Alan