// api/services/apiService.ts
import axios from 'axios'
// eslint-disable-next-line no-undef
const API_KEY = process.env.APP_API_KEY
const API_DISCOVERY = `https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=${API_KEY}&page=1`
const API_SEARCH = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=`
const IMG_API = 'https://image.tmdb.org/t/p/w400/'
const POSTER = 'https://image.tmdb.org/t/p/w1280/'
const Category_API = `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=27&page=1`

export const fetchData = async (url) => {
  try {
    const response = await axios.get(url)

    console.log(response.data)
    return response.data
  } catch (error) {
    // Handle error
    console.error('Error fetching data:', error)
    throw error
  }
}

export const getDiscoverMovies = async () => {
  return await fetchData(API_DISCOVERY)
}

export const searchMovies = async (query) => {
  const searchUrl = `${API_SEARCH}${query}`
  return await fetchData(searchUrl)
}

export const getCategoryMovies = async () => {
  return await fetchData(Category_API)
}

export const getImageUrl = (path) => {
  return `${IMG_API}${path}`
}

export const getPosterUrl = (path) => {
  return `${POSTER}${path}`
}
