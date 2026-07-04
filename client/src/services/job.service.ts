import api from "../api/axios";

export const matchResume = (data:any)=>{

    return api.post(

        "/job/match",

        data

    );

}