import styled from "styled-components";


export const Container = styled.div`
    min-height: 90px;
    z-index: 5;
    position: fixed;
    top: 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px 50px;
    background-color: rgba(0,0,0, 0.3);
    /* background-color: ${props => props.changeBackground ? '#000' : 'transparent'}; */
    transition: all 0.5s ease-in-out;

    img{
        width: 20%;
    }
`

export const Menu = styled.ul`
    display: flex;
    list-style: none;
    gap: 50px;
`

export const Li = styled.li`
    font-size: 24px;
    font-weight: 600;
    cursor: pointer;
    position: relative;

    a{
        text-decoration: none;
        color: #fff;
    }

    &::after{
        content: '';
        height: 3px;
        width: ${props => props.isActive ? '100%' : 0};
        background-color: #189b20;
        position: absolute;
        bottom: -10px;
        left: 50%;
        transform: translateX(-50%);
        transition: all 0.4s ease-in-out;
    }

    &:hover::after{
        width: 100%;
    }
`