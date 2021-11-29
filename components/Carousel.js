import styles from '../styles/Carousel.module.css'

import { useState } from 'react'
import Arrow from './Arrow'
import Indicators from './Indicators'

const images = [
    '/images/cat.jpg',
    '/images/stars.jpg'
]

export default function Carousel({ width, height }) {
    const [imageId, setImageId] = useState(0)
    const [transitionImg, setTransitionImage] = useState(-1)
    const [transitionDir, setTransitionDir] = useState(styles.translr)
    const [isTransitioning, setIsTransitioning] = useState(false)

    function transition(image) {
        setTransitionImage(image)

        setTimeout(() => {
            setTransitionImage(-1)
            setImageId(image)
            setIsTransitioning(false)

        }, 1000)
    }

    function setImage(count) {
        if (!isTransitioning) {
            // Wrap around (i.e. (0 - 1) == (images.length - 1))
            const nextImageId = Math.abs(imageId - count) % images.length

            setIsTransitioning(true)
            setTransitionDir(count > 0 ? styles.transrl : styles.translr)
            transition(nextImageId)
        }
    }

    return (
        <div className={styles.carousel}>
            <img className={styles.image} src={images[imageId]} />
            {transitionImg != -1
                ? <img className={`${styles.transition} ${transitionDir}`} src={images[transitionImg]} />
                : <></>
            }
            <Indicators current={imageId} max={images.length} />
            
            <button className={`${styles.button} ${styles.left}`} onClick={() => setImage(-1)}><Arrow direction="left" /></button>
            <button className={`${styles.button} ${styles.right}`} onClick={() => setImage(1)}><Arrow direction="right" /></button>
        </div>
    )
}