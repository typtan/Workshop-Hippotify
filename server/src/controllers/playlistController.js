import * as playlistModel from '../models/playlistModel.js'

const userId = 16;

export const getOwnedPlaylist = async (req,res) => {
    try {
        const playlist = await playlistModel.getOwnedPlaylist(userId)
        return res.status(200).json({
            success: true,
            data: playlist,
            Message: "playlist retrieved successfully"
        });
    } catch (error){
        console.log("Error: ",error);
        return res.status(500).json({
            success: false,
            data: null,
            Message: "Internal server error"
        })
           
    }
    
}