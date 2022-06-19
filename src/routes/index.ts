import express from "express";
import { todosController } from "../controllers";

const router = express.Router();

router.get('/gettodos', todosController.getTodos);

router.post('/posttodo', todosController.postTodo);

export default router;