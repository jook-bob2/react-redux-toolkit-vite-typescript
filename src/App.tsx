import React from 'react';
import '@styles/App.scss';
import { Provider } from 'react-redux';
import DefaultRouter from './routes/DefaultRouter';
import { store as globalStore } from './core/store/global/store';
import { store as apiStore } from './core/store/api/store';

function App() {
    return (
        <Provider store={globalStore}>
            <Provider store={apiStore}>
                <DefaultRouter />
            </Provider>
        </Provider>
    );
}

export default App;
