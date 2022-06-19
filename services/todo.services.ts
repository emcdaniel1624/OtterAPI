import { todosDb } from "../database";

export const getTodos = async () => {
  try {
    return await todosDb.getTodos();
  } 
  catch(e:any) {
    throw new Error(e.message);
  }
}

export const postTodo = async (todo:any) => {
    try {
      return await todosDb.postTodo();
    } 
    catch(e:any) {
      throw new Error(e.message);
    }
  }
