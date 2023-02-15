import React, { useState, useEffect, useCallback } from 'react'
import Image from 'next/image'
import { GoFlame, GoInfo, GoFile, GoX } from 'react-icons/go'
import { FaCrown, FaCog } from 'react-icons/fa'

//INTERNAL IMPORT
import Style from './HeroSection.module.css'
import StyleWin from '../GuessBar/GuessBar.module.css'
import coins from './../GuessBar/CoinStatsIndex'
import images from '../../img'
import { GuessBar, Dropdown, WinScreen } from '../componentsindex'
import {
    Leaderboard,
    Streak,
    Settings,
    Updates,
    Help,
} from '../OptionsBar/optionsBarComponentsIndex'

const guessesArray = []
var answer = coins['LTC']

const HeroSection = () => {
    // display states
    const [leaderboard, setLeaderboard] = useState(false)
    const [streak, setStreak] = useState(false)
    const [settings, setSettings] = useState(false)
    const [updates, setUpdates] = useState(false)
    const [help, setHelp] = useState(false)
    // guess/game states
    const [winScreen, setWinScreen] = useState(false) // show win screen
    const [winGame, setWinGame] = useState(false) // show win screen
    const [guesses, setGuesses] = useState([])

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
    const openSettings = () => {
        if (!settings) {
            closeAll()
            setSettings(true)
        } else {
            setSettings(false)
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
    const closeWinScreen = () => {
        setWinScreen(false)
    }

    useEffect(() => {
        console.log('Array updated:', guesses)
    }, [guesses])

    // Checks following each guess made
    const handleSelectedOption = (selectedOption) => {
        setGuesses([...guesses, guesses.length + 1])
        guessesArray.push(selectedOption)
    }
    const handleCheckWin = (returnedStatus) => {
        console.log('returnedStatus:', returnedStatus)
        if (returnedStatus == true) {
            setWinGame(true)
            setWinScreen(true)
        }
    }

    const categoriesArray = [
        'Coin',
        'Type1',
        'Type2',
        'Ranking',
        'Marketcap',
        'Price',
        'Age',
    ]

    return (
        <div className={Style.heroSection}>
            <div className={Style.heroSection_box}>
                {/* Logo */}
                <div className={Style.heroSection_box_logo}>
                    <Image
                        src={images.logo}
                        alt="logo"
                        width={300}
                        className={Style.heroSection_box_logo_img}
                    />
                </div>

                {/* Icons */}
                <div className={Style.heroSection_box_icons}>
                    <FaCrown
                        className={Style.heroSection_box_icons_icon}
                        onClick={openLeaderboard}
                    />
                    {leaderboard && <Leaderboard />}
                    <GoFlame
                        className={Style.heroSection_box_icons_icon}
                        onClick={openStreak}
                    />
                    {streak && <Streak />}
                    <FaCog
                        className={Style.heroSection_box_icons_icon}
                        onClick={openSettings}
                    />
                    {settings && <Settings />}
                    <GoFile
                        className={Style.heroSection_box_icons_icon}
                        onClick={openUpdates}
                    />
                    {updates && <Updates />}
                    <GoInfo
                        className={Style.heroSection_box_icons_icon}
                        onClick={openHelp}
                    />
                    {help && <Help />}
                </div>

                {/* Welcome message */}
                <div className={Style.heroSection_box_message}>
                    <h2>Guess the coin of the day!</h2>
                    <p>Type any coin to begin.</p>
                </div>

                {/* ***COULD ADD CONDITIONAL RENDER HERE IF ALREADY PLAYER TODAY*** */}

                {/* Guess input dropdown bar */}
                <div className={Style.heroSection_box_dropdown}>
                    <Dropdown
                        onGuessMade={handleSelectedOption}
                        checkWin={handleCheckWin}
                    />
                </div>
            </div>
            {/* Guesses reveal section -- header */}
            <div className={Style.heroSection_guessBar_headers_box}>
                <div className={Style.heroSection_guessBar_headers}>
                    {categoriesArray.map((el, i) => (
                        <div className={Style.guessBar_guesses_header}>
                            <span>{el}</span>
                        </div>
                    ))}
                </div>
            </div>
            {/* Guesses reveal section -- for each guess */}
            <div className={Style.heroSection_guesses}>
                {guessesArray.map((el, i) => (
                    <div className={Style.guessBar_guesses_info}>
                        <GuessBar guess={el} />
                    </div>
                ))}
            </div>

            {/* if game has been won */}
            {winScreen && (
                <div className={Style.winScreen}>
                    <div className={Style.winScreen_box}>
                        <div className={Style.winScreen_btn_X}>
                            <button>
                                <GoX onClick={closeWinScreen} />
                            </button>
                        </div>
                        <div className={Style.winScreen_box_congrats}>
                            <h1>Congratulations!</h1>
                            <h3>You guessed Litecoin!</h3>
                            <p>You took 2 guesses!</p>
                            <p>You took 3 minutes!</p>
                        </div>

                        <div className={Style.winScreen_box_submit_win}>
                            <button>Submit Win</button>
                        </div>
                        <div className={Style.winScreen_box_coin_info}>
                            <div className={StyleWin.guessBar_box_guesses}>
                                {coins[guessesArray.slice(-1)].map((el, i) => (
                                    <div className={StyleWin.guessBar_correct}>
                                        <span>{el}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className={Style.winScreen_box_LB}>
                            <h3>Today's Leaderboard</h3>

                            {/* replace this with mapping 3 from leaderboard */}
                            <div className={Style.winScreen_box_LB_list}>
                                <div
                                    className={Style.winScreen_box_LB_list_item}
                                >
                                    <p>1: John Doe</p>
                                    <p>Guesses: 1, Time: 4s</p>
                                </div>
                                <div
                                    className={Style.winScreen_box_LB_list_item}
                                >
                                    <p>2: John Smith</p>
                                    <p>Guesses: 3, Time: 16m</p>
                                </div>
                                <div
                                    className={Style.winScreen_box_LB_list_item}
                                >
                                    <p>3: Daniel Danielson</p>
                                    <p>Guesses: 3, Time: 18m</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
            {/* check if daily guess limit has been reached  */}
        </div>
    )
}

export default HeroSection
