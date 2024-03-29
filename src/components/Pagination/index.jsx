import './index.css'
import { useDispatch, useSelector } from 'react-redux'
import { toggleCurrentPage } from '../../redux/actions'

export default function Pagination() {
    const dispatch = useDispatch()
    const currentPage = useSelector(state => state.currentPage)
    const filteredData = useSelector(state => state.mergedData)
    const maxPage = Math.ceil( filteredData.length / 10 )

    const togglePage = (page) => {
        dispatch( toggleCurrentPage(currentPage + page) ) 
    }

    return (
        <div className="pagination">
            <button onClick={ () => togglePage(-1) } disabled={currentPage === 1} >{'<'}</button>
            <button onClick={ () => togglePage(1) } disabled={currentPage === maxPage} >{'>'}</button>
        </div>
    )
}