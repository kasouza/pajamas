import styles from "../../styles/CartItem.module.css"

import Image from "next/image"
import Link from "next/link"

export default function CartItem({ id, purchaseId, title, price, size, onRemoveFromCart }) {
    return (
        <li className={styles.cartItem}>
            <Image src="/images/cat.jpg" width={128} height={80} />

            <Link href={`/products/${id}`}>
                <a>
                    <h3 className={styles.title}>{title}</h3>
                    <span>Preço: R${price.toFixed(2)}</span>
                    <br />
                    <span>Tamanho: {size}</span>
                </a>
            </Link>

            <button onClick={() => onRemoveFromCart(purchaseId)}>
                <img className={styles.trash} src="/images/trash.png" />
            </button>
        </li>
    )
}