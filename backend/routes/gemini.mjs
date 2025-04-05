import express from 'express';
import { GoogleGenerativeAI } from '@google/generative-ai';
import {GEMINI_API_KEY} from '../env';

dotenv.config();

const router = express.Router();

// Set up Gemini model
const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY || '');
const model = genAI.getGenerativeModel({ model: 'gemini-1.5-pro' });

router.post('/', async (req, res) => {
  const { image } = req.body;

  if (!image) {
    return res.status(400).json({ message: 'No image provided' });
  }

  try {
    const result = await model.generateContent([
      {
        inlineData: {
          data: image,
          mimeType: 'image/jpeg',
        },
      },
      {
        text: 'What is this product and what are its potential environmental impacts?',
      },
    ]);

    const text = result.response.text();
    res.json({ result: text });
  } catch (err) {
    console.error('Gemini error:', err.response?.data || err.message);
    res.status(500).json({ message: 'Gemini API call failed' });
  }
});

export default router;


/*
import express from 'express';
import axios from 'axios';

const router = express.Router();

router.get('/', (req, res) => {
  res.send('Gemini API is running');
});

router.post('/', async (req, res) => {
  console.log('Received POST request to /gemini');
  console.log('Request body size:', req.body?.image?.length || 0);
  
  const { image } = req.body;
  if (!image) {
    console.log('No image data received');
    return res.status(400).send('No image data provided');
  }

  try {
    console.log('Sending request to Gemini API...');
    const response = await axios.post(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-pro-vision:generateContent?key=AIzaSyCYHhk67O4ISoX4FlVvdOkGOoztqd-G2Zo`,
      {
        contents: [
          {
            parts: [
              {
                inlineData: {
                  mimeType: "image/jpeg",
                  data: image,
                },
              },
              { text: "Describe the item in the image." },
            ],
          },
        ],
      }
    );
    console.log('Received response from Gemini API');
    res.send(response.data);
  } catch (error) {
    console.error('Error in Gemini API call:', error.message);
    res.status(500).send('Error processing image');
  }
});

export default router; */
