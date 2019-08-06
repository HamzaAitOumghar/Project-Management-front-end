import axios from "axios";
import {GET_ERRORS} from "./types";
import { async } from "q";

const API_URL="http://localhost:8080/api/project";

export const createProjet = (project,history)= async dispatch=>{

    try {
        const res = await axios.post(API_URL,project)
    } catch (error) {
        
    }
}