import './index.css'
import TableCell from '../TableCell'
import { queries } from '../../config'

export default function TableHeader() {
    return (
        <thead>
            {
                queries.map( (query, index) => <TableCell key={query} data={ query } index={index} /> )
            }
        </thead>
    )
}