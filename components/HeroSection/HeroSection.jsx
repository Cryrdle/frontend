import React from 'react'
import Image from 'next/image'
import { GoFlame, GoInfo, GoFile, GoArrowRight } from 'react-icons/go'
import { FaCrown, FaCog } from 'react-icons/fa'

//INTERNAL IMPORT
import Style from './HeroSection.module.css'
import { Button, GuessBar } from '../componentsindex'
import images from '../../img'

//SMART CONTRACT
// import {  } from "../../Context/"

const HeroSection = () => {
    return (
        <div className={Style.heroSection}>
            <div className={Style.heroSection_box}>
                <div className={Style.heroSection_box_logo}>
                    <Image
                        id="logo"
                        src={images.logo}
                        alt="Hero section"
                        width={300}
                        // height={100}
                        className={Style.heroSection_box_logo_img}
                    />
                </div>
                <div className={Style.heroSection_box_icons}>
                    <FaCrown />
                    <GoFlame />
                    <FaCog />
                    <GoFile />
                    <GoInfo />
                </div>
                <div className={Style.heroSection_box_message}>
                    <h2>Guess the coin of the day!</h2>
                    <p>Type any coin to begin.</p>
                </div>
                <div className={Style.heroSection_box_guess}>
                    <div className={Style.heroSection_box_guess_input}>
                        <input type="text" placeholder="Enter your guess ..." />
                    </div>
                    <div className={Style.heroSection_box_guess_arrow}>
                        <GoArrowRight handleClick={() => {}} />
                    </div>
                </div>
            </div>

            <div className={Style.heroSection_box_guesses}>
                <GuessBar />
            </div>
        </div>
    )
}

export default HeroSection
