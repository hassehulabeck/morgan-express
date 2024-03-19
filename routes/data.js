import express from 'express';

import data from '../data.js';

const router = express.Router();

const totalPerspiration = Math.round(
  data.reduce((total, currentItem) => {
    return total + Number(currentItem.perspiration);
  }, 0)
);

router.get('/total', (req, res) => {
  res.json({ data: { total: totalPerspiration } });
});

router.get('/average', (req, res) => {
  const average = Math.round(totalPerspiration / data.length);
  res.json({ data: { average } });
});

export default router;
