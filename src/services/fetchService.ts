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

export { get }