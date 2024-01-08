import { Container, Grid, Typography } from '@mui/material'
import CartProductList from '../../Container/Components/CartProductList/CartProductList'
import CartTotal from '../../Container/Components/CartTotal/CartTotal'
import CartProductListItemExtended from '../../Container/Components/CartProductList/CartProductListItemExtended'
import { useAppSelector } from '../../redux/hooks'
import { Link } from 'react-router-dom'

const CartPage = () => {
    const productsInCard = useAppSelector((state) => state.productsInCart)

    return (
        <>
            <div style={{ marginLeft: 25 }}>
                <Container>
                    <Typography
                        variant="h4"
                        component="h1"
                        sx={{
                            marginBottom: 10,
                            marginTop: 5,
                            display: 'flex',
                            justifyContent: 'center',
                        }}
                    >
                        {' '}
                        Cart{' '}
                    </Typography>
                    <Grid container spacing={2}>
                        <CartProductList
                            productsInCard={productsInCard}
                            CartItem={CartProductListItemExtended}
                        />
                    </Grid>
                    <CartTotal productsInCard={productsInCard} />
                    <Link to="/checkout">Proceed to checkOut</Link>
                </Container>
            </div>
        </>
    )
}
export default CartPage
