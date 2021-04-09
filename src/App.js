import React from 'react';
import {Provider} from "react-redux";
import store from './store'
import 'weather-icons/css/weather-icons.css'
import WeatherApp from './components/organism/WeatherApp';

const App = () => {
    return (
        <Provider store={store}>
            <WeatherApp/>
        </Provider>
    )
}



export default App;
