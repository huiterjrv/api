import express from 'express';
import cors from 'cors';

const app = express();
app.disable('x-powered-by');

app.use(express.json());
app.use(cors());
/*
app.use(cors({
    origin: (origin, callback) => {

        console.log('llamada de ---> ', origin);

        const ACCEPTED_ORIGINS = [
            'https://www.google.com',
            'https://mediterrasales.com',
        ]

        if (ACCEPTED_ORIGINS.includes(origin)) {
            return callback(null, true)
        }

        if (!origin) {
            return callback(null, true)
        }

        return callback(new Error('Not allowed by CORS'))
    }
}));*/


app.get('/', (req, res) => {

    const clientIp = req.headers['x-forwarded-for'] || req.socket.remoteAddress;
    console.log(req.socket.remoteAddress);

    //console.log(req.headers);
    res.json({
        message: 'Información de la solicitud',
        clientIp: clientIp,
        headers: req.headers
    });
});

const PORT = process.env.PORT ?? 3003

app.listen(PORT, () => {
    console.log(`server listening on port http://localhost:${PORT}`)
})