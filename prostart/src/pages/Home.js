import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import InputGroup from 'react-bootstrap/InputGroup';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

function Home () {
    return(
        <Container>
            <Row>
                <Col>
                <Card>
                    <Card.Body>
                    <Card.Text>Where players go to get better.
                    </Card.Text>
                        </Card.Body>
                             <Card.Img variant="bottom" src="https://scontent-msp1-1.xx.fbcdn.net/v/t39.30808-6/331317465_564677602055602_3284773390598219659_n.jpg?stp=cp6_dst-jpg_s960x960&_nc_cat=100&ccb=1-7&_nc_sid=8631f5&_nc_ohc=XWKjIbvdiDoAX8IU6Y1&_nc_ht=scontent-msp1-1.xx&oh=00_AfDyg5ajqV8HQZgPkhVI5rfur2Bra1sRDyfrauR5Cp7I-w&oe=64B0CE9E" />
                    </Card>
                </Col>
                <Col>
                <Card>
                    <Card.Header>Our Mission Statement:</Card.Header>
                    <Card.Body>
                        <blockquote className="blockquote mb-0">
                            <p>{' '}
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
                                posuere erat a ante.{' '}
                            </p>
                        </blockquote>
                    </Card.Body>
                </Card>
                </Col>
            </Row> 
            <Row>
                <Col>
                <InputGroup className="mb-3">
                    <Card>
                        <h4>Sign up for our Newsletter!</h4>
                        <Form.Control
                            placeholder="email"
                            aria-label="email"
                            aria-describedby="basic-addon2"/>
                        <Button variant="outline-secondary" id="button-addon2">Sign Up
                        </Button>
                    </Card>
                </InputGroup>
                </Col>
                <Col>UPCOMING EVENTS</Col>
            </Row>
        </Container>
    )
}

export default Home;