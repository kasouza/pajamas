import CartItem from "../components/cart/CartItem"
import Footer from "../components/Footer"
import Nav from "../components/Nav"

import styles from "../styles/Cart.module.css"

export default function Cart() {
    return (
        <div className={styles.container}>
            <header className={styles.header}>
                <Nav />
            </header>

            <section className={styles.checkoutContainer}>
                <p className={styles.subtotal}>Subtotal: <span>R$3232123.00</span></p>

                <button className={styles.checkout}>
                    Finalizar Compra
                </button>
            </section>

            <section>
                <ul className={styles.cart}>
                    <div className={styles.divider} />

                    <CartItem
                        id="maske_charuto"
                        title="Maske CHaruto"
                        price={420.69}
                        size="G"
                        quantity={1}
                    />

                    <div className={styles.divider} />

                    <CartItem
                        id="maske_charuto"
                        title="Maske CHaruto"
                        price={420.69}
                        size="G"
                        quantity={1}
                    />

                    <div className={styles.divider} />

                    <CartItem
                        id="maske_charuto"
                        title="Maske CHaruto"
                        price={420.69}
                        size="G"
                        quantity={1}
                    />
                    <div className={styles.divider} />

                </ul>
            </section>

            <Footer />
        </div>
    )
}