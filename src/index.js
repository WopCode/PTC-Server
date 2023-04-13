import express from "express";
import morgan from "morgan";
import path from "path";
import { fileURLToPath } from "url";
import { mongodb } from "./database/database.js";
import route from "./routes/route.js";

const app = express();
const __dirname = path.dirname(fileURLToPath(import.meta.url));

// middleware
app.use(morgan("dev"));
app.use(express.json());
app.use("/api", route);
app.get("/", (req, res) => {
    res.send("welcome");
});

// static files
app.use(express.static(path.join(__dirname, "/public")));

// setting server
const port = process.env.PORT || 9000;
app.listen(port, () => console.log("server up in port ", port));
