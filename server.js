const express = require('express');
const app = express();

const PORT = process.env.PORT || 3001;


app.get('/', (req, res) => {
  res.send("Hello World!");
});



app.listen(PORT, function() {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});
