import { STORE_RESTAURANT_DATA, TOGGLE_CURRENT_PAGE, SELECT_CURRENT_GENRE, SEARCH_RESTAURANT_DATA } from './action_type'

export const searchRestaurantData = (payload) => ({
    type: SEARCH_RESTAURANT_DATA,
    payload: payload
})

export const selectCurrentGenre = (payload) => ({
    type: SELECT_CURRENT_GENRE,
    payload: payload
})

export const storeRestaurantData = (payload) => ({
    type: STORE_RESTAURANT_DATA,
    payload: payload
})

export const toggleCurrentPage = (payload) => ({
    type: TOGGLE_CURRENT_PAGE,
    payload: payload
})

export const fetchAPIData = (endpoint, method) => {
    return async (dispatch, getState) => {
        try {
            const fetchedData = await fetch(endpoint, method)
            const jsonData = await fetchedData.json()

            dispatch( storeRestaurantData(jsonData) )
        } catch(error) {
            console.log(error)
        }
    }
}