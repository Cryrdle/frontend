import React from 'react'
import Image from 'next/image'

// --INTERNAL IMPORT
import Style from './GuessBar.module.css'
import images from '../../img'

const GuessBar = () => {
    const categoriesArray = [
        'Coin',
        'Type1',
        'Type2',
        'Ranking',
        'Marketcap',
        'Price',
        'Age',
    ]

    const coinInfo = ['BTC', 'Currency', 'None', '1', '625bb', '$21,875', '11y']

    return (
        <div className={Style.guessBar}>
            <div className={Style.guessBar_box_headers}>
                {categoriesArray.map((el, i) => (
                    <div
                        className={Style.guessBar_box_guesses_header}
                        key={i + 1}
                    >
                        <span>{el}</span>
                    </div>
                ))}
            </div>
            <div className={Style.guessBar_box_guesses}>
                {coinInfo.map((el, i) => (
                    <div
                        className={Style.guessBar_box_guesses_info}
                        key={i + 1}
                    >
                        <span>{el}</span>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default GuessBar
