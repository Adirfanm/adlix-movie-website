import { Container, Row, Col, Button, Modal, ListGroup, CloseButton } from 'react-bootstrap';
import './ModalDetail.css'

function ModalDetail(props) {

    return (
        <>
            <Modal
                size='lg'
                centered
                show={props.show}
                onHide={props.onCloseClick}
                className="modal-detail">
                <Modal.Header style={{ border: "none", paddingBottom: "0", marginTop: "18px" }}>
                    <Modal.Title className="ms-2">Movie Details</Modal.Title>
                    <CloseButton variant="white" className='me-2' onClick={props.onCloseClick} />
                </Modal.Header>
                <Modal.Body>
                    <Container>
                        <Row>
                            <Col md={3}>
                                <img
                                    src={`${process.env.REACT_APP_TMDB_IMAGE_URL}${props.posterPath}`}
                                    alt={`${props.title} poster`}
                                    className="img-fluid my-3" />
                            </Col>
                            <Col md className='list-wrapper'>
                                <ListGroup>
                                    <ListGroup.Item style={{ background: "transparent", color: "white" }}>
                                        <h4>{props.title}</h4>
                                    </ListGroup.Item>
                                    <ListGroup.Item style={{ background: "transparent", color: "white" }}>
                                        <strong>Release  : </strong>{props.release}
                                    </ListGroup.Item>
                                    <ListGroup.Item style={{ background: "transparent", color: "white" }}>
                                        <strong>Duration  : </strong>{props.duration} min.
                                    </ListGroup.Item>
                                    <ListGroup.Item style={{ background: "transparent", color: "white" }}>
                                        <strong>Tagline  : </strong>"{props.tagline}"
                                    </ListGroup.Item>
                                    <ListGroup.Item style={{ background: "transparent", color: "white" }}>
                                        <strong>Overview  : </strong> <p className='mb-0 mt-2'>{props.overview}</p>
                                    </ListGroup.Item>
                                </ListGroup>
                            </Col>
                        </Row>
                    </Container>
                </Modal.Body>
                <Modal.Footer style={{ border: "none" }}>
                    <Button
                        variant="secondary"
                        onClick={props.onCloseClick}
                        className="me-3 mb-4">
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default ModalDetail;