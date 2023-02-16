import React from 'react'
import { GoArrowUp, GoArrowDown } from 'react-icons/go'

// --INTERNAL IMPORT
import StyleShared from '../OptionsBarIcons.module.css'
import Style from './Help.module.css'

const Help = () => {
    return (
        <div className={Style.icon_menu}>
            <div className={Style.icon_menu_header}>
                <h2>Help</h2>
            </div>
            <div className={Style.icon_menu_box}>
                <div className={Style.icon_menu_list}>
                    <p>
                        Connect your wallet and try to guess today's Cryrdle
                        coins using the dropdown bar
                    </p>
                    <div className={Style.icon_menu_list_with_icon}>
                        <GoArrowDown
                            className={Style.icon_menu_header_help_arrow}
                            fill="darkred"
                        />
                        <p>Today's Cryrdle is lower for this category!</p>
                    </div>
                    <div className={Style.icon_menu_list_with_icon}>
                        <GoArrowUp
                            className={Style.icon_menu_header_help_arrow}
                            fill="darkred"
                        />
                        <p>Today's Cryrdle is higher for this category!</p>
                    </div>
                </div>
                <div className={Style.icon_menu_list_items}>
                    <a link="#">Install MetaMask</a>
                    <br /> <a link="#">Set up a new wallet</a>
                </div>
            </div>
        </div>
    )
}

export default Help
