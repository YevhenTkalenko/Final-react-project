import { Typography, Grid } from '@mui/material'
import ProductListItem from './ProductListItem'
import PRODUCTS from '../../../utils/productsArray'

interface Props {
    addProductToCart: (count: number, price: number) => void
}

interface ProductsProps {
    id: number
    image: string
    title: string
    description: string
    type: string
    capacity: string
    price: number
}

const ProductsList = ({ addProductToCart }: Props) => {
    return (
        <>
            <Typography variant="h4" align="center" component="h2">
                ProductsList
            </Typography>
            <Grid container spacing={3}>
                {PRODUCTS.map(
                    ({
                        id,
                        image,
                        title,
                        description,
                        type,
                        capacity,
                        price,
                    }: ProductsProps) => {
                        return (
                            <Grid item xs={12} sm={6} md={4} key={id}>
                                <ProductListItem
                                    id={id}
                                    addProductToCart={addProductToCart}
                                    image={image}
                                    title={title}
                                    description={description}
                                    type={type}
                                    capacity={capacity}
                                    price={price}
                                />
                            </Grid>
                        )
                    }
                )}
            </Grid>
        </>
    )
}
export default ProductsList
