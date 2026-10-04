const express = require('express');
const app = express();
const port = process.env.PORT || 8080;

app.use(express.json());

app.get('/', (req, res) => {
  res.json({
    service: '${{ values.name }}',
    status: 'up',
    message: 'Hello from ${{ values.name }}!'
  });
});

app.listen(port, () => {
  console.log('${{ values.name }} listening on port ' + port);
});
