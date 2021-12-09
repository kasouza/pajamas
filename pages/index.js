import styles from '../styles/Home.module.css'

import Card from '../components/Card'
import Footer from '../components/Footer'
import Nav from '../components/Nav'
import Waves from '../components/Waves'

import { getAllProductsData } from '../lib/products'

import Head from 'next/head'

export default function Home({ cart, productsData }) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Pajamas</title>
        <meta name="description" content="The cutest pajamas" />
      </Head>


      <header className={styles.header}>
        <Nav productsInCart={cart.length} />
        <h1>PAJAMAS</h1>

        <Waves />
      </header>

      <section className={styles.text}>
        Lorem ipsum dolor sit amet conse ctetur adipis icing elit. Dicta vel labore quidem omnis? Nulla in delectus, atque maxime pariatur ad ex mollitia culpa deserunt debitis expedita ab quaerat quibusdam! Ratione.
      </section>

      <main>
        <section className={styles.products}>
          {/* Create a card for each product that was read from disk */}
          {productsData.map(product => (
            <Card key={product.id} id={product.id} title={product.title} price={product.price} image={`/images/${product.id}/0.jpg`} />
          ))}
        </section>
      </main>

      <Footer />

    </div>
  )
}

export function getStaticProps() {
  const productsData = getAllProductsData();

  return {
    props: {
      productsData
    }
  }
}