const express = require('express');

//init app
const app = express();

const PORT = process.env.PORT || 5000;

//start server
app.listen(PORT, () =>
  console.log(`Server running on http://localhost:${PORT}`)
);
