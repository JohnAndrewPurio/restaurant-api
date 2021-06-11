import { STORE_RESTAURANT_DATA, TOGGLE_CURRENT_PAGE } from "./action_type"

const initState = {
    restaurantData: [],
    currentPage: 1
}

export default function libraryReducer(state = initState, action) {
    const {type, payload} = action
    const selector = {}

    selector[STORE_RESTAURANT_DATA] = storeRestaurantData
    selector[TOGGLE_CURRENT_PAGE] = toggleCurrentPage

    if(selector[type] === undefined) return {...state}

    return selector[type](state, payload)
}

function storeRestaurantData(state, payload) {
    return {...state, restaurantData: payload}
}

function toggleCurrentPage(state, payload) {
    return {...state, currentPage: payload}
}