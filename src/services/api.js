import axios from "axios";

// url FILMES EM CARTAZ
// https://api.themoviedb.org/3/movie/now_playing?api_key=6c42e4c4a133b6ad168b6f3881a8035e&language=pt-BR-&page=1

export const key = '6c42e4c4a133b6ad168b6f3881a8035e'

const api = axios.create({
    baseURL: 'https://api.themoviedb.org/3'
})

export default api