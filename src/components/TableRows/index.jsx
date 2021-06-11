import './index.css'
import TableCell from '../TableCell'

const queries = ['name', 'city', 'state', 'telephone', 'genre']

export default function TableRows({data}) {
    const keysArray = Object.keys(data).filter( key => queries.includes(key) )

    return (
        <tr>
            {
                keysArray.map( key => <TableCell key={data[key]} data={data[key]} />)
            } 
        </tr>
    )
}
