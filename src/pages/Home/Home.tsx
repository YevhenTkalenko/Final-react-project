import { Container } from '@mui/material'
import ProductsList from '../../Container/Components/ProductsList/ProductsList'
import Reviews from '../../Container/Components/Reviews/Reviews'

interface Props {
    addProductToCart: (count: number, price: number) => void
}
const Home = ({ addProductToCart }: Props) => {
    return (
        <Container>
            <ProductsList addProductToCart={addProductToCart} />
            <Reviews />
        </Container>
    )
}
export default Home
