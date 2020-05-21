import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID jHXjQT2YLBb-MtYRNT7Nhh6qxhjLycYYNd58JBzPLPA'
    }
});
