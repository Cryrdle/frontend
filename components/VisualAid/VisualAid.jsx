import React from 'react'
import { GoArrowUp, GoArrowDown, GoX } from 'react-icons/go'

//--INTERNAL IMPORTS
import Style from './VisualAid.module.css'
import StyleGuess from '../GuessBar/GuessBar.module.css'

const VisualAid = ({ onClose }) => {
    return (
        <div className={Style.visualAid}>
            <div className={Style.visualAid_box}>
                <div className={Style.visualAid_box_header}>
                    <h4>Reminder how to play...</h4>
                    <div className={Style.visualAid_btn}>
                        <GoX
                            onClick={onClose}
                            className={Style.visualAid_btn_X}
                        />
                    </div>
                </div>
                <div className={Style.visualAid_box_examples}>
                    <div className={StyleGuess.guessBar_correct}>
                        <p>Correct!</p>
                    </div>
                    <p className={StyleGuess.guessBar_incorrect}>
                        Try higher!
                        <GoArrowUp
                            className={StyleGuess.guessBar_incorrect_arrow}
                        />
                    </p>
                    <p className={StyleGuess.guessBar_incorrect}>
                        Try lower!
                        <GoArrowDown
                            className={StyleGuess.guessBar_incorrect_arrow}
                        />
                    </p>
                </div>
            </div>
        </div>
    )
}

export default VisualAid
