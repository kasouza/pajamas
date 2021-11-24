import Cart from './cart/Cart'

import styles from '../styles/Nav.module.css'

import Link from 'next/link'

export default function Nav() {
  return (
    <nav className={styles.nav}>
      <Link href="/">
        <a>
          <h2>PAJAMAS</h2>
        </a>
      </Link>

      <Cart />
    </nav>
  )
}