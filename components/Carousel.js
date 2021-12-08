import styles from '../styles/Carousel.module.css'

import { useState } from 'react'
import Arrow from './Arrow'
import { range } from '../lib/utils'

// Must be equal to the transition_duration in the css
const TRANSITION_DURATION = 1000 // ms

export default function Carousel({ children }) {
    const [currentImage, setCurrentImage] = useState(0)
    const [currentTransition, setCurrentTransition] = useState(-1)

    const wrap = (max) => (i) => Math.abs(i) % max
    const wrapChildren = wrap(children.length)

    const setImage = (i) => setCurrentImage(wrapChildren(i))
    const setTransition = (i) => setCurrentTransition(wrapChildren(i))

    const changeBy = (i) => () => {
        if (currentTransition == -1) {
            setTransition(currentImage + i)
    
            setTimeout(() => {
                setImage(currentImage + i)
                setCurrentTransition(-1)
            }, TRANSITION_DURATION)
        }
    }

    const inc = changeBy(1)
    const dec = changeBy(-1)

    return (
        <div className={styles.carousel}>
            <div className={styles.inner}>
                <ol className={styles.images}>
                    {children.map((child, idx) => {
                        const currentImageClass = idx == currentImage ? styles.currentImage : ''
                        const transitionClass = idx == currentTransition ? styles.transition : ''

                        return (
                            <li key={idx} className={`${styles.imageContainer} ${currentImageClass} ${transitionClass}`}>
                                {child}
                            </li>
                        )
                    })}
                </ol>

                <div className={styles.buttons}>
                    <button onClick={dec} className={styles.button}>
                        <Arrow direction="left" />
                    </button>

                    <button onClick={inc} className={styles.button}>
                        <Arrow direction="right" />
                    </button>
                </div>

                <div className={styles.indicators}>
                    {range(0, children.length).map(i => {
                        const className = i == currentImage ? styles.currentIndicator : ''

                        return (
                            <span key={i} className={`${styles.indicator} ${className}`} />
                        )
                    })}
                </div>
            </div>
        </div>


    )
}