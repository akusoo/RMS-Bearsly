import { Router } from 'express';
import { getHealth } from '../controllers/healthController.js';

const router = Router();

// Root route
router.get('/', (req, res) => {
	res.json({ 
		message: 'RMS-Bearsly API Server', 
		status: 'running',
		version: '1.0.0',
		endpoints: {
			health: '/api/health',
			docs: '/api/docs'
		}
	});
});

// Health check route
router.get('/health', getHealth);

export default router;
