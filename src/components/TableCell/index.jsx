import './index.css'
import { queries } from '../../config'

export default function TableCell({data, index, header}) {
    return (
        <>
        {
            header ? 
                <th className={`table-cell ${queries[index]}`} >{data}</th>
            : <td className={`table-cell ${queries[index]}`} >{data}</td>
        }
            
        </>
    )
}