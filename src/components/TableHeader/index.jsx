import './index.css'
import TableCell from '../TableCell'
import { queries } from '../../config'

export default function TableHeader() {
    return (
        <thead>
            <tr>
            {
                queries.map( (query, index) => <TableCell key={query} data={ query } index={index} header={true} /> )
            }
            </tr>
        </thead>
    )
}