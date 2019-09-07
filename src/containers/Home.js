import React from 'react';
import CreateHabit from './CreateHabit';
import ShowHabits from './ShowHabits';

export function Home() {
    return (
        <>
            <CreateHabit />
            <ShowHabits />
        </>
    );
}
