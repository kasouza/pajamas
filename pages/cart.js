import { useEffect, useState } from "react"
import CartItem from "../components/cart/CartItem"
import Footer from "../components/Footer"
import Nav from "../components/Nav"

import styles from "../styles/Cart.module.css"

import Link from "next/link"

export default function Cart({ cart, onChangeQuantity, onRemoveFromCart }) {
    const [cartData, setCartData] = useState([])
    const [total, setTotal] = useState(0)

    function updateTotal(cartData) {
        setTotal(cartData.reduce((acc, purchase) => acc + purchase.price, 0))
    }

    useEffect(async () => {
        const baseUrl = `/api/products`
        const params = `${cart.map(product => `ids=${product.id}`).join('&')}`

        const url = params ? `${baseUrl}?${params}` : ''

        if (url) {
            await fetch(url).then((res, err) => {
                if (!err) {
                    res.json().then((products, err) => {
                        if (!err) {
                            const purchases = cart.map(purchase => {
                                const productData = products.find(product => product.id == purchase.id)
                                if (productData) {
                                    return {
                                        ...productData,
                                        ...purchase
                                    }
                                }
                            })

                            setCartData(purchases)
                            updateTotal(purchases)
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
        const newCartData = cartData
            .map(purchase => {
                const cartItem = cart.find(product => product.purchaseId == purchase.purchaseId)

                if (cartItem) {
                    const newPurchase = {
                        ...purchase,
                        ...cartItem
                    }
                    return newPurchase
                }

                return null
            })
            .filter(purchase => purchase != null)

        setCartData(newCartData)
        updateTotal(newCartData)
    }, [cart])

    return (
        <div className={styles.container}>
            <header className={styles.header}>
                <Nav productsInCart={cart.length} />
            </header>

            <main className={styles.main}>
                <section className={styles.checkoutContainer}>
                    <p className={styles.subtotal}>Subtotal: <span>R${total.toFixed(2)}</span></p>

                    <button className={styles.checkout}>
                        Finalizar Compra
                    </button>


                </section>

                <section className={styles.productsContainer}>
                    <ul className={styles.cart}>
                        <div className={styles.divider} />

                        {cartData.map(item => (
                            <div key={item.purchaseId} className={styles.cartItemContainer}>
                                <CartItem
                                    id={item.id}
                                    purchaseId={item.purchaseId}
                                    title={item.title}
                                    price={item.price}
                                    size={item.size}
                                    quantity={item.quantity}
                                    onChangeQuantity={onChangeQuantity}
                                    onRemoveFromCart={onRemoveFromCart}
                                />

                                <div className={styles.divider} />
                            </div>
                        ))}

                    </ul>


                    <Link href="/">
                        <a className={styles.continueBuying}>Continuar Comprando</a>
                    </Link>
                </section>

            </main>

            <div className={styles.footerContainer}>
                <Footer className={styles.footer} />
            </div>
        </div>
    )
}