//import React from "react"
import { useState, useEffect } from 'react';

import { useNavigate } from 'react-router-dom';

import { Background, Container, Info, Poster, ContainerButtons } from './styles';
import Button from '../../components/Button';
import Slider from '../../components/slider';

import getImages from '../../utils/getImages'
import ModalSeries from '../../components/Modal/indexSerie';
import { getSeries , getPopularSeries,  getTopSeries } from '../../services/getData';


function Series(){
    const [showModal, setShowModal] = useState(false)
    const [serie, setSerie] = useState()
    const [topSeries, setTopSeries] = useState()
    const [popularSeries, setPopularSeries] = useState()
    const navigate = useNavigate()

    

    useEffect( () => {
        
        async function getAllData(){
            // Chamas de API que serão enviadas para o getData em services
            Promise.all([
                getSeries(),
                getTopSeries(),
                getPopularSeries(),
            ])
            //resultados da chamada, retorna um array, onde cada posição contém as informações da chamada.
            .then(([serie, topSeries, popularSeries]) => {
                //console.log({serie});   
                setSerie(serie)
                setTopSeries(topSeries)
                setPopularSeries(popularSeries)
            })
              .catch((error) => console.error(error))
        }

        getAllData()
    }, [])

    


    return (
        <>
        { serie && (
        <Background img={getImages(serie.backdrop_path)}>
            {showModal && <ModalSeries serieId={serie.id} setShowModal={setShowModal}/>}
            <Container>
                <Info>
                    <h1>{serie.name}</h1>
                    <p>{serie.overview}</p>

                    <ContainerButtons>
                        <Button onClick={() => navigate(`/detailSeries/${serie.id}`)} red={true}>Watch Now</Button>
                        <Button onClick={() => setShowModal(true)} red={false}>Watch Trailer</Button>
                    </ContainerButtons>
                </Info>
                <Poster>
                    <img src={getImages(serie.poster_path)} 
                        alt="Capa da serie" />
                </Poster>
            </Container>
        </Background>
    )}
        {topSeries && <Slider info={topSeries} title={'Top Series'} />}
        {popularSeries && <Slider info={popularSeries} title={'Popular Series'} />}
        </>
    )
}

export default Series

//{topPeople && <Slider info={topPeople} title={'Top Actors'} />}