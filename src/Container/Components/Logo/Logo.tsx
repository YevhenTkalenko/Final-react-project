import Typography from '@mui/material/Typography'
import logo from '../../../assets/logo.svg'

interface Props {}
const Logo = (props: Props) => {
    return (
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <img src={logo} alt="logo" />
        </Typography>
    )
}
export default Logo
