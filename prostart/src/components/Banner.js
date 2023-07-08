import { Link } from 'react-router-dom'

function Banner() {
    return(
        <div className="banner">
            <div className='bannerlinks'>
                <Link to='/login'>Log In</Link>
                <Link to='/signup'>Sign Up</Link>
            </div>
        </div>
    )
}

export default Banner;