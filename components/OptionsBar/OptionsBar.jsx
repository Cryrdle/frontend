import React, { useState } from 'react'
import { GoFlame, GoInfo, GoFile, GoX } from 'react-icons/go'
import { FaCrown } from 'react-icons/fa'
import { FiSun, FiMoon } from 'react-icons/fi'

// --INTERNAL IMPORT
import Style from './OptionsBar.module.css'
import {
    Leaderboard,
    Streak,
    Settings,
    Updates,
    Help,
} from '../OptionsBar/optionsBarComponentsIndex'

//-- FUNCTIONS

const OptionsBar = () => {
    // display states
    const [leaderboard, setLeaderboard] = useState(false)
    const [streak, setStreak] = useState(false)
    const [settings, setSettings] = useState(false)
    const [darkMode, setDarkMode] = useState(false)
    const [updates, setUpdates] = useState(false)
    const [help, setHelp] = useState(false)

    // display functions
    const closeAll = () => {
        setLeaderboard(false)
        setStreak(false)
        setSettings(false)
        setUpdates(false)
        setHelp(false)
    }
    const openLeaderboard = () => {
        if (!leaderboard) {
            closeAll()
            setLeaderboard(true)
        } else {
            setLeaderboard(false)
        }
    }
    const openStreak = () => {
        if (!streak) {
            closeAll()
            setStreak(true)
        } else {
            setStreak(false)
        }
    }
    const openUpdates = () => {
        if (!updates) {
            closeAll()
            setUpdates(true)
        } else {
            setUpdates(false)
        }
    }
    const openHelp = () => {
        if (!help) {
            closeAll()
            setHelp(true)
        } else {
            setHelp(false)
        }
    }

    return (
        <div>
            <div className={Style.optionsBar}>
                <div className={Style.optionsBar_box}>
                    <FaCrown
                        className={Style.optionsBar_box_icons_icon}
                        onClick={openLeaderboard}
                    />
                    {leaderboard && <Leaderboard />}
                    <GoFlame
                        className={Style.optionsBar_box_icons_icon}
                        onClick={openStreak}
                    />
                    {streak && <Streak />}
                    {!darkMode ? (
                        <div className={Style.optionsBar_box_icons}>
                            <FiMoon
                                className={Style.optionsBar_box_icons_icon_fi}
                                onClick={() => setDarkMode(!darkMode)}
                            />
                        </div>
                    ) : (
                        <div className={Style.optionsBar_box_icons}>
                            <FiSun
                                className={Style.optionsBar_box_icons_icon_fi}
                                onClick={() => setDarkMode(!darkMode)}
                            />
                        </div>
                    )}
                    <GoFile
                        className={Style.optionsBar_box_icons_icon}
                        onClick={openUpdates}
                    />
                    {updates && <Updates />}
                    <GoInfo
                        className={Style.optionsBar_box_icons_icon}
                        onClick={openHelp}
                    />
                    {help && <Help />}
                </div>
            </div>
        </div>
    )
}

export default OptionsBar
