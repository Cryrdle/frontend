import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import { GoFlame, GoInfo, GoFile } from 'react-icons/go'
import { FaCrown, FaCog } from 'react-icons/fa'

//INTERNAL IMPORT
import Style from './HeroSection.module.css'
import { GuessBar, Dropdown } from '../componentsindex'
import images from '../../img'

const guessesArray = []

const HeroSection = () => {
    const [guesses, setGuesses] = useState([])

    useEffect(() => {
        console.log('Array updated:', guesses)
    }, [guesses])

    const handleSelectedOption = (selectedOption) => {
        setGuesses([...guesses, guesses.length + 1])
        guessesArray.push(selectedOption)
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
                <div className={Style.heroSection_box_logo}>
                    <Image
                        src={images.logo}
                        alt="logo"
                        width={300}
                        className={Style.heroSection_box_logo_img}
                    />
                </div>
                <div className={Style.heroSection_box_icons}>
                    <FaCrown className={Style.heroSection_box_icons_icon} />
                    <GoFlame className={Style.heroSection_box_icons_icon} />
                    <FaCog className={Style.heroSection_box_icons_icon} />
                    <GoFile className={Style.heroSection_box_icons_icon} />
                    <GoInfo className={Style.heroSection_box_icons_icon} />
                </div>
                <div className={Style.heroSection_box_message}>
                    <h2>Guess the coin of the day!</h2>
                    <p>Type any coin to begin.</p>
                </div>

                {/* INPUT GUESSES */}
                <div className={Style.heroSection_box_guess}>
                    <Dropdown onGuessMade={handleSelectedOption} />
                </div>
            </div>

            {/* GUESS STATS */}
            <div className={Style.heroSection_box_guessBar_headers_box}>
                <div className={Style.heroSection_box_guessBar_headers}>
                    {categoriesArray.map((el, i) => (
                        <div
                            className={Style.guessBar_box_guesses_header}
                            key={i + 1}
                        >
                            <span>{el}</span>
                        </div>
                    ))}
                </div>
            </div>

            <div className={Style.heroSection_box_guesses}>
                {guessesArray.map((el, i) => (
                    <div className={Style.guessBar_box_guesses_info}>
                        <GuessBar guess={el} />
                    </div>
                ))}
            </div>
        </div>
    )
}

export default HeroSection
