import React from 'react';
import {render, fireEvent} from '@testing-library/react';
import AutocompleteItem from './AutocompleteItem';
import {Provider} from 'react-redux';
import store from '../../../store'
import {transformToCelsius} from '../../../utils';
import App from '../../../App';

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

describe('AutocompleteItem component', () => {
    it('should display township', function () {
        const addWidget = jest.fn()
        const {getByTestId} = render(
            <Provider store={store}>
                <AutocompleteItem option={weather} handleClick={addWidget}/>
            </Provider>
        )
        expect(getByTestId('name').innerHTML).toBe(weather.name)
    });

    it('should display temp', function () {
        const addWidget = jest.fn()
        const {getByTestId} = render(
            <Provider store={store}>
                <AutocompleteItem option={weather} handleClick={addWidget}/>
            </Provider>
        )
        expect(getByTestId('temp').innerHTML).toBe(`${transformToCelsius(weather.main.temp)} deg`)
    });

    it('should add widget', function () {
        const addWidget = jest.fn()
        const {getByTestId} = render(
            <Provider store={store}>
                <AutocompleteItem option={weather} handleClick={addWidget}/>
            </Provider>
        )

        fireEvent.click(getByTestId('button'))

        const {getByTestId: getWidgetByTestId} = render(<App/>)

        expect(getWidgetByTestId('widget')).toBeInTheDocument()
    });
})