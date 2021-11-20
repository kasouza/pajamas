import styles from '../styles/Carousel.module.css'

import Image from 'next/image'
import { useState } from 'react'

const images = [
    '/images/cat.jpg',
    '/images/stars.jpg'
]

export default function Carousel({ width, height }) {
    const [imageId, setImageId] = useState(0)
    const [transitionImg, setTransitionImage] = useState(-1)
    const [transitionDir, setTransitionDir] = useState(styles.translr)

    function transition(image) {
        setTransitionImage(image)

        setTimeout(() => {
            setTransitionImage(-1)
            setImageId(image)

        }, 1000)
    }

    function setImage(count) {
        // Wrap around (i.e. (0 - 1) == (images.length - 1))
        const nextImageId = Math.abs(imageId - count) % images.length
        setTransitionDir(count > 0 ? styles.transrl : styles.translr)
        transition(nextImageId)
    }

    return (
        <div className={styles.carousel}>
            <img className={styles.image} src={images[imageId]} />
            {transitionImg != -1
                ? <img className={`${styles.transition} ${transitionDir}`} src={images[transitionImg]} />
                : <></>
            }
            <button className={styles.left} onClick={() => setImage(-1)}>&lt;</button>
            <button className={styles.right} onClick={() => setImage(1)}>&gt;</button>
        </div>
    )
}