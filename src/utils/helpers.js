export const formatPrice = number => {
    let newNum = Intl.NumberFormat('zh-CN', { style: 'currency', currency: 'CNY' }).format(number)
    return newNum
}

export const getUniqueValues = () => {}
