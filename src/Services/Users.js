import { POST, GET, DELETE } from '../Services/Httpr.js';


export const createUser = async (new_user_data) => {
    let url = 'user/create';
    let rsp = await POST(url, new_user_data);

    return rsp;
}

export const searchUsers = async (search_params) => {
    let url = 'user/search';
    let rsp = await GET(url, search_params);

    return rsp;
}