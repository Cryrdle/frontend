import React from 'react'

// --INTERNAL IMPORT
import StyleShared from '../OptionsBarIcons.module.css'
import Style from './Updates.module.css'

const Updates = () => {
    return (
        <div className={Style.icon_menu}>
            <div className={Style.icon_menu_header}>
                <h2>Updates</h2>
            </div>
            <div className={Style.icon_menu_box}>
                <div className={Style.icon_menu_list}>
                    <div className={Style.icon_menu_list_updates}>
                        <small>18.03.23</small>
                        <p>Golden streaks added</p>
                    </div>
                    <div className={Style.icon_menu_list_updates}>
                        <small>17.03.23</small>
                        <p>BSV removed from data</p>
                    </div>
                    <div className={Style.icon_menu_list_updates}>
                        <small>16.03.23</small>
                        <p>Premium new Pepe wallpaper added</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Updates
