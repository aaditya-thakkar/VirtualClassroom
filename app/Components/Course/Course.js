import React from 'react';
import { Jumbotron, Button, Container, Row, Col } from 'reactstrap';

export default class Course extends React.Component {
    render() {
        return (
            <div className="body" >
                <Container>
                <Row>
                    <Col sm={{ size: 4, push: 2, offset: 3 }}>
                        <Jumbotron>
                            <h1 className="display-3">Hello, world!</h1>
                            <p className="lead">This is a simple hero unit, a simple Jumbotron-style component for calling extra attention to featured content or information.</p>
                            <hr className="my-2" />
                            <p>It uses utility classes for typgraphy and spacing to space content out within the larger container.</p>
                            <p className="lead">
                                <Button className="indigo primary">Learn More</Button>
                            </p>
                        </Jumbotron>
                    </Col>
                    <Col sm="12" md={{ size: 8, offset: 2 }}>
                        <Jumbotron>
                            <h1 className="display-3">Hello, world!</h1>
                            <p className="lead">This is a simple hero unit, a simple Jumbotron-style component for calling extra attention to featured content or information.</p>
                            <hr className="my-2" />
                            <p>It uses utility classes for typgraphy and spacing to space content out within the larger container.</p>
                            <p className="lead">
                                <Button className="indigo primary">Learn More</Button>
                            </p>
                        </Jumbotron>
                        <Jumbotron>
                            <h1 className="display-3">Hello, world!</h1>
                            <p className="lead">This is a simple hero unit, a simple Jumbotron-style component for calling extra attention to featured content or information.</p>
                            <hr className="my-2" />
                            <p>It uses utility classes for typgraphy and spacing to space content out within the larger container.</p>
                            <p className="lead">
                                <Button className="indigo primary">Learn More</Button>
                            </p>
                        </Jumbotron>
                        <Jumbotron>
                            <h1 className="display-3">Hello, world!</h1>
                            <p className="lead">This is a simple hero unit, a simple Jumbotron-style component for calling extra attention to featured content or information.</p>
                            <hr className="my-2" />
                            <p>It uses utility classes for typgraphy and spacing to space content out within the larger container.</p>
                            <p className="lead">
                                <Button className="indigo primary">Learn More</Button>
                            </p>
                        </Jumbotron>
                        <Jumbotron>
                            <h1 className="display-3">Hello, world!</h1>
                            <p className="lead">This is a simple hero unit, a simple Jumbotron-style component for calling extra attention to featured content or information.</p>
                            <hr className="my-2" />
                            <p>It uses utility classes for typgraphy and spacing to space content out within the larger container.</p>
                            <p className="lead">
                                <Button className="indigo primary">Learn More</Button>
                            </p>
                        </Jumbotron>
                    </Col>
                </Row>
            </Container>
            </div >
        );
    }
}