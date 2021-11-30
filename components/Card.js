import styles from "../styles/Card.module.css"

import Link from "next/link"

export default function Card({ id, title, price, image, altText }) {
    return (
        <Link href={`products/${id}`}>
            <a className={styles.card}>
                <img className={styles.productImage} src={image} alt={altText} />

                <h3 className={styles.productName}>
                    {title}
                </h3>

                <span className={styles.price}>
                    R${price}
                </span>
            </a>
        </Link>
    )
}