import axios from 'axios';

const instance = axios.create({
    baseURL: "https://tinder-backend69.herokuapp.com/",
})

export default instance;