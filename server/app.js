const express=require("express");
const app=express();
var cors = require('cors');
app.use(cors());

const port=process.env.PORT || 5000;
app.use(express.json())

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })