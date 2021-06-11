import './index.css'
import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { selectCurrentGenre, searchRestaurantData } from '../../redux/actions'

export default function Filter() {
    const genres = useSelector(state => state.genres)
    // const currentGenre = useSelector(state => state.currentGenre)
    // const searchQuery = useSelector(state => state.searchQuery)
    const dispatch = useDispatch()

    const selectGenre = (e) => {
        dispatch( selectCurrentGenre(e.target.value) )
    }

    const searchHandler = (e) => {
        dispatch( searchRestaurantData(e.target.value) )
    }

    return (
        <div className="filters">
            <div className="search">
                <label htmlFor="search">Search</label>
                <input type="text" name="search" placeholder="Enter the name of your query" onChange={searchHandler} />
            </div>
            <div className="select-genre">
                <label htmlFor="selectedGenre">Select Genre:</label>
                <select name="selectedGenre" id="select-genre" onChange={selectGenre} >
                    {
                        genres.map( (genre, index) => <option key={genre} value={index} >{genre}</option>)
                    }
                </select>
            </div>
        </div>
    )
}