import express from 'express';
import morgan from 'morgan';

import yearsRouter from './routes/years.js';
import dataRouter from './routes/data.js';

const app = express();
const port = 3000;

app.use(morgan(':status :method :url - :response-time ms'));

app.use('/years', yearsRouter);
app.use('/data', dataRouter);

// Catch all. 404
app.use('*', (req, res) => {
  res.status(404);
  res.json({ data: 'Oops, nothing found here' });
});

// Error handler
app.use((err, req, res, next) => {
  console.error(err);
  res.status(500);
  res.send('Internal Server Error');
});

app.listen(port, () => {
  console.log(`Perspiration API running on port ${port}`);
});
