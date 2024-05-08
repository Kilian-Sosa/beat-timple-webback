import express from 'express';
import cors from 'cors';
import { FirebaseApp } from './firebase/config.js';

const server = express();
server.use(cors());
server.use(express.json());


server.listen(3000, () => {
    console.log('Server is running on port 3000');
});