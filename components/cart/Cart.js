import CartItem from "./CartItem"

import styles from "../../styles/Cart.module.css"

import Image from "next/image"
import React, { useState } from "react"

export default function Cart() {
    const [isVisible, setVisibility] = useState(false)

    function toggleCart() {
        setVisibility(!isVisible)
        document.body.classList.toggle('noScroll')
    }

    return (
        <>
            <button onClick={toggleCart} className={styles.openCart}>
                <Image
                    className={styles.cartIcon}
                    width={32}
                    height={32}
                    src="/images/shopping-cart.svg"
                    alt="Carrinho de Compras"
                />
            </button>

            <div className={`${styles.cartContainer} ${isVisible ? styles.show : ''}`}>
                <div className={styles.header}>
                    <button onClick={toggleCart} className={styles.closeCart}>
                        X
                    </button>
                    <h2>Meu Carrinho</h2>
                </div>

                <ul className={styles.cart}>
                    <CartItem
                        id="maske_charuto"
                        title="Maske CHaruto"
                        price={420.69}
                        size="G"
                        quantity={1}
                    />

                    <CartItem
                        id="maske_charuto"
                        title="Maske CHaruto"
                        price={420.69}
                        size="G"
                        quantity={1}
                    />

                    <CartItem
                        id="maske_charuto"
                        title="Maske CHaruto"
                        price={420.69}
                        size="G"
                        quantity={1}
                    />
                </ul>

                <div>
                    <h2>Resumo do Pedido</h2>
                    <span>Maske CHaruto: R$420.69</span>
                    <br />
                    <span>Frete: R$0,00</span>
                    <br />
                    <span>Total: R$3232123.00</span>
                </div>

                <button className={styles.checkout}>
                    Finalizar Compra
                </button>
            </div>

        </>
    )
}