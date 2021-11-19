import Carousel from "../../components/Carousel";
import { getAllProductsIds, getProductData } from "../../lib/products";

export default function Product({ productData }) {
    return (
        <>
            <h1>{productData.title}</h1>
            <Carousel width={300} height={200}/>
        </>
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