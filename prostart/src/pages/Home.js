import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card'

function Home () {
    return(
        <Container>
            <Row>
                <Card>
                    <Card.Body>
                    <Card.Text>Our Mission
                    </Card.Text>
                    </Card.Body>
                         <Card.Img variant="bottom" src="https://scontent-msp1-1.xx.fbcdn.net/v/t39.30808-6/331317465_564677602055602_3284773390598219659_n.jpg?stp=cp6_dst-jpg_s960x960&_nc_cat=100&ccb=1-7&_nc_sid=8631f5&_nc_ohc=XWKjIbvdiDoAX8IU6Y1&_nc_ht=scontent-msp1-1.xx&oh=00_AfDyg5ajqV8HQZgPkhVI5rfur2Bra1sRDyfrauR5Cp7I-w&oe=64B0CE9E" />
                </Card>
            </Row> 

            <Row>
                <Col>SUBSCRIBE TO OUR NEWSLETTER</Col>
                <Col>UPCOMING EVENTS</Col>
            </Row>
        </Container>
    )
}

export default Home;