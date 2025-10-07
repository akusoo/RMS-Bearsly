import express from 'express';
import cors from 'cors';
import routes from './routes/index.js';
import { errorHandler } from './middleware/errorHandler.js';

const app = express();

app.use(cors());
app.use(express.json());

// Root route
app.get('/', (req, res) => {
	res.json({ 
		message: 'RMS-Bearsly API Server', 
		status: 'running',
		version: '1.0.0',
		documentation: 'Visit /api for API endpoints'
	});
});

app.use('/api', routes);

app.use(errorHandler);

export default app;
