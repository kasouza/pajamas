import { useEffect, useState } from "react"
import CartItem from "../components/cart/CartItem"
import Footer from "../components/Footer"
import Nav from "../components/Nav"

import styles from "../styles/Cart.module.css"

export default function Cart({ cart, onRemoveFromCart }) {
    const [cartData, setCartData] = useState([])

    useEffect(async () => {
        const baseUrl = `/api/products`
        const params = `${cart.map(product => `ids=${product.id}`).join('&')}`

        const url = params ? `${baseUrl}?${params}` : ''

        if (url) {
            await fetch(url).then((res, err) => {
                if (!err) {
                    res.json().then((products, err) => {
                        if (!err) {
                            products.forEach(item => {
                                const product = cart.find(product => product.id == item.id)
                                const size = product != undefined ? product.size : ''

                                item.size = size
                            })

                            setCartData(products    )
                        } else {
                            console.err(err)
                        }
                    })
                } else {
                    console.err(err)
                }
            })
        }
    }, [])

    useEffect(() => {
        setCartData(cartData.filter(cartItem => cart.find(product => product == cartItem.id) != undefined))
    }, [cart])


    return (
        <div className={styles.container}>
            <header className={styles.header}>
                <Nav productsInCart={cart.length} />
            </header>

            <main>
                <section className={styles.checkoutContainer}>
                    <p className={styles.subtotal}>Subtotal: <span>R$3232123.00</span></p>

                    <button className={styles.checkout}>
                        Finalizar Compra
                    </button>
                </section>

                <section>
                    <ul className={styles.cart}>
                        <div className={styles.divider} />

                        {cartData.map(item => (
                            <div key={item.id} className={styles.cartItemContainer}>
                                <CartItem
                                    id={item.id}
                                    title={item.title}
                                    price={item.price}
                                    size={item.size}
                                    onRemoveFromCart={onRemoveFromCart}
                                />

                                <div className={styles.divider} />
                            </div>
                        ))}

                    </ul>
                </section>
            </main>

            <Footer className={styles.footer} />
        </div>
    )
}