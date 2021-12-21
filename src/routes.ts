import { Router } from "express";
import { CreateCategoryController } from "./controllers/CreateCategoryController";
import { DeleteCategoryController } from "./controllers/DeleteCategoryController";
import { GetAllCategoryController } from "./controllers/GetAllCategoriesController";


const Routes = Router()

/**
 * C - Create
 * R - Read
 * U - Update
 * D - Delete
 */

Routes.post("/categories", new CreateCategoryController().handle)
Routes.get("/categories", new GetAllCategoryController().handle)
Routes.delete("/categories/:id", new DeleteCategoryController().handle )

export {Routes}