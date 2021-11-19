import styles from "../styles/Card.module.css"

import Link from "next/link"

export default function Card({ id, title, price, image, altText }) {
    return (
        <div className={styles.card}>
            <img className={styles.productImage} src={image} width={284} height={177} alt={altText} />
            
            <h3 className={styles.productName}>
                {title}
            </h3>

            <span className={styles.price}>
                R${price}
            </span>

            <Link href={`products/${id}`}>
                <a className={styles.buy}>Ver Mais</a>
            </Link>
        </div>
    )
}