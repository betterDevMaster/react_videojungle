import axios from "axios"
import { API } from "../constant_key"

export const youtube = (url, regCode) => {
    return axios.get(`${API}/api/Youtube/Search?searchtext=${url}&regionCode=${regCode}`, {
        headers: { "Content-Type": "application/json" },
    })
}
