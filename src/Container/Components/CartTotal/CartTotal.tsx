import PRODUCTS, {
    Product,
    getProductObject,
} from '../../../utils/productsArray'

interface Props {
    productsInCard: {
        [id: number]: number
    }

    productsObject?: {
        [id: number]: Product
    }
}
const CartTotal = ({
    productsInCard,
    productsObject = getProductObject(PRODUCTS),
}: Props) => {
    return (
        <>
            <div>
                Total:{' '}
                {Object.keys(productsInCard).reduce(
                    (total, productId) =>
                        total +
                        productsObject[parseInt(productId)].price *
                            productsInCard[parseInt(productId)],
                    0
                )}
                $
            </div>
        </>
    )
}
export default CartTotal
