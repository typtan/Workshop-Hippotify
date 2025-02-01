import express from "express"
import * as playlistController from '../controllers/playlistController.js'

const playlistRoute = express.Router();

playlistRoute.get("",);

playlistRoute.get("/owned",playlistController.getOwnedPlaylist);
playlistRoute.get("/",playlistController.getUserPlaylist);
playlistRoute.get("/:playlistId" , playlistController.getPlaylistById);
playlistRoute.put("/:playlistId", playlistController.updatePlaylist);
playlistRoute.post("/:playlistId/track/:trackId", playlistController.addTrackToPlaylistlaylist);
playlistRoute.delete("/:playlistId/Track/:playlistTrackId", playlistController.deleteTrackFromPlaylist);

export default playlistRoute;