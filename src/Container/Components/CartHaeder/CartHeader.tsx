import CartTotal from '../CartTotal/CartTotal'
import CartProductList from '../CartProductList/CartProductList'
import { useAppSelector } from '../../../redux/hooks'

const CartHeader = () => {
    const productsInCard = useAppSelector((state) => state.productsInCart)

    return (
        <>
            <div style={{ marginLeft: 25 }}>
                <CartProductList productsInCard={productsInCard} />
                <CartTotal productsInCard={productsInCard} />
            </div>
        </>
    )
}
export default CartHeader
