import axios from 'axios';

export const getUser = () => {
    return axios.get('http://localhost:8080/api/user/users');
};

export const getAllAnime = () => {
    return axios.get('http://localhost:8080/api/anime/anime');
}

export const getOneAnime = (id) => {
    return axios.get(`http://localhost:8080/api/anime/anime/${id}`)
}

// export const postUser = (data) => {
//     return axios.post('http://localhost:8080/api/reg/reg', data, )
// }

// export const postAuth = (data) => {
//     return axios.post('http://localhost:8080/api/reg/auth', data, {withCredentials: true})
// }
