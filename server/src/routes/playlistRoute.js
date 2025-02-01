import express from "express"
import * as playlistController from '../controllers/playlistController.js'

const playlistRoute = express.Router();

playlistRoute.get("",);

playlistRoute.get("/owned",playlistController.getOwnedPlaylist);
playlistRoute.get("/",playlistController.getUserPlaylist);
playlistRoute.get("/:playlistId" , playlistController.getPlaylistById);

export default playlistRoute;