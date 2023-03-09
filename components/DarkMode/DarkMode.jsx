import React, { useState } from 'react'
import { FiSun, FiMoon } from 'react-icons/fi'
import Style from '../OptionsBar/OptionsBar.module.css'

const DarkMode = () => {
    const [darkMode, setDarkMode] = useState(false)

    const toggleTheme = () => {
        setDarkMode(!darkMode)
        document
            .querySelector('body')
            .setAttribute('data-theme', darkMode ? 'light' : 'dark')
    }

    return (
        <div className={Style.optionsBar_box_icons_icon} onClick={toggleTheme}>
            {darkMode ? (
                <FiSun
                    className={Style.optionsBar_box_icons_icon_fi}
                    onClick={toggleTheme}
                />
            ) : (
                <FiMoon
                    className={Style.optionsBar_box_icons_icon_fi}
                    onClick={toggleTheme}
                />
            )}
        </div>
    )
}

export default DarkMode
