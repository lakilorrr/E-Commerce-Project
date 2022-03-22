export const formatPrice = number => {
    let newNum = Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(number)
    return newNum
}

export const getUniqueValues = (products, key) => {
    let attributes = products.map(product => product[key])
    if (key === 'colors') {
        attributes = attributes.flat()
    }
    return ['all', ...new Set(attributes)]
}
