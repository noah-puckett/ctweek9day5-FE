import React from 'react';
import PropTypes from 'prop-types';

function Habit({ habit, description }) {

    return (
        <>
            <h1>{habit}</h1>
            <p>{description}</p>
        </>
    );
}

Habit.propTypes = {
    habit: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired
};

export default Habit;
