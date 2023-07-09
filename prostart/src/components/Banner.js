import { Link } from 'react-router-dom'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
// import Container from 'react-bootstrap/Container'

function Banner() {
    return(
        <div className="mb-2">
                <Card>
                    <Card.Body>
                        <Button variant='outline-dark' size='sm'>
                            <Link to='/login'>Log In</Link>
                        </Button>{' '}
                        <Button variant='outline-dark' size='sm'>
                            <Link to='/signup'>Sign Up</Link>
                        </Button>{' '}
                    </Card.Body>
                </Card>
        </div>
    )
}

export default Banner;