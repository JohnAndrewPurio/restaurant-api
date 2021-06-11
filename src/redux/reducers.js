import { STORE_RESTAURANT_DATA, TOGGLE_CURRENT_PAGE, SELECT_CURRENT_GENRE, SEARCH_RESTAURANT_DATA } from "./action_type"

const initState = {
    restaurantData: [],
    filteredData: [],
    searchedData: [],
    currentPage: 1,
    genres: [],
    searchQuery: '',
    currentGenre: 0
}

export default function reducers(state = initState, action) {
    const {type, payload} = action
    const selector = {}

    selector[STORE_RESTAURANT_DATA] = storeRestaurantData
    selector[TOGGLE_CURRENT_PAGE] = toggleCurrentPage
    selector[SELECT_CURRENT_GENRE] = selectCurrentGenre
    selector[SEARCH_RESTAURANT_DATA] = searchRestaurantData

    if(selector[type] === undefined) return {...state}

    return selector[type](state, payload)
}

function searchRestaurantData(state, payload) {
    const { filteredData } = state
    const searchedData = filteredSearchData(filteredData, payload)

    return {...state, searchQuery: payload, searchedData: searchedData}
}

function filteredSearchData(data, query) {
    const searchedData = data.filter( current => {
        const val = checkSearchFilter(current, query)

        return val
    })

    return searchedData
}

function checkSearchFilter(current, query) {
    const values = Object.values(current)
    const regexQuery = RegExp(query, 'gi')

    return values.some( value => regexQuery.test(value) )
}

function selectCurrentGenre(state, payload) {
    const { restaurantData, genres } = state 
    const filteredData = Number(payload) === 0 ? restaurantData
        : restaurantData.filter( ({genre}) => {
            const genreArr = genre.split(',')

            return genreArr.includes(genres[payload]) 
        })

    return {...state, currentGenre: payload, filteredData: filteredData}
}

function storeRestaurantData(state, payload) {
    const genreList = listGenres(payload)
    genreList.unshift('All')

    return {...state, restaurantData: payload, genres: genreList, filteredData: payload}
}

function toggleCurrentPage(state, payload) {
    return {...state, currentPage: payload}
}

function listGenres(payload) {
    const currentGenres = [].concat(...payload.map( data => data.genre.split(',') ))
    const newSet = new Set(currentGenres.sort())

    return [...newSet]
}