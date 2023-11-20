import { Router } from 'express';
import { getAllCommits, getCommitById, createCommit } from '../controllers/commitController';

const router = Router();

// Define routes
router.get('/commits', getAllCommits);
router.get('/commits/:id', getCommitById);
router.post('/commits', createCommits);

// Add more routes as needed

export default router;