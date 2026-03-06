const express = require('express');
const { createIssue, getAllIssues, getIssueById } = require('../controllers/issueController');
const { authenticate } = require('../middleware/authMiddleware');

const router = express.Router();

router.post('/', authenticate, createIssue);
router.get('/', getAllIssues);
router.get('/:id', getIssueById);

module.exports = router;
