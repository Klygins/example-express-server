import express, { Express, Request, Response } from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';

const app = express()

console.log('General setup');
app.use(cors())

app.use(express.json())
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

console.log('Adding routes')
app.get('/status', (req, res) => {
    // Implementation
    res.send('Express + TypeScript Server!')
});

console.log('Starting the server')
const PORT = process.env.PORT || 3001
app.listen(PORT, () => {
  console.log(`Server is running on port: ${PORT}`)
});
