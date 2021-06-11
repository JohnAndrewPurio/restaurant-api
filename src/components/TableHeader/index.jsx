import './index.css'
import TableCell from '../TableCell'
import { queries } from '../../config'

export default function TableHeader() {
    return (
        <thead>
            {
                queries.map( query => <TableCell key={query} data={ query } /> )
            }
        </thead>
    )
}