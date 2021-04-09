import { configureStore } from '@reduxjs/toolkit';
import weather from '../reducer/weatherReducer/index'

export default configureStore({
    reducer: {
      weather
    },
});
