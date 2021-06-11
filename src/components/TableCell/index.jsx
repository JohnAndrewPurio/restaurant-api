import './index.css'
import { queries } from '../../config'

export default function TableCell({data, index}) {
    return (
        <td className={`table-cell ${queries[index]}`} >{data}</td>
    )
}