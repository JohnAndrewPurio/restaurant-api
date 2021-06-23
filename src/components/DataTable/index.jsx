import './index.css'
import { useEffect } from 'react'
import TableRows from '../TableRows'
import TableHeader from '../TableHeader'
import { useDispatch, useSelector } from 'react-redux'
import { mergeFilterAndSearch } from '../../redux/actions'

const itemsPerPage = 10

export default function DataTable() {
    const dispatch = useDispatch()
    const searchedData = useSelector(state => state.searchedData)
    const filteredData = useSelector(state => state.filteredData)
    const currentPage = useSelector(state => state.currentPage)
    const mergedData = useSelector(state => state.mergedData)
    const currentPageData = mergedData.slice((currentPage - 1) * itemsPerPage, (currentPage * itemsPerPage))

    useEffect(() => {
        dispatch(mergeFilterAndSearch())

        // eslint-disable-next-line
    }, [searchedData, filteredData])

    return (
        <div className='data-table'>
            {
                filteredData.length > 0 ?
                    (
                        mergedData.length > 0 ?
                            <table>
                                <TableHeader />
                                <tbody>
                                    {
                                        currentPageData.map((data, index) => <TableRows key={index} data={data} />)
                                    }
                                </tbody>
                            </table>
                            : <h3>There are no available results in your query</h3>
                    )
                : <h3>Fetching the data. Please wait...</h3>
            }
        </div>

    )
}