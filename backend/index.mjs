import express from 'express';
import cors from 'cors';
import geminiRouter from './routes/gemini';
import productRouter from './routes/products'; // optional

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json({ limit: '10mb' }));

app.use('/gemini', geminiRouter);
app.use('/products', productRouter);

app.listen(PORT, () => {
  console.log(`Backend running at http://localhost:${PORT}`);
});



/* import express from 'express';
import cors from 'cors';
import geminiRouter from './routes/gemini.mjs';

const app = express();

// Configure CORS to allow all origins during development
app.use(cors({
  origin: '*',
  methods: ['GET', 'POST'],
  allowedHeaders: ['Content-Type']
}));

// Increase the limit for JSON body size
app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ extended: true, limit: '50mb' }));

app.get('/', (req, res) => {
  res.send('Server is running');
});

app.use('/gemini', geminiRouter);

app.listen(3000, () => console.log('Server running on port 3000')); */
