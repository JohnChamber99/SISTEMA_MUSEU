import express from 'express';
import pool from './db.js';
import userRoutes from './routes/userRoutes.js';
import itemExpositivoRoutes from './routes/itemExpositivoRoutes.js';
import documentoRoutes from './routes/documentoRoutes.js';
import autorRoutes from './routes/autorRoutes.js';
import taxonomiaPaiRoutes from './routes/taxonomiaPaiRoutes.js';
import taxonomiaFilhoRoutes from './routes/taxonomiaFilhoRoutes.js';


const app = express();
const PORT = 3000;

// express.json()
app.use(express.json());
// Chamando a rota Users
app.use('/users', userRoutes);
// Chamando a rota ItemExpositivo
app.use('/items', itemExpositivoRoutes);
//Chamando a rota Documento
app.use('/document', documentoRoutes);
//Chamando rota autor
app.use('/author', autorRoutes);
//Chamando rota taxonomia pai
app.use('/parentTaxonomy', taxonomiaPaiRoutes);
//Chamando rota taxonomia filho
app.use('/childTaxonomy', taxonomiaFilhoRoutes);

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