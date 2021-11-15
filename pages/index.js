import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Pajamas</title>
        <meta name="description" content="The cutest pajamas" />
      </Head>


      <header className={styles.header}>
        <nav>
          <Link href="/">
            <a><h2>PAJAMAS</h2></a>
          </Link>
          <a href="#">
            <Image className="cart-icon" width={32} height={32} src="/images/shopping-cart.svg" alt="Carrinho de Compras" />
          </a>
        </nav>

        <h1>PAJAMAS</h1>

        <div className={styles.waves}>
          <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z" className={styles.shapefill}></path>
          </svg>
        </div>
      </header>

      <section className={styles.text}>
        Lorem ipsum dolor sit amet conse ctetur adipis icing elit. Dicta vel labore quidem omnis? Nulla in delectus, atque maxime pariatur ad ex mollitia culpa deserunt debitis expedita ab quaerat quibusdam! Ratione.
      </section>

      <main>
        <section className={styles.products}>
          <div className={styles.card}>
            <img className={styles.productImage} src="/images/cat.jpg" width={284} height={177} alt="product image" />
            <h3 className={styles.productName}>Product</h3>
            <span className={styles.price}>R$99,99</span>
            <Link href="#">
              <a className={styles.buy}>Ver Mais</a>
            </Link>
          </div>
          <div className={styles.card}>
            <img className={styles.productImage} src="/images/cat.jpg" width={284} height={177} alt="product image" />
            <h3 className={styles.productName}>Product</h3>
            <span className={styles.price}>R$99,99</span>
            <Link href="#">
              <a className={styles.buy}>Ver Mais</a>
            </Link>
          </div>
          <div className={styles.card}>
            <img className={styles.productImage} src="/images/cat.jpg" width={284} height={177} alt="product image" />
            <h3 className={styles.productName}>Product</h3>
            <span className={styles.price}>R$99,99</span>
            <Link href="#">
              <a className={styles.buy}>Ver Mais</a>
            </Link>
          </div>
        </section>
      </main>

      <footer className={styles.footer}>
        <address>
          <Link href="https://github.com/kasouza">
            <a>&copy;kasouza</a>
          </Link>
        </address>
      </footer>

    </div>
  )
}
