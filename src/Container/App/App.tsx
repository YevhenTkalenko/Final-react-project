import { useState } from 'react'
import Footer from '../Footer/Footer'
import Header from '../Header/Header'
import CssBaseline from '@mui/material/CssBaseline'
import { Route, Routes } from 'react-router-dom'
import Home from '../../pages/Home/Home'
import CartPage from '../../pages/Cart/CartPage'
import CheckOutPage from '../../pages/CheckOut/CheckOutPage'
import ProductPage from '../../pages/Product/ProductPage'

interface Props {}

interface ProductsInCard {
    [id: number]: number
}

const App = (props: Props) => {
    const [productsInCard, setProductsInCard] = useState<ProductsInCard>({
        1: 2,
        2: 4,
    })

    const addProductToCart = (id: number, count: number) => {
        setProductsInCard((prevState) => ({
            ...prevState,
            [id]: (prevState[id] || 0) + count,
        }))
    }

    return (
        <>
            <CssBaseline />
            <Header />
            <Routes>
                <Route
                    path="/"
                    element={<Home addProductToCart={addProductToCart} />}
                ></Route>
                <Route path="/cart" element={<CartPage />}></Route>
                <Route path="/checkout" element={<CheckOutPage />}></Route>
                <Route path="/product/:id" element={<ProductPage />}></Route>
            </Routes>
            <Footer />
        </>
    )
}
export default App
