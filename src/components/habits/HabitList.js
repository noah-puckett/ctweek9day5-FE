import React from 'react';
import PropTypes from 'prop-types';
import Habit from './Habit';


function HabitList({ habits }) {

    const habitElements = habits.map(habit => {
        return (<>
            <li key={habit._id} style={{ listStyle: 'none' }}>
                <Habit habit={habit.habit} description={habit.description} />
            </li>
        </>);
    });

    return (
        <ul>
            {habitElements}
        </ul>
    );
}

HabitList.propTypes = {
    habits: PropTypes.array.isRequired
};

export default HabitList;
