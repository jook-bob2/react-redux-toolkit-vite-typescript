import React from 'react';
import '@styles/App.scss';
import { Provider } from 'react-redux';
import { store } from './core/store/store';
import DefaultRouter from './routes/DefaultRouter';

function App() {
    return (
        <Provider store={store}>
            <DefaultRouter />
        </Provider>
    );
}

export default App;
