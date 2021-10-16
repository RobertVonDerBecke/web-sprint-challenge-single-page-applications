import { Row, Col, Container, CardBody, CardText, Button, Card, ButtonGroup, Jumbotron } from "reactstrap";

export default function Home() {
  
    return (
        <div className='othersSec'>
            <Container>
            <Jumbotron fluid >
          <div className='mainContent'>
            <Container fluid>
              <h1>Your favorite food, delivered while Coding</h1>
              <Button id='order-pizza'color='success' href='/pizza'>Pizza?</Button>
            </Container>
          </div>
      </Jumbotron>

            <h4>Food delivery in Gotham City</h4>
                <Row>
                    <Col xs="4">
                    <div>
                        <Card>
                            <img width="100%" src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80" alt="" />
                            <CardBody>
                                    <CardText>Not Mc Donalds</CardText>
                                    <ButtonGroup>
                                        <Button color='info'size='sm'>23-30 Min</Button>
                                        <Button color='info'size='sm'>$5.99 Delivery Fee</Button>
                                    </ButtonGroup>
                            </CardBody>
                        </Card>
                    </div>
                    </Col>
                    <Col xs="4">
                    <div>
                        <Card>
                            <img width="100%" src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80" alt="" />
                            <CardBody>
                                    <CardText>Sweet Green</CardText>
                                    <ButtonGroup>
                                        <Button color='info'size='sm'>23-30 Min</Button>
                                        <Button color='info'size='sm'>$5.99 Delivery Fee</Button>
                                    </ButtonGroup>
                            </CardBody>
                        </Card>
                    </div>
                    </Col>
                    <Col xs="4">
                    <div>
                        <Card>
                            <img width="100%" src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80" alt="" />
                            <CardBody>
                                    <CardText>Star Bucks</CardText>
                                    <ButtonGroup>
                                        <Button color='info'size='sm'>23-30 Min</Button>
                                        <Button color='info' size='sm'>$5.99 Delivery Fee</Button>
                                    </ButtonGroup>
                            </CardBody>
                        </Card>
                    </div>
                    </Col>
                </Row>
            </Container>
            </div>
    )
  }