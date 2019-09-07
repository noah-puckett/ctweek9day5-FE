let token = null;
export const setToken = newToken => {
    token = newToken;
};

export const postHabits = (habit, description) => {
    return fetch(`${process.env.API_URL}/api/v1/habits`, {
        method: 'POST',
        body: JSON.stringify({ habit, description }),
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        }
    })
        .then(res => {
            if(!res.ok) throw 'Error! Could not create habit';

            return res.json();
        })
        .catch(console.log);
};


export const getListOfHabits = () => {
    return fetch(`${process.env.API_URL}/api/v1/habits`, {
        method: 'GET',
        headers: {
            'Authorization': `Bearer ${token}`
        }
    })
        .then(res => {
            if(!res.ok) throw 'Error! Could not create habit';

            return res.json();
        });
};
