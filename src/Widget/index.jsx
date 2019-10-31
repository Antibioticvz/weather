import React from 'react'
import PropTypes from 'prop-types'

export const Widget = ({ city, currentTemp}) => {
    return (
        <>
            <h1>{city}</h1>   
            <h3>{currentTemp} ℃	</h3>   
        </>
    )
}

Widget.propTypes = {
    city: PropTypes.string.isRequired,
    currentTemp: PropTypes.number.isRequired,
}
