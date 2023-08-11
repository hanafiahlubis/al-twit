import express from "express";
import cors from "cors";
import login from "./routes/login.js"
import posting from "./routes/posting.js"

const app = express();
const router = express.Router()

app.use(express.json());
app.use(cors({ origin: "http://localhost:5173" }));
router.use("/login", login);
router.use("/posting", posting);

app.use("/api", router)

const PORT = 3000;
app.listen(PORT, console.log(`server sedang berjalan di port ${PORT}`));

