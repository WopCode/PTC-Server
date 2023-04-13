const express = require('express');

const app = express();
const port = process.env.PORT || 9000;

require("./routes/index.js")(app);
require("./database/database.js")(app);

app.listen(port, () => console.log('server up in port ', port));