import { postHabits, getListOfHabits } from '../services/habitsApi';

export const CREATE_HABIT = 'CREATE_HABIT';
export const createHabit = (habit, description) => {
    return {
        type: CREATE_HABIT,
        //returns a promise
        payload: postHabits(habit, description)
    };
};

export const GET_HABITS = 'GET_HABITS';
export const getHabits = () => ({
    type: GET_HABITS,
    payload: getListOfHabits()
});
