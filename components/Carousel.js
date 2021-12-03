import styles from '../styles/Carousel.module.css'

import { useState } from 'react'
import Arrow from './Arrow'
import { range } from '../lib/utils'

import Image from "next/image"

export default function Carousel({ images }) {
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
        if (images.length > 1 && !isTransitioning) {
            // Wrap around (i.e. (0 - 1) == (images.length - 1))
            const nextImageId = Math.abs(imageId - count) % images.length

            setIsTransitioning(true)
            setTransitionDir(count > 0 ? styles.transrl : styles.translr)
            transition(nextImageId)
        }
    }

    function Indicators({ current, max }) {
        return (
            <ol className={styles.indicators}>
                {range(0, max).map(i => (
                    <li className={`${styles.indicator} ${current == i ? styles.currentIndicator : ''}`} key={i}></li>
                ))}
            </ol>
        )
    }

    return (
        <div className={styles.carousel}>
            <div className={styles.imageContainer}>
                <Image
                    layout="responsive"
                    src={images[imageId]}
                    width={284}
                    height={177}
                />
            </div>

            {transitionImg != -1
                ? <img className={`${styles.transition} ${transitionDir}`} src={images[transitionImg]} />
                : <></>
            }

            {images.length > 1
                ? (<>
                    <Indicators current={imageId} max={images.length} />

                    <button className={`${styles.button} ${styles.left}`} onClick={() => setImage(-1)}><Arrow direction="left" /></button>
                    <button className={`${styles.button} ${styles.right}`} onClick={() => setImage(1)}><Arrow direction="right" /></button>
                </>)
                : <></>}

        </div>
    )
}