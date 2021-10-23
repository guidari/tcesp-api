import express from "express";
import { municipioRoute } from "./municipio.routes.js";
import { logRoute } from "./log.routes.js";
import cors from "cors";

const app = express();

app.use(express.json());

app.use(cors({ origin: "http://localhost:3000" }));

app.use("/logs", logRoute);
app.use("/municipios", municipioRoute);

const port = process.env.PORT || 3333;
app.listen(port, () => console.log("Server is running on port 3333"));
