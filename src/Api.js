import axios from 'axios';

const API_URL = 'https://nc-news33.herokuapp.com/api'

export const getTopics = () => {
    return axios.get(`${API_URL}/topics`)
    .then(({data}) => data.topics)
}

export const getArticles = (topic) => {
    const url = topic ? `${API_URL}/topics/${topic}articles` : `${API_URL}/articles`
    return axios.get(url)
    .then(({data}) => data.articles)
}