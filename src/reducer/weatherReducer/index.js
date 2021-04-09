import {createSlice} from '@reduxjs/toolkit'

const initialState = {
    weatherWidgets: []
}

const weather = createSlice({
    name: 'weather',
    initialState,
    reducers: {
        addWidget: (state, {type, payload}) => {
            state.weatherWidgets = [...state.weatherWidgets, payload]
        },
        removeWidget: (state, {payload}) => {
            state.weatherWidgets = state.weatherWidgets.filter(item => item.id !== payload)
        }
    },
})

export const {addWidget, removeWidget} = weather.actions

export default weather.reducer