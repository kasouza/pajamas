import { useState } from 'react'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  const [cart, setCart] = useState([])

  function onAddToCart(id) {
    setCart([...cart, id])
  }

  function onRemoveFromCart(id) {
    setCart(cart.filter(itemId => itemId != id))
  }

  return <Component {...pageProps} cart={cart} onAddToCart={onAddToCart} onRemoveFromCart={onRemoveFromCart} />
}

export default MyApp
