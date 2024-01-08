import { Product } from '../../../utils/productsArray'

interface Props {
    product: Product
    productCount: number
}

const CartProductListItem = ({ productCount, product }: Props) => {
    return (
        <div>
            {product.title}: {productCount}
        </div>
    )
}
export default CartProductListItem
