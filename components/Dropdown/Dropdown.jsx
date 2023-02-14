import React, { useState } from 'react'
import Select from 'react-select'
import { GoArrowRight } from 'react-icons/go'

// --INTERNAL IMPORT
import Style from './Dropdown.module.css'

const dropdownStyle = {
    option: (base, state) => ({
        ...base,
        padding: '1rem',
    }),
    control: () => ({
        display: 'flex',
        padding: '0 0rem 0 0.5rem',
    }),
    dropdownIndicator: () => ({
        display: 'none',
    }),
}

const options = [
    { value: 'BTC', label: 'Bitcoin BTC' },
    { value: 'ADA', label: 'Cardano ADA' },
    { value: 'DOGE', label: 'DogeCoin DOGE' },
    { value: 'ETH', label: 'Ethereum ETH' },
    { value: 'LTC', label: 'Litecoin LTC' },
    { value: 'DOT', label: 'Polkadot DOT' },
    { value: 'XRP', label: 'Ripple XRP' },
    { value: 'UNI', label: 'Uniswap UNI' },
]

const Dropdown = (props) => {
    const [selectedOption, setSelectedOption] = useState(null)

    const handleChange = (selected) => {
        setSelectedOption(selected)
    }

    const handleClick = () => {
        if (selectedOption) {
            props.onGuessMade(selectedOption.value)
        }
    }

    return (
        <div className={Style.dropdown_box}>
            <div className={Style.dropdown_box_left}>
                <Select
                    options={options}
                    onChange={handleChange}
                    placeholder="Enter your guess..."
                    isClearable={true}
                    styles={dropdownStyle}
                />
            </div>
            <div className={Style.dropdown_box_right}>
                <GoArrowRight onClick={handleClick} />
            </div>
        </div>
    )
}

export default Dropdown
