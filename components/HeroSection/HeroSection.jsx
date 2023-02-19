import React, { useState, useEffect, useContext } from 'react'
import Image from 'next/image'
import { GoFlame, GoInfo, GoFile, GoX } from 'react-icons/go'
import { FaCrown, FaCog } from 'react-icons/fa'
import { FiSun, FiMoon } from 'react-icons/fi'

//INTERNAL IMPORT
import Style from './HeroSection.module.css'
import StyleWin from '../GuessBar/GuessBar.module.css'
import coins from './../GuessBar/CoinStatsIndex'
import images from '../../img'
import { GuessBar, Dropdown, VisualAid } from '../componentsindex'
import {
    Leaderboard,
    Streak,
    Settings,
    Updates,
    Help,
} from '../OptionsBar/optionsBarComponentsIndex'

//--IMPORT FROM SMART CONTRACT
import { CryrdleContext } from '../../Context/CryrdleContext'

const guessesArray = []
var answer = coins['LTC']

const HeroSection = () => {
    // smart contract context functions
    const { connectWallet, joinTodaysCryrdle } = useContext(CryrdleContext)

    // display states
    const [leaderboard, setLeaderboard] = useState(false)
    const [streak, setStreak] = useState(false)
    const [settings, setSettings] = useState(false)
    const [darkMode, setDarkMode] = useState(false)
    const [updates, setUpdates] = useState(false)
    const [help, setHelp] = useState(false)
    const [visAid, setVisAid] = useState(true)
    // guess/game states
    const [winScreen, setWinScreen] = useState(false) // show win screen
    const [winGame, setWinGame] = useState(false) // show win screen
    const [guesses, setGuesses] = useState([])
    const [connected, setConnected] = useState(false)
    const [paidToday, setPaidToday] = useState(false) // check user paid today on chain

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

    const handleConnectWallet = async () => {
        try {
            await connectWallet()
            setConnected(true)
            handleParticipationPayment()
        } catch (error) {
            console.log(error)
        }
    }

    const handleParticipationPayment = async () => {
        try {
            var payParticipationFee = await joinTodaysCryrdle()
            if (payParticipationFee) {
                setPaidToday(true)
            }
        } catch (error) {
            console.log(error)
        }
    }

    const handleSelectedOption = (selectedOption) => {
        setGuesses([...guesses, guesses.length + 1])
        guessesArray.push(selectedOption)
    }
    const handleCheckWin = (returnedStatus) => {
        if (returnedStatus) {
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

                {/* if winScreen, show win screen */}
                {winScreen && (
                    <div className={Style.winScreen}>
                        <div className={Style.winScreen_box}>
                            <div className={Style.winScreen_btn_X}>
                                <GoX onClick={() => setWinScreen(false)} />
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
                                    {coins[guessesArray.slice(-1)].map(
                                        (el, i) => (
                                            <div
                                                className={
                                                    StyleWin.guessBar_correct
                                                }
                                            >
                                                <span>{el}</span>
                                            </div>
                                        )
                                    )}
                                </div>
                            </div>
                            <div className={Style.winScreen_box_LB}>
                                <h3>Today's Leaderboard</h3>

                                {/* replace this with mapping 3 from leaderboard */}
                                <div className={Style.winScreen_box_LB_list}>
                                    <div
                                        className={
                                            Style.winScreen_box_LB_list_item
                                        }
                                    >
                                        <p>1: John Doe</p>
                                        <p>Guesses: 1, Time: 4s</p>
                                    </div>
                                    <div
                                        className={
                                            Style.winScreen_box_LB_list_item
                                        }
                                    >
                                        <p>2: John Smith</p>
                                        <p>Guesses: 3, Time: 16m</p>
                                    </div>
                                    <div
                                        className={
                                            Style.winScreen_box_LB_list_item
                                        }
                                    >
                                        <p>3: Daniel Danielson</p>
                                        <p>Guesses: 3, Time: 18m</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )}

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
                    {/* <FaCog
                        className={Style.heroSection_box_icons_icon}
                        onClick={openSettings}
                    />
                    {settings && <Settings />} */}
                    {!darkMode ? (
                        <div className={Style.heroSection_box_icons}>
                            <FiMoon
                                className={Style.heroSection_box_icons_icon_fi}
                                onClick={() => setDarkMode(!darkMode)}
                            />
                        </div>
                    ) : (
                        <div className={Style.heroSection_box_icons}>
                            <FiSun
                                className={Style.heroSection_box_icons_icon_fi}
                                onClick={() => setDarkMode(!darkMode)}
                            />
                        </div>
                    )}
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

                {/* Show connect wallet button */}
                {/* OR show guess dropdown */}
                {/* OR show WIN screen */}
                {!connected ? (
                    // show connect wallet button
                    <div className={Style.heroSection_box_connect}>
                        <button
                            className={Style.heroSection_box_connect_btn}
                            onClick={() => {
                                handleConnectWallet()
                            }}
                        >
                            Connect and Play Today's Cryrdle!
                        </button>
                    </div>
                ) : !winGame ? (
                    // show guess dropdown and take guesses
                    <div className={Style.heroSection_box_dropdown}>
                        {paidToday ? (
                            <Dropdown
                                onGuessMade={handleSelectedOption}
                                checkWin={handleCheckWin}
                            />
                        ) : (
                            <div className={Style.heroSection_box_connect}>
                                <button
                                    className={
                                        Style.heroSection_box_connect_btn_pay
                                    }
                                    onClick={() => {
                                        handleParticipationPayment()
                                    }}
                                >
                                    Click to Pay to Play!
                                </button>
                            </div>
                        )}
                    </div>
                ) : (
                    // show win screen
                    <div className={Style.heroSection_box_connect}>
                        <button
                            className={Style.heroSection_box_connect_btn}
                            onClick={() => setWinScreen(true)}
                        >
                            Show Win Screen
                        </button>
                    </div>
                )}
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

            {/* basic visual aid */}
            {visAid && (
                <div className={Style.heroSection_box_visualAid}>
                    <div className={Style.heroSection_box_visualAid_box}>
                        <VisualAid onClose={() => setVisAid(false)} />
                    </div>
                </div>
            )}

            {/* check if daily guess limit has been reached  */}
        </div>
    )
}

export default HeroSection
