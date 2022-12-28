import instance from "./instance";

export const getAll = async() => {
    const {data} = await instance.get("/books");
    return data;
}