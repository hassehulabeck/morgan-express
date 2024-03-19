import express from 'express';

import data from '../data.js';

const router = express.Router();

router.get('/', (req, res) => {
  res.json({ data });
});

router.get('/:year', (req, res) => {
  const { year } = req.params;
  const yearData = data.find((item) => item.year == year);
  if (!yearData) {
    throw new Error(`Unable to process year: ${year}`);
  }
  res.json({ data: yearData });
});

export default router;
