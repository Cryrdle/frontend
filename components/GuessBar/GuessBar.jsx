import React from 'react'
import { GoArrowUp, GoArrowDown } from 'react-icons/go'

// --INTERNAL IMPORT
import Style from './GuessBar.module.css'
import coins from './CoinStatsIndex'

var answer = coins['LTC']

const GuessBar = ({ guess }) => {
    return (
        <div className={Style.guessBar}>
            <div className={Style.guessBar_box}>
                <div className={Style.guessBar_box_guesses}>
                    {coins[guess].map((el, i) =>
                        el == answer[i] ? (
                            <div className={Style.guessBar_correct}>
                                <span>{el}</span>
                            </div>
                        ) : el > answer[i] && i >= 3 ? (
                            // too high (and not the first 3 - ToDo)
                            <div className={Style.guessBar_incorrect}>
                                <span>{el}</span>
                                <GoArrowUp
                                    fill="darkred"
                                    className={Style.guessBar_incorrect_arrow}
                                />
                            </div>
                        ) : el < answer[i] && i >= 3 ? (
                            // too low (and not the first 3 - ToDo)
                            <div className={Style.guessBar_incorrect}>
                                <span>{el}</span>
                                <GoArrowDown
                                    fill="darkred"
                                    className={Style.guessBar_incorrect_arrow}
                                />
                            </div>
                        ) : (
                            // incorrect, non-numerical
                            <div className={Style.guessBar_incorrect}>
                                <span>{el}</span>
                            </div>
                        )
                    )}
                </div>
            </div>
        </div>
    )
}

export default GuessBar
