import dotenv from "dotenv";
import connactDB from "./db/index.js";

dotenv.config({
    path: "./.env"
})

connactDB()