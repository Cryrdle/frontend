import React, { useState } from 'react'
import Image from 'next/image'
import { GoArrowUp, GoArrowDown } from 'react-icons/go'

// --INTERNAL IMPORT
import Style from './GuessBar.module.css'
import images from '../../img'
import coins from './CoinStatsIndex'

var answer = coins['LTC']

var correct_count = 0

const GuessBar = (props) => {
    const [win, setWin] = useState(false)

    return (
        <div className={Style.guessBar}>
            <div className={Style.guessBar_box}>
                <div className={Style.guessBar_box_guesses}>
                    {coins[props.guess].map((el, i) =>
                        el == answer[i] ? (
                            <div className={Style.guessBar_correct}>
                                <span>{el}</span>
                            </div>
                        ) : el > answer[i] && i >= 3 ? (
                            // too high
                            <div className={Style.guessBar_incorrect}>
                                <span>{el}</span>
                                <GoArrowUp
                                    fill="darkred"
                                    className={Style.guessBar_incorrect_arrow}
                                />
                            </div>
                        ) : el < answer[i] && i >= 3 ? (
                            // too low
                            <div className={Style.guessBar_incorrect}>
                                <span>{el}</span>
                                <GoArrowDown
                                    fill="darkred"
                                    className={Style.guessBar_incorrect_arrow}
                                />
                            </div>
                        ) : (
                            // incorrect
                            <div className={Style.guessBar_incorrect}>
                                <span>{el}</span>
                            </div>
                        )
                    )}
                    {/* {coins[props.guess] == answer ? setWin(true) : ''} */}
                    {/* {win && (
                        <aside className={Style.DropZone_box_aside}>WIN</aside>
                    )} */}
                </div>
            </div>
        </div>
    )
}

export default GuessBar
