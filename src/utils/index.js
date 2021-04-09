export const handleApiError = (fn, callback) => (...params) => fn(...params).catch(callback)
export const transformToCelsius = (temp) => Math.floor(temp - 273);