import React, { useState } from 'react';
import PropTypes from 'prop-types';

function HabitForm({ handleSubmit }) {

    //two pieces of state, the actual state and the state updater function
    //the thing we give useState (e.g. (''), or (0) or whatever ) is our INITIAL state
    const [habit, setHabit] = useState('');
    const [description, setDescription] = useState('');
    
    const onSubmit = event => {
        event.preventDefault();
        handleSubmit(habit, description);
    }; 

    return (
        <>
            <form onSubmit={onSubmit}>
                
                <input 
                    type="text" 
                    value={habit} 
                    onChange={({ target }) => setHabit(target.value)} 
                    placeholder="habit name"></input>
                <input 
                    type="text" 
                    value={description} 
                    onChange={({ target }) => setDescription(target.value)} 
                    placeholder="habit description"></input>
                <button>submit habit</button>
            </form>
        </>
    );
}

HabitForm.propTypes = {
    handleSubmit: PropTypes.func.isRequired
};

export default HabitForm;
