import axios from "axios";
import configuration from "../config/config";


export const storeContact = async (data) => {
    let config = {
        headers: {
            'Access-Control-Allow-Origin': '*',
            "Content-Type": "application/json"
        }
    };
    let res = await axios.post(configuration.api.backend_api + '/default/sendEmailLambda', data);
    return res.data;
};
