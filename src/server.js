import express from "express";
import { municipioRoute } from "./municipio.routes.js";

const app = express();

app.use(express.json());

app.use("/municipios", municipioRoute);

const port = process.env.PORT || 3333;
app.listen(port, () => console.log("Server is running on port 3333"));