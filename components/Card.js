import styles from "../styles/Card.module.css"

import Image from "next/image"
import Link from "next/link"

export default function Card({ id, title, price, image, altText }) {
    return (
        <Link href={`/products/${id}`}>
            <a className={styles.card}>
                <div className={styles.productImage}>
                    <Image
                        layout="responsive"
                        src={image}
                        width={16}
                        height={10}
                        alt={altText}
                    />
                </div>

                <div className={styles.info}>
                    <h3 className={styles.productName}>
                        {title}
                    </h3>

                    <span className={styles.price}>
                        R${price}
                    </span>
                </div>
            </a>
        </Link>
    )
}