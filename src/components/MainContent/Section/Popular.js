import { useEffect, useState } from "react";
import axios from "axios";

import { Container, Row, Col } from "react-bootstrap";
import CardMovie from "../../CardMovie";
import "./../MainContent.css"

const Popular = () => {

    const [movies, setMovies] = useState([]);
    useEffect(() => {
        axios.get(`${process.env.REACT_APP_BASE_URL}/movie/popular`, {
            params: {
                api_key: process.env.REACT_APP_TMDB_KEY
            }
        }).then((response) => {
            setMovies(response.data.results)
        })
    }, []);

    return (
        <Container className="popular-section" id='popular'>
            <Row>
                <Col className="section-tittle">
                    <h1>Popular Movies</h1>
                </Col>
            </Row>
            <Row>
                {movies.map((result, index) => {
                    return (
                        <Col className="my-3 d-flex justify-content-center" key={index} xs={4} sm={3}>
                            <CardMovie
                                title={result.title}
                                poster={`${process.env.REACT_APP_TMDB_IMAGE_URL}/${result.poster_path}`}
                                date={result.release_date}
                                movieid={result.id}
                            />
                        </Col>
                    )
                })}
            </Row>
        </Container>
    )
}

export default Popular;