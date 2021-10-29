import 'dotenv/config';
import express, { response } from 'express';
import { router } from './routes';
import http from 'http'
import { Server, Socket } from 'socket.io'
import cors from 'cors'

const app = express();
app.use(cors())

const serverHttp = http.createServer(app)

const io = new Server(serverHttp, {
    cors: {
        origin: "*"
    }
})

io.on("connection", socket => {
    console.log("Usuario conectado no socket" + socket.id)
})

app.use(express.json());

app.use(router);

app.get('/github', (req, res) => {
    res.redirect(`https://github.com/login/oauth/authorize?client_id=${process.env.GITHUB_CLIENT_ID}`)
});

app.get('/signin/callback', (req, res) => {
    const { code } = req.query;
    console.log(code)
    return res.json(code);
})

export { io, serverHttp }