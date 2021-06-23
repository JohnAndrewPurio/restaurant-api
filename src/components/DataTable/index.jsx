import './index.css'
import TableRows from '../TableRows'
import TableHeader from '../TableHeader'
import { useSelector } from 'react-redux'

const itemsPerPage = 10

export default function DataTable() {
    const searchQuery = useSelector(state => state.searchQuery)
    // const searchedData = useSelector(state => state.searchedData)
    const filteredData = useSelector(state => searchQuery.length > 0 ? state.searchedData: state.filteredData)
    const currentPage = useSelector(state => state.currentPage)
    const currentPageData = filteredData.slice( (currentPage - 1) * itemsPerPage, (currentPage * itemsPerPage) + 1) 

    return (
        <div className='data-table'>
            <table>
                <TableHeader />
                <tbody>
                    {
                        currentPageData.map( (data, index) => <TableRows key={index} data={data} />)
                    }
                </tbody>
            </table>
        </div>
        
    )
}