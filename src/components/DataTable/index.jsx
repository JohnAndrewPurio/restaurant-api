import './index.css'
import TableRows from '../TableRows'
import { useSelector } from 'react-redux'

const itemsPerPage = 10

export default function DataTable() {
    const restaurantData = useSelector(state => state.restaurantData)
    const currentPage = useSelector(state => state.currentPage)
    const currentPageData = restaurantData.slice( (currentPage - 1) * itemsPerPage, (currentPage * itemsPerPage) + 1) 

    return (
        <div className='data-table'>
            <table>
                <tbody>
                    {
                        currentPageData.map( (data, index) => <TableRows key={index} data={data} />)
                    }
                </tbody>
            </table>
        </div>
        
    )
}