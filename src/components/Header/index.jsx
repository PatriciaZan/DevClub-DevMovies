import { useEffect, useState } from 'react'
import Logo from '../../assets/logo.png'
import { Container, Menu, Li } from './styles'
import { Link, useLocation } from 'react-router-dom'

function Header(){
    const [changeBackground, setChangeBackground] = useState(false)
    const { pathname } = useLocation()
    //console.log(pathname);

    /* Not working
    window.onscroll = () => {
        console.log(window.scrollY);
        if(!changeBackground && window.scrollY > 200){
           return setChangeBackground(true)
        }else{
            setChangeBackground(false)
        }
        // if(changeBackground && window.screenY <= 200){
        //     setChangeBackground(false)
        // }
    }*/



    return(
        // <Container changeBackground={changeBackground}>
        <Container>
                <img src={Logo} alt="logo do devMovies" />
            <Menu>
                <Li isActive={pathname === '/'}>
                    <Link to="/">Home</Link>
                </Li>
                <Li isActive={pathname.includes('filmes')}>
                    <Link to="/filmes">Movies</Link>
                </Li>
                <Li isActive={pathname.includes('series')}>
                    <Link to="/series">Series</Link>
                </Li>
            </Menu>
        </Container>
    )
}

export default Header