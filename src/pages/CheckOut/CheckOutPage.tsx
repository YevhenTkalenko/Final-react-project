import { Container, Typography } from '@mui/material'
import axios from 'axios'
import React, { useState } from 'react'

interface Props {}

interface Order {
    name: string
    adress: string
}

const CheckOutPage = (props: Props) => {
    const [isOrderSend, setIsOrderSend] = useState<boolean>(false)

    const [orderData, setOrderData] = useState<Order>({
        name: '',
        adress: '',
    })

    const renderForm = () => {
        return (
            <form onSubmit={onSend}>
                <div>
                    <input
                        type="text"
                        placeholder="Your name"
                        onChange={handleName}
                        value={orderData.name}
                    />
                </div>
                <div>
                    <input
                        type="text"
                        placeholder="Your adress"
                        onChange={handleAdress}
                        value={orderData.adress}
                    />
                </div>
                <button type="submit">Send</button>
            </form>
        )
    }

    const renderMessage = () => {
        return (
            <>
                <div>Dear, {orderData.name} thanks for your order</div>
                <div>Your adress is: {orderData.adress}</div>
            </>
        )
    }

    const handleName = (e: React.ChangeEvent<HTMLInputElement>) => {
        setOrderData((prevState) => ({
            ...prevState,
            name: e.target.value,
        }))
    }

    const handleAdress = (e: React.ChangeEvent<HTMLInputElement>) => {
        setOrderData((prevState) => ({
            ...prevState,
            adress: e.target.value,
        }))
    }

    const onSend = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        axios
            .post(
                'https://my-json-server.typicode.com/kznkv-skillup/server/orders',
                {
                    name: orderData.name,
                    adress: orderData.adress,
                }
            )
            .then((resp) => resp.data)
            .then(({ name, adress }) => {
                setOrderData({
                    name,
                    adress,
                })
                setIsOrderSend(true)
            })
    }

    return (
        <>
            <Container>
                <Typography
                    component="h1"
                    variant="h4"
                    sx={{
                        margin: '40px 0px ',
                    }}
                >
                    CheckOutPage
                </Typography>
                {isOrderSend ? renderMessage() : renderForm()}
            </Container>
        </>
    )
}
export default CheckOutPage
