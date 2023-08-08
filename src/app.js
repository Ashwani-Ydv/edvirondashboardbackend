const express = require("express");
const router = require("../src/Route/paymentRoute");
const app = express();
const path = require("path");

// app.set("view engine", "pug");
// app.set("views", path.join(__dirname, "public"));
const PORT = process.env.PORT || 5000; //port number

app.use(express.static("public"));
app.use(express.json());
app.use("/", router);
app.use("/", (req, res) => {
  res.render("index");
});

app.listen(PORT, () => {
  console.log(`Server is running successfully on PORT ${PORT}`);
});
