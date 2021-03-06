const express = require("express");
const mongoose = require("mongoose");
const app = express();
const PORT = process.env.PORT || 3001;

mongoose.connect(
    process.env.MONGODB_URI || "mongodb://localhost:27017/Social-Network-API",
    {
      useFindAndModify: false,
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  );
  
  // Use this to log mongo queries being executed!
  mongoose.set("debug", true);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

app.use(require("./routes"));


mongoose.connection.once("open", () => {
    app.listen(PORT, () => console.log(`🌍 Connected on localhost:${PORT}`));
})
