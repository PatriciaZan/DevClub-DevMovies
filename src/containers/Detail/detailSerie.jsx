import { useEffect, useState } from "react";
import { useParams } from 'react-router-dom'

import Slider from '../../components/slider'

import { Container, Background, Cover, Info, ContainerMovies } from "./style";
import getImages from '../../utils/getImages'
import { getSerieById, getSeriesVideos, getSerieCredits, getSerieSimilar } from '../../services/getData'
import SpanGenres from "../../components/SpanGenres";
import Credits from "../../components/Credits";


function DetailSeries(){
    const { id } = useParams()
    const [serie, setSerie] = useState()
    const [serieVideos, setSerieVideos] = useState()
    const [serieCredits, setSerieCredits] = useState()
    const [serieSimilar, setSerieSimilar] = useState()

    useEffect( () => {
        
    async function getAllData(){
        // Chamas de API que serão enviadas para o getData em services
        Promise.all([
            getSerieById(id),
            getSeriesVideos(id),
            getSerieCredits(id),
            getSerieSimilar(id),
        ])
        //resultados da chamada, retorna um array, onde cada posição contém as informações da chamada.
        .then(([ serie, videos, credits, similar ]) => {
            //console.log({ serie, videos, credits, similar});
            
            setSerie(serie)   
            setSerieVideos(videos)
            setSerieCredits(credits)
            setSerieSimilar(similar)
        })
          .catch((error) => console.error(error))
    }

    getAllData()
}, [])


    return (
        <>
        {serie && ( 
        <>
        <Background image={getImages(serie.data.backdrop_path)}/>
        <Container>
            <Cover>
                <img src={getImages(serie.data.poster_path)} alt="" />
            </Cover>
            <Info>
                <h2>{serie.data.name}</h2>
                <SpanGenres genres={serie.data.genres} />
                <p>{serie.data.overview}</p>
                <div>
                    <Credits credits={serieCredits}/>
                </div>
            </Info>
            
        </Container>
        <ContainerMovies>
            {serieVideos && serieVideos.slice(0, 3).map(video => (
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
        
            {serieSimilar && <Slider info={serieSimilar} title={'Similar Series'}/>}
        
        </>
        )}
        </>
    )
}

export default DetailSeries