import { queries } from "../config"
import { STORE_RESTAURANT_DATA, TOGGLE_CURRENT_PAGE, SELECT_CURRENT_GENRE, SEARCH_RESTAURANT_DATA, MERGE_FILTER_AND_SEARCH } from "./action_type"

const initState = {
    restaurantData: [],
    mergedData: [],
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
    selector[MERGE_FILTER_AND_SEARCH] = mergeSearchAndFilter

    if(selector[type] === undefined) return {...state}

    return selector[type](state, payload)
}


function mergeSearchAndFilter(state, payload) {
    const { searchedData, filteredData } = state

    if(searchedData.length === 0) return {...state, mergedData: filteredData}

    const stringifiedFilter = filteredData.map( data => JSON.stringify(data) )
    const merged = searchedData.filter( data => stringifiedFilter.includes( JSON.stringify(data) ) )

    return {...state, mergedData: merged}
}

function searchRestaurantData(state, payload) {
    const { restaurantData } = state
    const searchedData = filteredSearchData(restaurantData, payload)

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
    const values = queries.map( query => current[query] )
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

    return {...state, restaurantData: payload, genres: genreList, filteredData: payload, mergedData: payload}
}

function toggleCurrentPage(state, payload) {
    return {...state, currentPage: payload}
}

function listGenres(payload) {
    const currentGenres = [].concat(...payload.map( data => data.genre.split(',') ))
    const newSet = new Set(currentGenres.sort())

    return [...newSet]
}