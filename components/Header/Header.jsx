import React from 'react'
import Image from 'next/image'

// --INTERNAL IMPORTS
import Style from './Header.module.css'
import images from '../../img'

// --FUNCTIONS
const handleConnectWallet = async () => {
    try {
        await connectWallet()
        setConnected(true)
        handleParticipationPayment()
    } catch (error) {
        console.log(error)
    }
}

const Header = ({ connectWallet }) => {
    return (
        <div>
            <div className={Style.header}>
                <div className={Style.header_box}>
                    <div className={Style.header_box_left_empty}></div>
                    <div className={Style.header_box_middle_logo}>
                        <Image
                            src={images.logo}
                            alt="logo"
                            width={300}
                            className={Style.heroSection_box_logo_img}
                        />
                    </div>
                    <div className={Style.header_box_right_connect}>
                        <button
                            className={Style.heroSection_box_connect_btn}
                            onClick={() => {
                                handleConnectWallet()
                            }}
                        >
                            Connect
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header
