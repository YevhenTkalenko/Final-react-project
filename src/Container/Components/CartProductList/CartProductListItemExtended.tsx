import { Button, Card, CardActions, CardContent, Grid } from '@mui/material'
import { Product } from '../../../utils/productsArray'
import Quantity from '../Quantity/Quantity'
import { useAppDispatch } from '../../../redux/hooks'
import {
    removeProductFromCart,
    changeProductQuantity,
} from '../../../redux/cartReducer'

interface Props {
    product: Product
    productCount: number
}

const CartProductListItemExtended = ({ product, productCount }: Props) => {
    const dispath = useAppDispatch()

    return (
        <Grid item xs={12} sm={4}>
            <Card>
                <CardContent>
                    <div className="product-image">
                        <img src={product.image} alt="" />
                    </div>
                    <div>{product.title}</div>
                    <p>Price for 1 item: {product.price}</p>
                    <p>Count: {productCount}</p>
                    <Quantity
                        decrement={() =>
                            productCount <= 1
                                ? dispath(removeProductFromCart(product.id))
                                : dispath(
                                      changeProductQuantity({
                                          id: product.id,
                                          count: productCount - 1,
                                      })
                                  )
                        }
                        increment={() =>
                            dispath(
                                changeProductQuantity({
                                    id: product.id,
                                    count: productCount + 1,
                                })
                            )
                        }
                        count={productCount}
                        minCount={0}
                    />
                </CardContent>
                <CardActions>
                    <Button
                        color="success"
                        variant="contained"
                        onClick={() =>
                            dispath(removeProductFromCart(product.id))
                        }
                    >
                        Delete
                    </Button>
                </CardActions>
            </Card>
        </Grid>
    )
}
export default CartProductListItemExtended
