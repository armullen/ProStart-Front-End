import { Link } from 'react-router-dom'

function Banner() {
    return(
        <div className="banner">
            <Link to='/login'>Log In</Link>
            <Link to='/signup'>Sign Up</Link>
        </div>
    )
}

export default Banner;