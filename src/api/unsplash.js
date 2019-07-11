import axios from 'axios';


export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID 06f0df449616040d656d116e3c887499bd33757e4d86cabdfec039dc4d7b6c75'
    }
})