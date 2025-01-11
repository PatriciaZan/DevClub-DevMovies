import { getImages } from "../../utils/getImages"
import { Container } from "./style"

//import Detail from "../../containers/Detail";

//import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Card({ item }){
    const navigate = useNavigate()
    //const [movie, setMovie] = useState()


    return(
        <Container onClick={() => navigate(
            
            item.gender ? '/' :
            item.title ? `/detalhe/${item.id}` : 
            item.name ? `/detailSeries/${item.id}` : '/'
             
             )}> 
            <img src={getImages(item.poster_path || item.profile_path || '') } 
                  alt="Poster"
                  />
            <h3>{item.original_title || item.name }</h3>
        </Container>
    )
}

export default Card


/**
<Container onClick={() => navigate(item.title ? `/detalhe/${item.id}` : `detailSeries/${item.id}`)}> 

  
 * 
 import { getImages } from "../../utils/getImages"
import { Container } from "./style"

//import Detail from "../../containers/Detail";

//import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Card({ item }){
    const navigate = useNavigate()
    //const [movie, setMovie] = useState()


    return(
        <Container onClick={() => navigate(`/detalhe/${item.id}`)}> 
            <img src={getImages(item.poster_path || item.profile_path || '') } 
                  alt="Poster"
                  />
            <h3>{item.original_title || item.name }</h3>
        </Container>
    )
}

export default Card
 */