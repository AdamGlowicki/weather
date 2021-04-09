import React from 'react';
import styles from './displayResults.module.scss'
import PropTypes from 'prop-types'
import AutocompleteItem from '../../atoms/autocompleteItem/AutocompleteItem';
import EmptyItem from '../emptyItem/EmptyItem';

const DisplayResults = ({data, loading, open, handleClick}) => {

    return (
        <>
            {open ? (
                loading ? (
                    <EmptyItem/>
                ) : (
                    <div className={styles.results}>
                        {data.map((item) => (
                            <AutocompleteItem
                                key={item.id}
                                option={item}
                                handleClick={handleClick}
                            />
                        ))}
                    </div>
                )
            ) : null}

        </>
    );
};

DisplayResults.propTypes = {
    data: PropTypes.array.isRequired,
    loading: PropTypes.bool.isRequired,
    open: PropTypes.bool.isRequired,
    handleClick: PropTypes.func.isRequired,
}

export default DisplayResults;