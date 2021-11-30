import styles from "../../styles/Product.module.css"

import Carousel from "../../components/Carousel"
import Footer from "../../components/Footer"
import Nav from "../../components/Nav"
import Radio from "../../components/Radio"

import { getAllProductsIds, getProductData } from "../../lib/products"

import { useState } from "react"
import Link from "next/link"

const images = [
    '/images/cat.jpg',
]

export default function Product({ cart, productData, onAddToCart }) {
    const [size, setSize] = useState('M')

    return (
        <div className={styles.container}>
            <header>
                <Nav productsInCart={cart.length} />
            </header>

            <main className={styles.main}>
                <Carousel className={styles.carousel} images={images} />

                <div className={styles.content}>
                    <section className={styles.heading}>
                        <h1 className={styles.title}>{productData.title}</h1>
                        <span className={styles.price}>{`R$${productData.price.toFixed(2)}`}</span>
                    </section>

                    <section className={styles.options}>
                        <h2>Tamanho: </h2>
                        <ul className={styles.size}>
                            <li>
                                <Radio name="size" value="P" onChange={setSize} />
                            </li>

                            <li>
                                <Radio name="size" value="M" onChange={setSize} defaultChecked />
                            </li>

                            <li>
                                <Radio name="size" value="G" onChange={setSize} />
                            </li>

                            <li>
                                <Radio name="size" value="GG" onChange={setSize} />
                            </li>
                        </ul>
                    </section>

                    <Link href={`/cart`}>
                        <a
                            onClick={() => onAddToCart(productData.id, size)}
                            className={styles.addToCart}>
                            Adicionar ao Carrinho
                        </a>
                    </Link>

                    <section className={styles.info}>
                        <h2>Mais Detalhes</h2>
                        <div dangerouslySetInnerHTML={{ __html: productData.htmlContent }} />
                    </section>
                </div>
            </main>

            <Footer />
        </div>
    )
}

export async function getStaticProps({ params }) {
    const productData = await getProductData(params.id)

    return {
        props: {
            productData
        }
    }
}


export function getStaticPaths() {
    const paths = getAllProductsIds()

    return {
        paths,
        fallback: false
    }
}