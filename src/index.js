import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {BrowserRouter} from 'react-router-dom';
import MainRouter from './routers';
import {storeFactory} from './reducers';

import './index.css';
import registerServiceWorker from './registerServiceWorker';


const initialState = {
    data: [
        {
            first_name: "VITALIY IVANOV",
            last_name: "",
            birthday: 854311910417,

            extra_info: "",
            is_master: false,

            is_pregnancy: false,
            is_alcohol: false,
            is_study_abroad: false,
            is_chronic_disease: false,
            is_treatment: false,
            is_full_package: false,
        },
        {
            first_name: "ELIZAVETA ABRAMOVNA",
            last_name: "",
            birthday: 854311910417,

            extra_info: "",
            is_master: false,

            is_pregnancy: false,
            is_alcohol: false,
            is_study_abroad: false,
            is_chronic_disease: false,
            is_treatment: false,
            is_full_package: false,
        },

    ]

};

const store = storeFactory(initialState);

const render = () =>
    ReactDOM.render(
        <Provider store={store}>
            <BrowserRouter>
                <MainRouter/>
            </BrowserRouter>
        </Provider>,
        document.getElementById('root'));

store.subscribe(render);
render();

registerServiceWorker();
