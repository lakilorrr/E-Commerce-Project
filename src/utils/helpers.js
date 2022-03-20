export const formatPrice = number => {
    let newNum = Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(number)
    return newNum
}

export const getUniqueValues = () => {}
