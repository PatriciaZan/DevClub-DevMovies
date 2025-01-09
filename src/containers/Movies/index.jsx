import { useNavigate } from 'react-router-dom';

import { Background, Container, Info, Poster, ContainerButtons } from './styles';
import Button from '../../components/Button';
import Slider from '../../components/slider';

import getImages from '../../utils/getImages'
import Modal from '../../components/Modal';
import { getMovies, getTopMovies, getUpcomingMovie } from '../../services/getData';
import { useEffect, useState } from 'react';

function Movies(){
    const [showModal, setShowModal] = useState(false)
    const [movie, setMovie] = useState()
    const [topMovies, setTopMovies] = useState()
    const [upcomingMovie, setUpcomingMovie] = useState()
    const navigate = useNavigate()

    useEffect( () => {
        
        async function getAllData(){
            // Chamas de API que serão enviadas para o getData em services
            Promise.all([
                getMovies(),
                getTopMovies(),
                getUpcomingMovie()
            ])
            //resultados da chamada, retorna um array, onde cada posição contém as informações da chamada.
            .then(([movie, topMovies, upcomingMovie]) => {
                setMovie(movie)   
                setTopMovies(topMovies)
                setUpcomingMovie(upcomingMovie)
            })
              .catch((error) => console.error(error))
        }

        getAllData()
    }, [])

    


    return (
        <>
        { movie && (
        <Background img={getImages(movie.backdrop_path)}>
            {showModal && <Modal movieId={movie.id} setShowModal={setShowModal}/>}
            <Container>
                <Info>
                    <h1>{movie.title}</h1>
                    <p>{movie.overview}</p>

                    <ContainerButtons>
                        <Button onClick={() => navigate(`/detalhe/${movie.id}`)} red={true}>Watch Now</Button>
                        <Button onClick={() => setShowModal(true)} red={false}>Watch Trailer</Button>
                    </ContainerButtons>
                </Info>
                <Poster>
                    <img src={getImages(movie.poster_path)} 
                        alt="Capa do Filme" />
                </Poster>
            </Container>
        </Background>
    )}
        {topMovies && <Slider info={topMovies} title={'Top Movies'} />}
        {upcomingMovie && <Slider info={upcomingMovie} title={'Upcoming Movies'} />}
        
        </>
    )
}

export default Movies


