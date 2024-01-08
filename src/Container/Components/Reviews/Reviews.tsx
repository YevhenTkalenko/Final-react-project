import {
    Button,
    Card,
    CardContent,
    TextField,
    TextareaAutosize,
    Typography,
} from '@mui/material'
import React, { useState } from 'react'

interface Props {}

interface Review {
    id: number
    name: string
    text: string
}

const Reviews = (props: Props) => {
    const arrReviews: Review[] = [
        {
            id: 1,
            name: 'Валерій Пономар',
            text: 'Як за свою ціну хороший варіант для навчання на останніх курсах універу з можливістю активно провести час із друзями онлайн.',
        },
        {
            id: 2,
            name: 'Максим Павлюк',
            text: 'Замучився зі старим ПК та його гігантськими розмірами, вирішив збагрити старе залізяччя, натомість для роботи та дозвілля придбавши хорошого ноута.',
        },
        {
            id: 3,
            name: 'Юрій Бондарєв',
            text: 'Цілком усим задоволені. Гарний ноутбук за свої гроші.',
        },
    ]

    const [reviews, setReviews] = useState<Review[]>(arrReviews)
    const [newReview, setNewRewiew] = useState<Review>({
        id: 0,
        name: '',
        text: '',
    })

    const handleName = (e: React.ChangeEvent<HTMLInputElement>) => {
        setNewRewiew((prevState) => ({
            ...prevState,
            name: e.target.value,
        }))
    }

    const handleText = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        setNewRewiew((prevState) => ({
            ...prevState,
            text: e.target.value,
        }))
    }

    const onSend = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        if (newReview.name === '' || newReview.text === '') {
            alert('All fields are required!!')
        } else {
            setNewRewiew({
                id: 0,
                name: '',
                text: '',
            })
            setReviews((prevState) => {
                return [...prevState, newReview]
            })
        }
    }

    const onDelete = (id: number) => {
        setReviews((prevState) => {
            return prevState.filter((el) => {
                return el.id !== id
            })
        })
    }

    return (
        <>
            <Typography
                variant="h4"
                component="h2"
                sx={{
                    margin: '60px 0',
                }}
            >
                Reviews
            </Typography>
            <div>
                {reviews.map(({ name, text, id }) => (
                    <Card
                        variant="outlined"
                        sx={{
                            margin: '20px',
                        }}
                        key={id}
                    >
                        <CardContent>
                            <div>Name: {name}</div>
                            <div>{text}</div>
                        </CardContent>
                        <Button type="button" onClick={() => onDelete(id)}>
                            Delete
                        </Button>
                    </Card>
                ))}
            </div>

            <form onSubmit={onSend}>
                <h3>Please leave reaview</h3>
                <div>
                    <TextField
                        label="name"
                        value={newReview.name}
                        onChange={handleName}
                    ></TextField>
                </div>
                <br />
                <div>
                    <TextareaAutosize
                        minRows={5}
                        placeholder="Text"
                        value={newReview.text}
                        onChange={handleText}
                    />
                </div>
                <Button variant="contained" color="success" type="submit">
                    Send
                </Button>
            </form>
        </>
    )
}
export default Reviews
