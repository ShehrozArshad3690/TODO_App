import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";
import { PrismaClientRustPanicError } from "@prisma/client/runtime/library";
const prisma = new PrismaClient();
// viewTask,addTask,updateTask,deleteTask

const viewTask = async (req: Request, res: Response) => {
  try {
    const viewAll = await prisma.task.findMany();
    if (!viewAll) {
      return res.status(404).json({ message: "No Task Found" });
    }
    return res.status(200).json(viewAll);
  } catch (error) {
    return res.status(500).json({ message: "Something Went Wrong" });
  }
};
const addTask = async (req: Request, res: Response) => {
  try {
    const createTask = await prisma.task.create({
      data: {
        task: req.body.task,
      },
    });
    return res.status(200).json(createTask);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Something Went Wrong" });
  }
};
const updateTask = async (req: Request, res: Response) => {
  try {
    let id = Number(req.params.id);
    const changeTask = await prisma.task.update({
      data: {
        completed: true,
      },
      where: {
        id,
      },
    });
    return res.status(200).json(changeTask);
  } catch (error) {
    return res.status(500).json({ message: "Something Went Wrong" });
  }
};
const deleteTask = async (req: Request, res: Response) => {
  try {
    let id = Number(req.params.id);
    const removeTask = await prisma.task.delete({
      where: {
        id,
      },
    });
    return res.status(200).json({ message: `Task ${id} deleted successfully` });
  } catch (error) {
    return res.status(500).json({ message: "Something Went Wrong" });
  }
};

export { viewTask, addTask, updateTask, deleteTask };
