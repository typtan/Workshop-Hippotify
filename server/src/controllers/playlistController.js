import * as playlistModel from '../models/playlistModel.js'
import { timeFormat } from '../utils/timeFormat.js';
import { timeFormatHMS } from '../utils/timeFormat.js';

const userId = 16;

export const getOwnedPlaylist = async(req, res) => {
    try{
        const playlist = await playlistModel.getOwnedPlaylist(userId);
        return res.status(200).json({ //ส่งข้อมูลกลับแบบ json
            success: true,
            data: playlist,
            message: "Playlist retrieved successfully"
        });
    } catch (error){
        console.log("Error:", error);
        return res.status(500).json({ //ส่งข้อมูลกลับแบบ json
            success: false,
            data: null,
            message: "Internal server error"
        });
    }
}

export const getUserPlaylist = async(req, res) => {
    try{
        const playlist = await playlistModel.getUserPlaylist(userId);
        return res.status(200).json({ //ส่งข้อมูลกลับแบบ json
            success: true,
            data: playlist,
            message: "Playlist retrieved successfully"
        });
    } catch (error){
        console.log("Error:", error);
        return res.status(500).json({ //ส่งข้อมูลกลับแบบ json
            success: false,
            data: null,
            message: "Internal server error"
        });
    }
}
export const getPlaylistById = async (req, res) => {
    try {
        const { playlistId } = req.params; //param in route
        if(!playlistId){
            return res.status(400).json({
                success: false,
                data: null,
                message: "Playlist ID is required"
            });
        }
 
        const playlist = await playlistModel.getPlaylistInfoById(playlistId, userId);
        if(!playlist){
            return res.status(403).json({
                success: false,
                data: null,
                message: "Access denied"
            });
        }
 
        const tracks = await playlistModel.getPlaylistTracks(playlistId);
 
        let totalDuration = 0;
        tracks.forEach((track)=>{
            totalDuration += track.duration;
        })
 
        const response = {
            ...playlist,
            duration: timeFormatHMS(totalDuration),
            edit_access: playlist.author_id === userId,
            tracks: tracks.map((track) => ({
                ...track,
                duration: timeFormat(track.duration)
            }))
        }
        return res.status(200).json({
            success: true,
            data: response,
            message: "Playlist retrieved successfully"
        });
    } catch (error) {
        console.log("Error: ",error);
        return res.status(500).json({
            success: false,
            data: null,
            message: "Internal server error"
        });
    }
}