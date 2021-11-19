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

    function transition(image) {
        setTransitionImage(image)

        setTimeout(() => {
            setTransitionImage(-1)
        }, 1000)
    }

    function setImage(count) {
        // Wrap around (i.e. (0 - 1) == (images.length - 1))
        const nextImageId = Math.abs(imageId - count) % images.length
        console.log(imageId)
        console.log(nextImageId)
        transition(imageId)
        setImageId(nextImageId)
    }

    return (
        <div className={styles.carousel}>
            <Image width={width} height={height} src={images[imageId]} />
            {transitionImg != -1
                ? <img className={styles.transition} width={width} height={height} src={images[transitionImg]} />
                : <></>
            }
            <button onClick={() => setImage(-1)}>&lt;</button>
            <button onClick={() => setImage(1)}>&gt;</button>
        </div>
    )
}