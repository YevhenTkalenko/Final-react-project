import { useParams } from 'react-router-dom'
import PRODUCTS, { Product, getProductObject } from '../../utils/productsArray'
import { Container } from '@mui/material'

interface Props {
    productsObject?: {
        [id: number]: Product
    }
}

const ProductPage = ({
    productsObject = getProductObject(PRODUCTS),
}: Props) => {
    const { id } = useParams()

    return (
        <>
            <Container>
                <div style={{ marginTop: '20px' }}>
                    {productsObject[parseInt(id!)].title}
                </div>
            </Container>
        </>
    )
}
export default ProductPage
