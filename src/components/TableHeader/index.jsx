import './index.css'
import TableCell from '../TableCell'

const queries = ['name', 'city', 'state', 'telephone', 'genre']

export default function TableHeader() {
    return (
        <thead>
            {
                queries.map( query => <TableCell key={query} data={ query.replace(query[0], query[0].toUpperCase()) } /> )
            }
        </thead>
    )
}