import React, { useState } from 'react'

const DarkMode = () => {

    const [active,setActive]= useState(false)

    const changeColor = (e) => {
        e.preventDefault();
        const Root = document.documentElement;
        if (Root.style.getPropertyValue('--main-color') !== '#f2f2f2') {
            
            Root.style.setProperty('--main-color','#f2f2f2')
            Root.style.setProperty('--border-color','#333')
        } else {
            Root.style.setProperty('--main-color','#333')
            Root.style.setProperty('--border-color','#f2f2f2')
        }
        setActive(!active)
    }

  return (
      <div className={active?'darkMode active':'darkMode '} onClick={changeColor}>
          <i className="fa-solid fa-circle-half-stroke"></i>
      </div>
  )
}

export default DarkMode