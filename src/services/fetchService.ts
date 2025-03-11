import { API } from "./config";

const get = async (url: string) => {
    try {
        let data = [];
        data = (await API.get(url)).data;
        return data;
    } catch (error: any) {
        console.log(error.message)
        return [];
    }
}

const deleteRequest = async (url: string) => {
    try {
        let data = [];
        data = (await API.delete(url)).data;
        return data;
    } catch (error: any) {
        console.log(error.message)
        return [];
    }
}

const postRequest = async (url: string, data: any) => {
    try {
        let response = await API.post(url, data);
        return response.data;
    } catch (error: any) {
        console.log(error.message)
        return [];
    }
}

const updateRequest = async (url: string, data: any) => {
    try {
        let response = await API.put(url, data);
        return response.data;
    } catch (error: any) {
        console.log(error.message)
        return [];
    }
}

export { get, deleteRequest, postRequest, updateRequest };