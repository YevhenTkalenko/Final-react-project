export interface Product {
    id: number
    image: string
    title: string
    description: string
    type: string
    capacity: string
    price: number
    category?: string
}

const PRODUCTS: Product[] = [
    {
        id: 1,
        image: '/images/first.webp',
        title: 'Iphone 14 PRO',
        description: 'This is Iphone 14 PRO',
        type: 'phone',
        capacity: '256',
        price: 1200,
        category: "phone"
    },
    {
        id: 2,
        image: '/images/second.webp',
        title: 'Iphone 12 PRO',
        description: 'This is Iphone 12 PRO',
        type: 'phone',
        capacity: '128',
        price: 1000,
        category: "phone"
    },
    {
        id: 3,
        image: '/images/third.webp',
        title: 'Iphone 13 PRO',
        description: 'This is Iphone 13 PRO',
        type: 'phone',
        capacity: '256',
        price: 800
    },
    {
        id: 40,
        image: '/images/fourth.webp',
        title: 'Iphone 10 PRO',
        description: 'This is Iphone 10 PRO',
        type: 'phone',
        capacity: '64',
        price: 500
    },
    {
        id: 5,
        image: '/images/fifth.webp',
        title: 'Iphone 11 PRO-Max',
        description: 'This is Iphone 11 PRO-Max',
        type: 'phone',
        capacity: '512',
        price: 1800
    },
    {
        id: 6,
        image: '/images/sixth.webp',
        title: 'Iphone 9',
        description: 'This is Iphone 9',
        type: 'phone',
        capacity: '36',
        price: 200
    },

]

export const getProductObject = (array: Product[]) =>
    array.reduce(
        (object, product) => ({
            ...object,
            [product.id]: product
        }), {})

export default PRODUCTS