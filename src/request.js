import axios from 'axios'
import { products_url, single_product_url } from './utils/constants'

export const getProducts = () => {
    return new Promise((resolve, reject) => {
        axios
            .get(products_url)
            .then(res => resolve(res))
            .catch(err => reject(err))
    })
}
export const getSingleProduct = (id) => {
    return new Promise((resolve, reject) => {
        axios
            .get(single_product_url+id)
            .then(res => resolve(res))
            .catch(err => reject(err))
    })
}
