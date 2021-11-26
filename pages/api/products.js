import { getProductsData, getProductData } from "../../lib/products"

export default async function handler(req, res) {
    if (req.method == 'GET') {
        const ids = req.query.ids

        // If there is only one id, it will not be an array and calling `getProductsData`,
        // with it will cause an error (getProduct's'Data != getProductData)
        if (Array.isArray(ids)) {
            const products = await getProductsData(ids)
            res.status(200).json(products)
        } else {
            const product = await getProductData(ids)
            res.status(200).json([product])
        }
        
    } else {
        req.method(405)
    }
}