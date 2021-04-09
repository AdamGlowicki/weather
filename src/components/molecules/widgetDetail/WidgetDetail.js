import React from 'react';
import PropTypes from 'prop-types';
import styles from './widgetDetail.module.scss'
import {transformToCelsius} from '../../../utils';

const WidgetDetail = ({details, wind}) => {
    return (
        <div className={styles.detail}>
            <div className={styles.detail__titles}>
                <div>Feels like</div>
                <div>Wind</div>
                <div>humidity</div>
                <div>Presure</div>
            </div>
            <div className={styles.detail__values}>
                <div>{transformToCelsius(details?.feels_like)} deg</div>
                <div>{wind} m/s</div>
                <div>{details?.humidity} %</div>
                <div>{details?.pressure} hPa</div>
            </div>

        </div>
    );
};

WidgetDetail.propTypes = {
    details: PropTypes.object.isRequired,
    wind: PropTypes.number.isRequired,
}

export default WidgetDetail;