import { useState } from 'react'
import '../styles/globals.css'

let _purchaseId = 0

function getPurchaseId() {
  return _purchaseId++
}

function createPurchase(id, size) {
  return {
    purchaseId: getPurchaseId(),
    id,
    size,
    quantity: 1
  }
}

function MyApp({ Component, pageProps }) {
  const [cart, setCart] = useState([])

  function onAddToCart(id, size) {
    const newPurchase = createPurchase(id, size)
    setCart([...cart, newPurchase])
  }

  function onRemoveFromCart(purchaseId) {
    setCart(cart.filter(product => product.purchaseId != purchaseId))
  }

  function onChangeQuantity(purchaseId, newQuantity) {
    const newCart = cart.map(purchase => {
      if (purchase.purchaseId == purchaseId) {
        const newPurchase = {
          ...purchase,
          quantity: newQuantity
        }

        return newPurchase
      }

      return purchase
    })

    // console.table(cart)
    // console.table(newCart)
    // console.log()

    setCart(newCart)
  }

  return (
    <Component
      {...pageProps}
      cart={cart}
      onAddToCart={onAddToCart}
      onChangeQuantity={onChangeQuantity}
      onRemoveFromCart={onRemoveFromCart}
    />
  )
}

export default MyApp
