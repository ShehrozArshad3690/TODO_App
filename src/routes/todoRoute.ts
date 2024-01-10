import express from "express";
import {
  viewTask,
  addTask,
  updateTask,
  deleteTask,
} from "../controllers/todoController";
const router = express.Router();

router.get("/tasks", viewTask);
router.post("/task/add", addTask);
router.put("/task/update/:id", updateTask);
router.delete("/task/delete/:id", deleteTask);

export { router };
