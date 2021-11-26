import styles from "../../styles/Product.module.css"

import Carousel from "../../components/Carousel"
import Footer from "../../components/Footer"
import Nav from "../../components/Nav"
import Radio from "../../components/Radio"

import { getAllProductsIds, getProductData } from "../../lib/products"

export default function Product({ productData, onAddToCart }) {
    return (
        <div className={styles.container}>
            <header>
                <Nav />
            </header>

            <main className={styles.main}>
                <Carousel className={styles.carousel} />

                <div className={styles.content}>
                    <section className={styles.heading}>
                        <h1 className={styles.title}>{productData.title}</h1>
                        <span className={styles.price}>{`R$${productData.price.toFixed(2)}`}</span>
                    </section>

                    <section className={styles.options}>
                        <h2>Tamanho: </h2>
                        <ul className={styles.size}>
                            <li>
                                <Radio name="size" value="P" />
                            </li>

                            <li>
                                <Radio name="size" value="M" />
                            </li>

                            <li>
                                <Radio name="size" value="G" />
                            </li>

                            <li>
                                <Radio name="size" value="GG" />
                            </li>
                        </ul>
                    </section>

                    <button
                        onClick={() => onAddToCart(productData.id)}
                        className={styles.addToCart}>
                        Add To cart
                    </button>

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