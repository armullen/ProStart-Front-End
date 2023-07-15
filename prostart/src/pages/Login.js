import { Link } from 'react-router-dom';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';

function Login () {
    return (
        <>
        <h1>Welcome back!</h1>
        <Form>
      <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
        <Form.Label column sm="2">
          Email
        </Form.Label>
        <Col sm="10">
          <Form.Control Value="email"  placeholder='you@email.com'/>
        </Col>
      </Form.Group>

      <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
        <Form.Label column sm="2">
          Password
        </Form.Label>
        <Col sm="10">
          <Form.Control type="password" placeholder="Password" />
        </Col>
      </Form.Group>
    </Form>
    <button>
        Log In
    </button>
<hr></hr>
        <h6>Dont have an account? We're happy you're here!</h6>
            <div className='logInButtons'>
                <button>
                <Link to='/signup'>Sign Up</Link>
                </button>
            </div>
        </>
    )
}

export default Login;