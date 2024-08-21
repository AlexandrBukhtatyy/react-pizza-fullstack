export const mapPizzaSize = {
    20: 'Маленькая',
    30: 'Средняя',
    40: 'Большая',
} as const;

export const pizzaSizes = Object.entries(mapPizzaSize).map(([value, name]) => ({
    name,
    value
}))

export const mapPizzaType = {
    1: 'Традиционное',
    2: 'Тонколе'
} as const;

export const pizzaTypes = Object.entries(mapPizzaType).map(([value, name]) => ({
    name,
    value
}))
