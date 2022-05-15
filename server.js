const express = require("express");

const app = express();
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server is listenning 👂))) on port: ${PORT}`);
});
