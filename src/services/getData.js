import api from "./api";

export async function getMovies(){
    const { 
        data: { results } 
    } = await api.get('/movie/popular')

    return results[0]
}

export async function getTopMovies(){
    const { 
        data: { results } 
    } = await api.get('/movie/top_rated')
    return results
}

export async function getTopSeries(){
    const { 
        data: { results } 
    } = await api.get('/tv/top_rated')

    return results
}

export async function getPopularSeries(){
    const { 
        data: { results } 
    } = await api.get('/tv/popular')
    return results
}

export async function getTopPeople(){
    const { 
        data: { results } 
    } = await api.get('/person/popular')
    return results
}

// Busca um filme pelo id
export async function getMovieVideos(movieId){
    const { 
        data: { results } 
    } = await api.get(`/movie/${movieId}/videos`)

    return results // [0]
}

// para o uso em Details

export async function getMovieCredits(movieId){
    const { data: { cast } } = await api.get(`/movie/${movieId}/credits`)

    return cast
}

export async function getMovieSimilar(movieId){
    const { 
        data: { results } 
    } = await api.get(`/movie/${movieId}/similar`)

    return results
}

export async function getMovieById(movieId){
    const data = await api.get(`/movie/${movieId}`)

    return data
}

/**MOVIES */
export async function getUpcomingMovie(){
    const { 
        data: { results } 
    } = await api.get('/movie/upcoming')

    return results
}


/**SERIES */

export async function getSeries(){
    const { 
        data: { results } 
    } = await api.get('/tv/popular')

    return results[0]
}

export async function getSerieById(serieId){
    const data = await api.get(`/tv/${serieId}`)

    return data
}

export async function getSeriesVideos(serieId){
    const { 
        data: { results } 
    } = await api.get(`/tv/${serieId}/videos`)

    return results // [0]
}

export async function getSerieSimilar(serieId){
    const { 
        data: { results } 
    } = await api.get(`/tv/${serieId}/similar`)

    return results
}

export async function getSerieCredits(serieId){
    const { data: { cast } } = await api.get(`/tv/${serieId}/credits`)

    return cast
}