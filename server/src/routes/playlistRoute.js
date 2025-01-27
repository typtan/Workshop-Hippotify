import express from "express"
import * as playlistController from '../controllers/playlistController.js'

const playlistRoute = express.Router();

playlistRoute.get("",);

playlistRoute.get("/owned",playlistController.getOwnedPlaylist)

export default playlistRoute;