import { useState } from "react";
import axios from "axios";
import { Card, Button } from 'react-bootstrap';
import './../components/MainContent/MainContent.css';
import ModalDetail from './ModalDetail/ModalDetail.js';


const CardMovie = (props) => {

    const [movieDetails, setMovieDetails] = useState([]);
    const getMovieDetails = (movieid) => {
        axios.get(`${process.env.REACT_APP_BASE_URL}/movie/${movieid}`, {
            params: {
                api_key: process.env.REACT_APP_TMDB_KEY
            }
        }).then((response) => {
            setMovieDetails(response.data);
        })
    }

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <Card style={{ width: '19rem', backgroundColor: '#1c2635', color: '#fff' }}>
            <Card.Img variant="top" src={props.poster} />
            <Card.Body>
                <Card.Title>{props.title}</Card.Title>
                <Card.Subtitle className="my-2 text-muted">{props.date}</Card.Subtitle>
                <ModalDetail
                    show={show}
                    onCloseClick={() => handleClose()}
                    posterPath={movieDetails.poster_path}
                    title={movieDetails.title}
                    tagline={movieDetails.tagline}
                    release={movieDetails.release_date}
                    overview={movieDetails.overview}
                    duration={movieDetails.runtime}

                />
                <Button
                    className='btn-detail'
                    variant="outline-light"
                    onClick={() => { handleShow(); getMovieDetails(props.movieid) }}>
                    Details
                </Button>
            </Card.Body>
        </Card>
    );
}

export default CardMovie;
