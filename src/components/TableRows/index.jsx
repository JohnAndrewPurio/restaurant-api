import './index.css'
import TableCell from '../TableCell'
import { queries } from '../../config'


export default function TableRows({data}) {
    const keysArray = Object.keys(data).filter( key => queries.includes(key) )

    return (
        <tr>
            {
                keysArray.map( (key, index) => <TableCell key={data[key]} data={data[key]} index={index} />)
            } 
        </tr>
    )
}
