import { useEffect, useState } from "react";
import { useParams } from 'react-router-dom'

import Slider from '../../components/slider'

import { Container, Background, Cover, Info, ContainerMovies } from "./style";
import getImages from '../../utils/getImages'
import { getMovieById, getMovieVideos, getMovieCredits, getMovieSimilar } from '../../services/getData'
import SpanGenres from "../../components/SpanGenres";
import Credits from "../../components/Credits";


function Detail(){
    const { id } = useParams()
    const [movie, setMovie] = useState()
    const [movieVideos, setMovieVideos] = useState()
    const [movieCredits, setMovieCredits] = useState()
    const [movieSimilar, setMovieSimilar] = useState()

    useEffect( () => {
        
    async function getAllData(){
        // Chamas de API que serão enviadas para o getData em services
        Promise.all([
            getMovieById(id),
            getMovieVideos(id),
            getMovieCredits(id),
            getMovieSimilar(id),
        ])
        //resultados da chamada, retorna um array, onde cada posição contém as informações da chamada.
        .then(([ movie, videos, credits, similar ]) => {
            //console.log({ movie, videos, credits, similar});
            
            setMovie(movie)   
            setMovieVideos(videos)
            setMovieCredits(credits)
            setMovieSimilar(similar)
        })
          .catch((error) => console.error(error))
    }

    getAllData()
}, [])


    return (
        <>
        {movie && ( 
        <>
        <Background image={getImages(movie.data.backdrop_path)}/>
        <Container>
            <Cover>
                <img src={getImages(movie.data.poster_path)} alt="" />
            </Cover>
            <Info>
                <h2>{movie.data.title}</h2>
                <SpanGenres genres={movie.data.genres} />
                <p>{movie.data.overview}</p>
                <div>
                    <Credits credits={movieCredits}/>
                </div>
            </Info>
            
        </Container>
        <ContainerMovies>
            {movieVideos && movieVideos.slice(0, 3).map(video => (
                <div key={video.id}>
                    <h4>{video.name}</h4>
                <iframe 
                    src={`https://www.youtube.com/embed/${video.key}`}
                    title='YouTube Video Player'
                    height='500px'
                    width='100%'
                ></iframe>
                </div>
            ))}
        </ContainerMovies>
        
            {movieSimilar && <Slider info={movieSimilar} title={'Similar Movies'}/>}
        
        </>
        )}
        </>
    )
}

export default Detail