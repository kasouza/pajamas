import styles from "../../styles/Product.module.css"

import Carousel from "../../components/Carousel"
import Footer from "../../components/Footer"
import Nav from "../../components/Nav"
import Radio from "../../components/Radio"

import { getAllProductsIds, getProductData } from "../../lib/products"
import { range } from "../../lib/utils"


import { useState } from "react"
import Image from "next/image"
import Link from "next/link"

export default function Product({ cart, productData, onAddToCart }) {
    const [size, setSize] = useState('M')

    return (
        <div className={styles.container}>
            <header>
                <Nav productsInCart={cart.length} />
            </header>

            <main className={styles.main}>
                <div className={styles.stuff}>

                    <Carousel>
                        {productData.images.map((imgSrc, idx) => (
                            <Image key={idx} src={imgSrc} width={16} height={10} layout="responsive" />
                        ))}
                    </Carousel>

                    <div>
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
                    </div>
                </div>
                <section className={styles.info}>
                    <h2>Mais Detalhes</h2>
                    <div dangerouslySetInnerHTML={{ __html: productData.htmlContent }} />
                </section>

            </main>

            <Footer />
        </div>
    )
}

export async function getStaticProps({ params }) {
    const productData = await getProductData(params.id)
    const images = range(0, productData.imageQuantity).map(i => `/images/${productData.id}/${i}.jpg`)

    return {
        props: {
            productData: {
                ...productData,
                images
            },

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