const express = require("express");
const app = express();

require("./routes/authRoutes")(app);
require("./services/passport");

app.get("/", (req, res) => res.send("working"));

const PORT = process.env.PORT || 5000;

app.listen(PORT);
