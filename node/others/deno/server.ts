import express from "npm:express@4";

const app = express();
app.get("/", (_req, res) => {
  res.json({ msg: "Hello" });
});
app.listen(8080, () => {
  console.log("Server runnig");
});
