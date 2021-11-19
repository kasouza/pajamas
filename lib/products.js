import matter from 'gray-matter'
import { remark } from 'remark'
import html from 'remark-html'

import fs from 'fs'
import path from 'path'
import process from 'process'

const productsPath = path.join(process.cwd(), 'products')

export function getAllProductsData() {
    const paths = fs.readdirSync(productsPath)

    const products = paths.map(filename => {
        const id = filename.replace('.md', '')

        const fileContent = fs.readFileSync(path.join(productsPath, filename), 'utf-8')

        const matterResult = matter(fileContent)

        return {
            id,
            ...matterResult.data
        }
    })

    return products
}

/* extract the id from the filename,
 and build a object like this:
 {
     params: {
         id: "daskldjaskl"
     }
 },
 then build a list withs these objects and return it
*/
export function getAllProductsIds() {
    const paths = fs.readdirSync(productsPath)
    const ids = paths.map(filename => {
        const id = filename.replace('.md', '')

        return {
            params: {
                id
            }
        }
    })

    return ids
}

/*
    Return all data for a specific product
*/
export async function getProductData(id) {
    const fileContent = fs.readFileSync(path.join(productsPath, `${id}.md`), 'utf-8')

    const matterResult = matter(fileContent)

    const processedContent = await remark()
        .use(html)
        .process(matterResult.content)
    
    const htmlContent = processedContent.toString()

    return {
        id,
        htmlContent,
        ...matterResult.data,
    }
}