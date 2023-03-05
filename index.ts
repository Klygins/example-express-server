import express, { Request, Response } from 'express';
import cors from 'cors';

const app = express()

console.log('General setup');
app.use(cors())

app.use(express.json())

console.log('Adding routes')
app.get('/status', (req: Request, res: Response) => {
    // Implementation
    res.send('Express + TypeScript Server!')
});

console.log('Starting the server')
const PORT = process.env.PORT || 3001
app.listen(PORT, () => {
    console.log(`Server is running on port: ${PORT}`)
});
