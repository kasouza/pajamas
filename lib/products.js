import matter from 'gray-matter'

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
            ...matterResult.data
        }
    })

    return products
}