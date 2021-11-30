import { useState } from 'react'
import '../styles/globals.css'

let _purchaseId = 0

function getPurchaseId() {
  console.log(_purchaseId)
  return _purchaseId++
}

function createPurchase(id, size) {
  return {
    purchaseId: getPurchaseId(),
    id,
    size
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

  return <Component {...pageProps} cart={cart} onAddToCart={onAddToCart} onRemoveFromCart={onRemoveFromCart} />
}

export default MyApp
