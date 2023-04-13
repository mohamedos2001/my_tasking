const express = require('express');

const app = express();
const port = 8080
const host="0.0.0.0"
const students = ['Mohamed Ayman Elfar','Ahmed', 'Ali', 'Aya'];

app.get('/students', (req, res) => {
  res.send(students);
});

app.listen(port,host, () => {
  console.log('Server is running on port 8080');
});
