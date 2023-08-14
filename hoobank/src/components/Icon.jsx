import React from 'react'
import { ReactComponent as Shield } from '../assets/Shield.svg';

const names = {
    SHIELD: 'shield'
}

function Icon({ name, size, width, height, rotate = 0, className = '', styles }) {

    const defaultStyles = {
        rotate: `${rotate}deg`,
        ...styles
    }


    switch (name) {
        case names.SHIELD: {
            return <Shield width={size} height={size} className={className} style={defaultStyles} />
        }
    }
}

export { Icon, names as iconNames }