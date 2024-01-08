import PRODUCTS, {
    Product,
    getProductObject,
} from '../../../utils/productsArray'
import CartProductListItem from './CartProductListItem'

interface Props {
    productsInCard: {
        [id: number]: number
    }
    productsObject?: {
        [id: number]: Product
    }

    CartItem?: any

    removeProductFromCard?: (id: number) => void
    changeProdactQuantity?: (id: number, count: number) => void
}

const CartProductList = ({
    productsInCard,
    productsObject = getProductObject(PRODUCTS),
    CartItem = CartProductListItem,
    removeProductFromCard,
    changeProdactQuantity,
}: Props) => {
    return (
        <>
            {Object.keys(productsInCard).map((productId) => {
                return (
                    <CartItem
                        key={productId}
                        product={productsObject[parseInt(productId)]}
                        productCount={productsInCard[parseInt(productId)]}
                        removeProductFromCard={removeProductFromCard}
                        changeProdactQuantity={changeProdactQuantity}
                    />
                )
            })}
        </>
    )
}
export default CartProductList
