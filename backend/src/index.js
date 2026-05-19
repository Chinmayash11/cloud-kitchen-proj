const express = require('express');
const cors = require('cors');
const menuRouter = require('./routes/menu');

const app = express();
app.use(cors());
app.use(express.json());
app.use('/api/menu', menuRouter);

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log(`Backend listening on port ${PORT}`);
});