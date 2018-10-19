import axios from 'axios';

const API_URL = 'https://nc-news33.herokuapp.com/api'

export const getTopics = () => {
    return axios.get(`${API_URL}/topics`)
    .then(({data}) => data.topics)
}

export const getArticles = (topic) => {
    const url = topic ? `${API_URL}/topics/${topic}/articles` : `${API_URL}/articles`
    return axios.get(url)
    .then(({data}) => data.articles)
}

export const postArticle = async (topic, title, body, created_by) => {
    const  {data} = await axios.post(`${API_URL}/topics/${topic}/articles`, {topic, title, body, created_by}) 
    console.log(data)
    return data;
}

export const alterVote = (id, direction) => {
    return axios.patch(`${API_URL}/articles/${id}?vote=${direction}`)
    .then(({data}) => data.article)
}

export const getArticle = async (id) => {
    const {data} = await axios.get(`${API_URL}/articles/${id}`)
    return data.article;
}

export const getUsers = () => {
    return axios.get(`${API_URL}/users`)
    .then(({data}) => data.users)
}

export const getUser = async (username) => {
    const {data} = await axios.get(`${API_URL}/users/${username}`)
    // console.log(data)
    return data.user;
}

export const getComments = async (id) => {
    const {data} = await axios.get(`${API_URL}/articles/${id}/comments`)
    //console.log(data)
    return data.comments;
}

export const postComment = async (articleId, body, created_by) => {
    const  {data} = await axios.post(`${API_URL}/articles/${articleId}/comments`, {body, created_by}) 
    console.log(data)
    return data;
}

export const removeComment = async (commentId) => {
    return await axios.delete(`${API_URL}/comments/${commentId}`)
}