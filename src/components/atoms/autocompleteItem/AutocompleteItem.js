import React from 'react';
import PropType from 'prop-types'
import styles from './item.module.scss'
import {transformToCelsius} from '../../../utils';
import {useDispatch} from 'react-redux';
import {addWidget} from '../../../reducer/weatherReducer';

const AutocompleteItem = ({option, handleClick}) => {
    const dispatch = useDispatch()

    const handleAddWidget = () => {
        handleClick()
        dispatch(addWidget(option))
    }

    return (
        <button data-testid='button' className={styles.item} onClick={handleAddWidget}>
            <div data-testid='name'>{option.name}</div>
            <div data-testid='temp'>{transformToCelsius(option?.main?.temp)} deg</div>
        </button>
    );
};

export default AutocompleteItem;

AutocompleteItem.propTypes = {
    option: PropType.object.isRequired,
    handleClick: PropType.func.isRequired,
}