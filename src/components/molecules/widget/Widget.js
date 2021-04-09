import React from 'react';
import PropType from 'prop-types';
import styles from './widget.module.scss'
import WidgetDetail from '../widgetDetail/WidgetDetail';
import {useDispatch} from 'react-redux';
import {removeWidget} from '../../../reducer/weatherReducer';
import {transformToCelsius} from '../../../utils';

const Widget = ({option}) => {
    const dispatch = useDispatch()

    const handleRemove = () => {
        dispatch(removeWidget(option.id))
    }

    const selectIcon = (weather) => {
        switch (weather) {
            case 'Clear':
                return <i className="wi wi-day-sunny"></i>
            case 'Clouds':
                return <i className="wi wi-day-cloudy"></i>
            default:
                return <i className="wi wi-day-fog"></i>
        }
    }

    return (
        <div data-testid='widget' className={styles.widget}>
            <div className={styles.widget__title}>
                <h2 className={styles.widget__city}>
                    {option?.name}
                </h2>
                <div className={styles.widget__icon}>
                    {selectIcon(option?.weather[0]?.main)}
                </div>
            </div>
            <div className={styles.widget__content}>
                <div className={styles.widget__temp}>
                    <div>{transformToCelsius(option?.main?.temp)}</div>
                    <div className={styles.widget__deg}>o</div>
                    <div>C</div>
                </div>
                <div className={styles.widget__detail}>
                        <WidgetDetail
                            details={option?.main}
                            wind={option?.wind?.speed}
                        />
                </div>
            </div>

            <button onClick={handleRemove}>
                X
            </button>
        </div>
    );
};

Widget.propTypes = {
    option: PropType.object.isRequired,
}

export default Widget;