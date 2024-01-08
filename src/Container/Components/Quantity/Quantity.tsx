import { Button, TextField } from '@mui/material'

interface Props {
    decrement: () => void
    increment: () => void
    count: number
    minCount?: number
}

const Quantity = ({ decrement, increment, count, minCount = 1 }: Props) => {
    return (
        <div
            style={{
                display: 'flex',
            }}
        >
            <Button
                variant="contained"
                color="success"
                onClick={() => decrement()}
                disabled={count <= minCount}
            >
                -
            </Button>
            <TextField
                size="small"
                value={count}
                sx={{
                    width: 180,
                    marginLeft: '5px',
                    marginRight: '5px',
                }}
            />
            <Button
                variant="contained"
                color="success"
                onClick={() => increment()}
                disabled={count >= 10}
            >
                +
            </Button>
        </div>
    )
}
export default Quantity
