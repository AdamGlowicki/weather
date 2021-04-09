import React from 'react';
import styles from './weatherApp.module.scss';
import Widget from '../molecules/widget/Widget';
import {useSelector} from 'react-redux';
import AsyncDropdown from '../molecules/autocomplete/AsyncDropdown';


const WeatherApp = () => {
    const widgets = useSelector(state => state.weather.weatherWidgets)

    return (
        <section data-testid='main' className={styles.app}>
            <div className={styles.app__search}>
                <AsyncDropdown/>
            </div>
            <div className={styles.app__widgets}>
                {widgets.map(item => <Widget key={item.id} option={item}/>)}
            </div>
        </section>
    );
};

export default WeatherApp;