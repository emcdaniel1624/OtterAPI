import { todosDataAccess } from "../database";

export const getTodos = async () => {
  try {
    return await todosDataAccess.getTodos();
  } 
  catch(e:any) {
    throw new Error(e.message);
  }
}

export const postTodo = async (todo:any) => {
    try {
      return await todosDataAccess.postTodo();
    } 
    catch(e:any) {
      throw new Error(e.message);
    }
  }
