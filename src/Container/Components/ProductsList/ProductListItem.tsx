import { Card, CardActions, CardContent, Button } from '@mui/material'
import './ProductListItem.scss'
import { useState } from 'react'
import Quantity from '../Quantity/Quantity'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder'
import FavoriteIcon from '@mui/icons-material/Favorite'
import { useAppDispatch, useAppSelector } from '../../../redux/hooks'
import { addLike, removeLike } from '../../../redux/likeReducer'
import { addProductToCart } from '../../../redux/cartReducer'
import { Link } from 'react-router-dom'

interface Props {
    id: number
    title: string
    image: string
    description: string
    type: string
    capacity: string
    price: number
    addProductToCart?: (count: number, price: number) => void
}

const ProductListItem = ({
    id,
    title,
    image,
    description,
    type,
    capacity,
    price,
}: Props) => {
    const [count, setCounter] = useState<number>(1)

    const increment = () => {
        setCounter((prevState) => prevState + 1)
    }
    const decrement = () => {
        setCounter((prevState) => prevState - 1)
    }

    const isLiked: boolean = useAppSelector(
        (state) => state.productsLikeState[id]
    )

    const dispath = useAppDispatch()

    return (
        <>
            <Card variant="outlined">
                <CardContent className="product">
                    <Button
                        variant="outlined"
                        onClick={() =>
                            isLiked
                                ? dispath(removeLike(id))
                                : dispath(addLike(id))
                        }
                    >
                        {isLiked ? <FavoriteIcon /> : <FavoriteBorderIcon />}
                    </Button>
                    <div className="product-image">
                        <img src={image} alt="img" />
                    </div>
                    <div className="product-title">
                        <Link to={`/product/${id}`}>{title}</Link>
                    </div>
                    <div className="product-descr">This is {description}</div>
                    <div className="product-features">Type: {type}</div>
                    <div className="product-features">Capacity:{capacity}</div>
                    <div className="product-price">{price}$</div>
                    <div className="product-quantity">
                        <Quantity
                            increment={increment}
                            decrement={decrement}
                            count={count}
                        />
                    </div>
                </CardContent>
                <CardActions className="product-btn-wrap">
                    <Button
                        color="success"
                        variant="contained"
                        onClick={() =>
                            dispath(
                                addProductToCart({
                                    id,
                                    count,
                                })
                            )
                        }
                    >
                        Add to cart
                    </Button>
                </CardActions>
            </Card>
        </>
    )
}
export default ProductListItem
