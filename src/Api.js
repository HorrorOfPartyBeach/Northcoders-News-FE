import axios from 'axios';

const API_URL = 'https://nc-news33.herokuapp.com/api'

export const getTopics = () => {
    return axios.get(`${API_URL}/topics`)
    .then(({data}) => data.topics)
}

export const getArticles = (slug) => {
    const url =slug ? `${API_URL}/topics/${slug}/articles` : `${API_URL}/articles`
    return axios.get(url)
    .then(({data}) => data.articles)
}

export const alterVote = (id, direction) => {
    return axios.patch(`${API_URL}/articles/${id}?vote=${direction}`)
    .then(({data}) => data.article)
}