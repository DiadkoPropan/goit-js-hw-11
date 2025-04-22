import axios from "axios";
// Описаний у документації
import iziToast from "izitoast";
// Додатковий імпорт стилів
import "izitoast/dist/css/iziToast.min.css";


const API_KEY = "17940926-6780aa15035c19a0864af2448";
// axios.defaults.baseURL = 'https://pixabay.com/api/';
// axios.defaults.headers.common["key"] = API_KEY;

export default function getImagesByQuery(query) {
    return axios.get('https://pixabay.com/api/', {
        params: {
        key: API_KEY,
        q: query,
        image_type: "photo",
        orientation: "horizontal",
        safesearch: true
    }}) 
}