import express from "express";
import connection from "../config/database.js";
import playlistRoute from "../routes/playlistRoute.js";

const app = express();
const port = 3000;

app.use(express.json());
app.use("/api/playlists", playlistRoute);

connection.connect((err) => {
    if(err){
        console.log(err);
    }else{
        console.log('Database is connected');
    }
})

app.listen(port,() => {
    console.log(`App listening on port ${port}`);
})