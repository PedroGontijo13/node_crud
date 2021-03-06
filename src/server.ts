import express from "express";
import "reflect-metadata"
import "./database"
import { Routes } from "./routes";

const app = express()

app.use(express.json())

app.use(Routes)

app.listen(3000, () => {
    console.log("Server is running")
})