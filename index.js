const express = require('express');

const server = express();

server.get('/', (req, res) => {
  res.status(200).json({ message: 'Hello node 22' });
});

const port = process.env.PORT || 8000;
server.listen(port, () => console.log(`\n** API running on port ${port} **\n`));
