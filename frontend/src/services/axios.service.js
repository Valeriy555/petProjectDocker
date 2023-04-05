import axios from "axios";

import {baseURL} from "../configs";

let axiosService = axios.create({baseURL});

export {
    axiosService
}