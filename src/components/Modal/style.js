import styled from 'styled-components'

export const Background =  styled.div`
    height: 100vh;
    width: 100vw;
    z-index: 10;
    background-color: rgba(0,0,0, 0.7);
    //opacity: 0.6;
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;

`

export const Container = styled.div`
    background: #000;
    border-radius: 30px;
    width: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    padding: 50px;

    max-width: 1200px;

    iframe{
        border: none;
    }
`