import cors from "cors";
import express from "express";
import { routes } from "./routes";

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);

app.get("/", (req, res) => {
  return res.send("Até aqui funcionando");
});

app.listen("https://lu-lombardi-server.herokuapp.com", () => {
  console.log("server is running");
});
