import styles from "../../styles/CartItem.module.css"

import Image from "next/image"

export default function CartItem({ id, title, price, size, quantity }) {
    return (
        <li className={styles.cartItem} key={id}>
            <Image src="/images/cat.jpg" width={128} height={80} />

            <div>
                <h3 className={styles.title}>{title}</h3>
                <span>Preço: {price}</span>
                <br />
                <span>Tamanho: {size}</span>
            </div>

            <button>
                X
            </button>
        </li>
    )
}