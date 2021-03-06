import styles from "../../styles/CartItem.module.css"

import Image from "next/image"
import Link from "next/link"

export default function CartItem({ id, purchaseId, title, price, size, quantity, onChangeQuantity, onRemoveFromCart }) {
    function increment() {
        onChangeQuantity(purchaseId, quantity + 1)
    }

    function decrement() {
        if (quantity <= 1) {
            onRemoveFromCart(purchaseId)
        } else {
            onChangeQuantity(purchaseId, quantity - 1)
        }
    }

    return (
        <li className={styles.cartItem}>
            <div className={styles.imageContainer}>
                <Image
                    layout="responsive"
                    className={styles.image}
                    width={1}
                    height={1}
                    src={`/images/${id}/square.jpg`}
                    alt="Cart Icon"
                />
            </div>

            <div className={styles.infoContainer}>
                <div>
                    <Link href={`/products/${id}`}>
                        <a className={styles.title}>
                            <h3>{title}</h3>
                        </a>
                    </Link>

                    <div className={styles.price}>Preço: R${price.toFixed(2)}</div>
                    <div className={styles.size}>Tamanho: {size}</div>
                </div>

                <div className={styles.options}>
                    <button className={styles.decrement} onClick={decrement}>
                        {quantity > 1
                            ? <span>-</span>
                            : <div className={styles.trash}><Image width={32} height={32} alt="Remove Product" src="/images/trash.png" /></div>}
                    </button>

                    <span className={styles.quantity}>{quantity}</span>

                    <button className={styles.increment} onClick={increment}>
                        <span>+</span>
                    </button>
                </div>
            </div>
        </li>
    )
}