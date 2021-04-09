import React from 'react';
import {render} from '@testing-library/react';
import Widget from './Widget';
import {Provider} from 'react-redux';
import store from '../../../store';

const weather = {
    id: 2950159,
    name: "Berlin",
    coord: {
        lat: 52.5244,
        lon: 13.4105
    },
    main: {
        temp: 278.76,
        feels_like: 269.36,
        temp_min: 278.15,
        temp_max: 279.82,
        pressure: 1019,
        humidity: 60
    },
    dt: 1617872959,
    wind: {
        speed: 10.29,
        deg: 290
    },
    sys: {
        country: "DE"
    },
    rain: null,
    snow: null,
    clouds: {
        all: 75
    },
    weather: [
        {
            id: 803,
            main: "Clouds",
            description: "broken clouds",
            icon: "04d"
        }
    ]
}


describe('Widget component', () => {
    it('should display correct icon', function () {
        const {container} = render(
            <Provider store={store}>
                <Widget option={weather}/>
            </Provider>
        )

        const icon = container.querySelector('.wi-day-cloudy')
        expect(icon).toBeInTheDocument()
    });

    it('should not display correct icon', function () {
        const {container} = render(
            <Provider store={store}>
                <Widget option={weather}/>
            </Provider>
        )

        const icon = container.querySelector('.wi-day-sunny')
        expect(icon).not.toBeInTheDocument()
    });
})