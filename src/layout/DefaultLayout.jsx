// import Header from '../components/Header'
import { Outlet } from 'react-router-dom'
import Header from '../components/Header'

function DefaultLayout(){

    return (
        <>
        <Header />
        <Outlet />
        </>
    )
}

export default DefaultLayout

//2a51b144b0d9fcbeadf79af09bd3e1f2