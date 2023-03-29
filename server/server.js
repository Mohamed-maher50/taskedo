const express = require("express");
const app = express();
const helmet = require("helmet");
const cors = require("cors");
var morgan = require("morgan");
app.use(express.json());
morgan("tiny");
app.use(express.urlencoded({ extended: true }));

app.use(cors());
app.use(helmet());
app.use(morgan("tiny"));
require("dotenv").config();
require("./db/connection");
const PORT = process.env.PORT || 4000;
app.use("/auth", require("./routes/auth"));
app.use("/api", require("./routes/todoRoute"));
app.use((req, res) => {
  res.status(404).json({ msg: "not found this route" });
});
app.listen(PORT, () => {
  console.log("listen in port 4000");
});
