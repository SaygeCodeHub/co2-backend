import "dotenv/config";
import express from "express";
const app = express();
const port = process.env.PORT || 3000;
app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/login", (req, res) => {
  const jokes = [
    {
      id: 0,
      content: "This is initial joke, now we will start",
    },
    {
      id: 1,
      content: "This is 1 joke.",
    },
    {
      id: 2,
      content: "This is 2 joke.",
    },
    {
      id: 3,
      content: "This is 3 joke.",
    },
  ];
  res.send({ status: 200, message: "API processed successfully.",data: jokes });
});

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`);
});
