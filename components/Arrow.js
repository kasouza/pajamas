import styles from '../styles/Arrow.module.css'

export default function Arrow({ direction }) {
    if (!direction) {
        console.trace('No direction was given')
        return <></>
    }

    const directions = {
        left: styles.left,
        right: styles.right
    }

    const directionClass = directions[direction]

    if (!directionClass) {
        console.trace(`Invalid direction: ${direction}`)
        return <></>
    }

    return (
        <div className={`${styles.arrow} ${directionClass}`} />
    )
}