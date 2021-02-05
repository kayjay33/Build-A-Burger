import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://react-my-burger-28c81.firebaseio.com/'
});

export default instance;