import axios from "axios"
import { API } from "../constant_key"


export const youtube = url =>{
    return axios.get(`${API}/api/Youtube/Search?searchtext=${url}`, {
        headers: { 'Content-Type': 'application/json' }
    })
};