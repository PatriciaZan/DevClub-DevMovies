//import React from "react"
import { useState, useEffect } from 'react';

import { useNavigate } from 'react-router-dom';

import { Background, Container, Info, Poster, ContainerButtons } from './styles';
import Button from '../../components/Button';
import Slider from '../../components/slider';

import getImages from '../../utils/getImages'
import Modal from '../../components/Modal';
import { getMovies, getPopularSeries, getTopMovies, getTopPeople, getTopSeries } from '../../services/getData';

function Home(){
    const [showModal, setShowModal] = useState(false)
    const [movie, setMovie] = useState()
    const [topMovies, setTopMovies] = useState()
    const [topSeries, setTopSeries] = useState()
    const [popularSeries, setPopularSeries] = useState()
    const [topPeople, setTopPeople] = useState()
    const navigate = useNavigate()


    useEffect( () => {
        
        async function getAllData(){
            // Chamas de API que serão enviadas para o getData em services
            Promise.all([
                getMovies(),
                getTopMovies(),
                getTopSeries(),
                getPopularSeries(),
                getTopPeople()
            ])
            //resultados da chamada, retorna um array, onde cada posição contém as informações da chamada.
            .then(([movie, topMovies, topSeries, popularSeries, topPeople]) => {
                setMovie(movie)   
                setTopMovies(topMovies)
                setTopSeries(topSeries)
                setPopularSeries(popularSeries)
                setTopPeople(topPeople)
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
        {topSeries && <Slider info={topSeries} title={'Top Series'} />}
        {popularSeries && <Slider info={popularSeries} title={'Popular Series'} />}
        {topPeople && <Slider info={topPeople} title={'Top Actors'} />}
        </>
    )
}

export default Home

/**Codigo deletado */

/**
 // async function getAllData(){
        //     // Chamas de API que serão enviadas para o getData em services
        //     setMovie(await getMovies())   
        //     setTopMovies(await getTopMovies())
        //     setTopSeries(await getTopSeries())
        //     setPopularSeries(await getPopularSeries())
        //     setTopPeople(await getTopPeople())
        // }

        // getAllData()
 * 
        async function getTopMovies(){
            const { 
                data: { results } 
            } = await api.get('/movie/top_rated')
            setTopMovies(results)
             
        }

        async function getTopSeries(){
            const { 
                data: { results } 
            } = await api.get('/tv/top_rated')
            setTopSeries(results)
              
        }

        async function getPopularSeries(){
            const { 
                data: { results } 
            } = await api.get('/tv/popular')
            setPopularSeries(results)
              
        }

        async function getTopPeople(){
            const { 
                data: { results } 
            } = await api.get('/person/popular')
            setTopPeople(results)
              
        }


getTopMovies()
getTopSeries()
getPopularSeries()
getTopPeople()
  
  
 */