import React from 'react'
import { GoArrowUp, GoArrowDown, GoX } from 'react-icons/go'

//--INTERNAL IMPORTS
import Style from './HelperBox.module.css'
import StyleGuess from '../GuessBar/GuessBar.module.css'

const HelperBox = ({ onClose }) => {
    return (
        <div className={Style.helperBox}>
            <div className={Style.helperBox_box}>
                <div className={Style.helperBox_box_header}>
                    <h4>Reminder how to play...</h4>
                    <div className={Style.helperBox_btn}>
                        <GoX
                            onClick={onClose}
                            className={Style.helperBox_btn_X}
                        />
                    </div>
                </div>
                <div className={Style.helperBox_box_examples}>
                    <div className={StyleGuess.guessBar_correct}>
                        <p>Correct!</p>
                    </div>
                    <div className={StyleGuess.guessBar_incorrect}>
                        <div className={StyleGuess.guessBar_incorrect_box}>
                            <p>Try higher!</p>
                            <GoArrowUp
                                className={StyleGuess.guessBar_incorrect_arrow}
                            />
                        </div>
                    </div>
                    <div className={StyleGuess.guessBar_incorrect}>
                        <div className={StyleGuess.guessBar_incorrect_box}>
                            <p>Try lower!</p>
                            <GoArrowDown
                                className={StyleGuess.guessBar_incorrect_arrow}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HelperBox
