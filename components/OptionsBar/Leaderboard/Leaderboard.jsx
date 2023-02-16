import React from 'react'

// --INTERNAL IMPORT
import StyleShared from '../OptionsBarIcons.module.css'
import Style from './Leaderboard.module.css'
import { topDailyStreaks, topWinStreaks, topGoldenStreaks } from './TopStreaks'

const testArray = [
    {
        name: 'test1',
        streak: 1,
    },
    {
        name: 'test2',
        streak: 2,
    },
    {
        name: 'test3',
        streak: 4,
    },
]

const Leaderboard = () => {
    return (
        <div className={Style.icon_menu}>
            <div className={Style.icon_menu_header}>
                <h2>Leaderboard</h2>
            </div>
            <div className={Style.icon_menu_box}>
                <div className={Style.icon_menu_list}>
                    <div className={Style.icon_menu_list_left}>
                        <p>Top Daily Streaks</p>

                        {topDailyStreaks.map((el, i) => (
                            <div className={Style.icon_menu_list_items_scores}>
                                <p>{el.nickname}</p>
                                <span>{el.dailyStreak}</span>
                            </div>
                        ))}
                        <p>Top Win Streaks</p>
                        {topWinStreaks.map((el, i) => (
                            <div className={Style.icon_menu_list_items_scores}>
                                <p>{el.nickname}</p>
                                <span>{el.winStreak}</span>
                            </div>
                        ))}
                        <p>Top Golden Streaks</p>
                        {topGoldenStreaks.map((el, i) => (
                            <div className={Style.icon_menu_list_items_scores}>
                                <p>{el.nickname}</p>
                                <span>{el.goldenStreak}</span>
                            </div>
                        ))}
                    </div>
                    {/* <div className={Style.icon_menu_list_right}>
                        <div className={Style.icon_menu_list_items}>
                            <p>Your daily streak:</p>
                            <span>8</span>
                        </div>
                        <div className={Style.icon_menu_list_items}>
                            <p>Your win streak:</p>
                            <span>8</span>
                        </div>
                        <div className={Style.icon_menu_list_items}>
                            <p>Your golden streak:</p>
                            <span>3</span>
                        </div>
                    </div> */}
                </div>
            </div>
        </div>
    )
}

export default Leaderboard
