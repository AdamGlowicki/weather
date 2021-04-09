import React, {useCallback, useState} from 'react';
import debounce from 'lodash.debounce';
import axios from 'axios';
import {handleApiError} from '../../../utils';
import styles from './asyncDropdown.module.scss'
import DisplayResults from '../displayyResults/DisplayResults';

const AsyncDropdown = () => {
    const [value, setValue] = useState('');
    const [openSearch, setOpenSearch] = useState('')
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(false)


    const fetchData = handleApiError(async (value) => {
        setLoading(true)
        const response = await axios(`http://api.openweathermap.org/data/2.5/find?q=${value ? value : ''}&cnt=4&appid=${process.env.REACT_APP_API_KEY}`);
        setData(response?.data?.list ? response?.data?.list: [])
        setLoading(false)
    }, (err) => {
        setLoading(false)
        console.log(err)
    })

    const debouncedFetch = useCallback(
        debounce((value) => {
               fetchData(value)
            }
            , 1000),
        []
    );

    const resetDropdown = () => {
        setOpenSearch('')
    }


    const handleChange = ({target: {value}}) => {
        setValue(value)
        setOpenSearch(value)
        debouncedFetch(value)
    }

    return (
        <div className={styles.dropdown}>
            <input
                type="text"
                value={value}
                onChange={handleChange}
                placeholder='enter township'
            />
            <DisplayResults loading={loading} handleClick={resetDropdown} open={!!openSearch} data={data}/>
        </div>
    );
};

export default AsyncDropdown;