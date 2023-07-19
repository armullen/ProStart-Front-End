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
                             <Card.Img variant="bottom" src="/assets/prostartheader.jpeg" />
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