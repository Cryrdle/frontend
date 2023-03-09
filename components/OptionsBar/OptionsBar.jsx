import React, { useState } from 'react'
import { GoFlame, GoInfo, GoFile } from 'react-icons/go'
import { FaCrown } from 'react-icons/fa'
import { DarkMode } from '../componentsindex'

// --INTERNAL IMPORT
import Style from './OptionsBar.module.css'
import {
    Leaderboard,
    Streak,
    Updates,
    Help,
} from '../OptionsBar/optionsBarComponentsIndex'

//-- FUNCTIONS

const OptionsBar = () => {
    // display states
    const [leaderboard, setLeaderboard] = useState(false)
    const [streak, setStreak] = useState(false)
    const [updates, setUpdates] = useState(false)
    const [help, setHelp] = useState(false)

    // display functions
    const closeAll = () => {
        setLeaderboard(false)
        setStreak(false)
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
                    <DarkMode />
                    {/* {theme == 'light' ? (
                        <div className={Style.optionsBar_box_icons}>
                            <FiMoon
                                className={Style.optionsBar_box_icons_icon_fi}
                                onClick={() => setTheme('dark')}
                            />
                        </div>
                    ) : (
                        <div className={Style.optionsBar_box_icons}>
                            <FiSun
                                className={Style.optionsBar_box_icons_icon_fi}
                                onClick={() => setTheme('light')}
                            />
                        </div>
                    )} */}
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
