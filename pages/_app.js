import { useState } from 'react'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  const [cart, setCart] = useState([])

  function onAddToCart(id, size) {
    setCart([...cart, { id, size }])
  }

  function onRemoveFromCart(id) {
    setCart(cart.filter(product => product.id != id))
  }

  return <Component {...pageProps} cart={cart} onAddToCart={onAddToCart} onRemoveFromCart={onRemoveFromCart} />
}

export default MyApp
