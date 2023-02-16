import React from 'react'

// --INTERNAL IMPORT
import StyleShared from '../OptionsBarIcons.module.css'
import Style from './Streak.module.css'

const Streak = () => {
    return (
        <div className={Style.icon_menu}>
            <div className={Style.icon_menu_header}>
                <h2>Your Streaks</h2>
            </div>
            <div className={Style.icon_menu_box}>
                {/* 'connect wallet streak' */}
                <div className={Style.icon_menu_list}>
                    <div className={Style.icon_menu_list_items_scores}>
                        <p>Daily streak:</p>
                        <span>12</span>
                    </div>
                    {/* guesses <10 */}
                    <div className={Style.icon_menu_list_items_scores}>
                        <p>Win streak:</p>
                        <span>8</span>
                    </div>
                    {/* guesses <5 */}
                    <div className={Style.icon_menu_list_items_scores}>
                        <p>Golden streak:</p>
                        <span>3</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Streak
