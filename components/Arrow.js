import styles from '../styles/Arrow.module.css'

import { useEffect, useState } from 'react'

export default function Arrow({ direction }) {
    const [directionClass, setDirectionClass] = useState('')

    const directions = {
        left: styles.left,
        right: styles.right
    }

    useEffect(() => {
        setDirectionClass(directions[direction])
    })

    return (
        <div className={`${styles.arrow} ${directionClass}`} />
    )
}