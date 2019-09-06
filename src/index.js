import React from 'react';
import { render } from 'react-dom';
import App from './components/App';
import Auth0Provider from './Auth0Provider';
// import store from './store';
// import { Provider } from 'react-redux';

render(
    <Auth0Provider 
        domain={process.env.AUTH0_DOMAIN}
        client_id={process.env.AUTH0_CLIENT_ID}
        redirect_uri={process.env.AUTH0_CALLBACK}
    >
        {/* <Provider store={store}> */}
        <App />
        {/* </Provider> */}
    </Auth0Provider>,
    document.getElementById('root')
);
