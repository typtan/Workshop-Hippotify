import { axiosInstance } from "../utils/axiosInstance"

export const getUserPlaylist = async () =>{
    try {
        const response = await axiosInstance.get("/playlists");
        return response.data.data
    } catch (error) {
        return error.response
    }
}

export const getPlaylistById = async(id) => {
    try{
        const response = await axiosInstance.get(`/playlists/${id || 1}`);
        return response.data.data
    } catch (error){
        return error.response
    }
}