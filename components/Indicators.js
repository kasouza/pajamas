import { range } from "../lib/utils"

export default function Indicators({ current, max }) {
    return (
        <ol>
            {((new Array(max)).fill(0)).map((_, i) => (
                <li>iu</li>
            ))}
        </ol>
    )
}