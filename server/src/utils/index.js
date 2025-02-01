import express from "express";
import connection from "../config/database.js";
import playlistRoute from "../routes/playlistRoute.js";
import userRoute from "../routes/userRoute.js";
import cors from 'cors';

const app = express();
const port = 3000;

app.use(express.json());
app.use(cors())
app.use("/api/playlists", playlistRoute);
app.use("/api/users", userRoute);

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