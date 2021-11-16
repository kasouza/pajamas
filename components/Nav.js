import styles from '../styles/Nav.module.css'

import Link from 'next/link'
import Image from 'next/image'

export default function Nav() {
    return (
        <nav className={styles.nav}>
          <Link href="/">
            <a>
                <h2>PAJAMAS</h2>
            </a>
          </Link>

          <a href="#">
            <Image
                className={styles.cartIcon}
                width={32}
                height={32}
                src="/images/shopping-cart.svg"
                alt="Carrinho de Compras"
            />
          </a>
        </nav>
    )
}