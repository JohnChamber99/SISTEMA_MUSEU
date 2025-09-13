import express from 'express';
import pool from './db.js';
import userRoutes from './routes/userRoutes.js';

const app = express();
const PORT = 3000;

// express.json()
app.use(express.json());

app.use('/users', userRoutes);

// database connection test
pool.connect()
    .then(() => console.log('Connected to the database'))
    .catch(err => console.error('Database connection error', err.stack));   

app.get('/', (req, res) => {
    res.send('Hello, World!');
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});