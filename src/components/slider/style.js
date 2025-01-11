import styled from "styled-components";

export const Container = styled.div`
    background: #000;
    padding: 0 20px;
    min-width: 0;
    overflow: hidden;

    h2{
        color: #fff;
        font-size: 28px;
        margin: 50px 0 20px 20px;
    }

    .swiper-wrapper{
        display: flex;
        max-height: 100%;
        height: 100%;
    }

    .swiper-slide{

        img{
            transition: all 0.9s ease-in-out;

            &:hover{
                box-shadow: 0 16px 32px rgba(197, 197, 197, 0.3);
                transform: perspective(300px) rotate3d(0, 1, 0, 3deg);
                transition: all 0.2s ease-in-out;
            }

        }
    }
`