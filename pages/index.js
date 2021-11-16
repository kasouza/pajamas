import styles from '../styles/Home.module.css'

import Card from '../components/Card'
import Footer from '../components/Footer'
import Nav from '../components/Nav'
import Waves from '../components/Waves'

import { getAllProductsData } from '../lib/products'

import Head from 'next/head'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Pajamas</title>
        <meta name="description" content="The cutest pajamas" />
      </Head>


      <header className={styles.header}>
        <Nav />
        <h1>PAJAMAS</h1>

        <Waves type={0} />
      </header>

      <section className={styles.text}>
        Lorem ipsum dolor sit amet conse ctetur adipis icing elit. Dicta vel labore quidem omnis? Nulla in delectus, atque maxime pariatur ad ex mollitia culpa deserunt debitis expedita ab quaerat quibusdam! Ratione.
      </section>

      <main>
        <section className={styles.products}>
          <Card title="Saske Nartuo Mt Pica Mesmo" price={420.69} image="/images/cat.jpg" />
          <Card title="Saske Nartuo das Galaxia" price={420.69} image="/images/cat.jpg" />
          <Card title="Saske Nartuo O Brabo" price={420.69} image="/images/cat.jpg" />
        </section>
      </main>

      <Footer />

    </div>
  )
}

export function getStaticProps() {
  console.log(getAllProductsData())

  return {
    props: {

    }
  }
}