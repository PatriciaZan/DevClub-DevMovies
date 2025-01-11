import { useEffect, useState } from 'react'
import { Container, Background } from './style'

import { getSeriesVideos } from '../../services/getData'

function ModalSeries({ serieId, setShowModal }){
    const [serie, setSerie] = useState()

    useEffect(() => {
        async function getMovies(){
            setSerie(await getSeriesVideos(serieId))
        }
        getMovies()

    }, [])

    return(
        <Background onClick={() => setShowModal(false)}>
            {serie && (
                <Container>
                <iframe 
                src={`https://www.youtube.com/embed/${serie[0].key}`}
                title='YouTube Video Player'
                height='500px'
                width='100%'
                ></iframe>
            </Container>
            )}
            
        </Background>
        

    )
}

export default ModalSeries