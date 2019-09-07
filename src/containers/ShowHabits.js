import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import HabitList from '../components/habits/HabitList';
import { getListOfHabitsFromState } from '../selectors/habitsSelector';
import { getHabits } from '../actions/habitsActions';


function ShowHabits({ fetch, habits }){
    useEffect(() => {
        fetch();
    }, []);

    return (<>
        <HabitList habits={habits}/>
    </>);

}

const mapStateToProps = state => ({
    habits: getListOfHabitsFromState(state)
});

const mapDispatchToProps = dispatch => ({
    fetch() {
        dispatch(getHabits());
    }
});

ShowHabits.propTypes = {
    fetch: PropTypes.func.isRequired,
    habits: PropTypes.array.isRequired
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ShowHabits);
