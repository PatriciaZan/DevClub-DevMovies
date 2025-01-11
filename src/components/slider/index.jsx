import { Container } from "./style";
import { Swiper, SwiperSlide } from 'swiper/react'


import Card from "../Card";


function Slider({ info, title}){
    console.log(info, title);
     
    //info[0].name ? console.log('infooo') : console.log(info[0].id);
    //info ? console.log('V') : console.log('F'); 
     

    return (
        <Container>
            <h2>{title}</h2>
            <Swiper
                grabCursor
                spaceBetween={10}
                slidesPerView={'auto'}
                className="swiper"        
            >
                {info.map((item, index) => (
                    <SwiperSlide key={index}>
                        <Card item={item} />
                    </SwiperSlide>
                ))}
            </Swiper>
        </Container>
    )
}

export default Slider