import { axiosInstance } from "../utils/axiosInstance"

export const getOwnedPlaylist = async () =>{
    try {
        const response = await axiosInstance.get("/playlists");
        return response.data.data
    } catch (error) {
        return error.response
    }
}

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

export const updatePlaylist = async (id , title , description) => {
    try{
        const response = await axiosInstance.put(`/playlists/${id}`,{
            title: title,
            description: description
        });
        return response.data
    } catch (error){
        return error.response
    }
}
export const addTrackToPlaylist = async (playlistId , trackId) => {
    try{
        const response = await axiosInstance.post(`/playlists/${playlistId}/track/${trackId}`,{
            title: title,
            description: description
        });
        return response.data
    } catch (error){
        return error.response
    }
}
export const removeTrackFromPlaylist = async (playlistId , playlistTrackId) => {
    try{
        const response = await axiosInstance.delete(`/playlists/${playlistId}/track/${playlistTrackId}`,{
            title: title,
            description: description
        });
        return response.data
    } catch (error){
        return error.response
    }
}