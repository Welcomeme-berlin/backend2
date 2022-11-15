const { response } = require('express');
const express = require('express');

const app = express();

// define temporary data jason here(to be replaced by DB)
let data = [
  {
    id: 1,
    name: 'samuel nzekwe',
    address: 'oranienstrs 204 Berlin',
  },
];

//get all data
app.get('/api/users', (request, response) => {
  response.json(data);
});

const PORT = 3001;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
