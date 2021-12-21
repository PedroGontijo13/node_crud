import { Router } from "express";
import { CreateCategoryController } from "./controllers/CreateCategoryController";


const Routes = Router()

Routes.post("/categories", new CreateCategoryController().handle)

export {Routes}