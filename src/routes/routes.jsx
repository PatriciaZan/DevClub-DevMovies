import { Route, Routes } from 'react-router-dom'

import Home from '../containers/Home';
import Movies from '../containers/Movies';
import Series from '../containers/Series';
import DefaultLayout from '../layout/DefaultLayout';
import Detail from '../containers/Detail';
import DetailSeries from '../containers/Detail/detailSerie';

function Router(){

    return (
        <Routes>
            <Route element={<DefaultLayout />}>
                <Route path='/' element={<Home />} />
                <Route path='/filmes' element={<Movies />} />
                <Route path='/series' element={<Series />} />
                <Route path='/detalhe/:id' element={<Detail />} />
                <Route path='/detailSeries/:id' element={<DetailSeries />} />
            </Route>
        </Routes>
    )
}

export default Router