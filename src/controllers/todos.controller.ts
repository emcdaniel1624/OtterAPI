import { todoService } from '../services';

export const getTodos = async (req:any, res:any) => {
  try {
    const retVal = await todoService.getTodos();
    res.json(retVal);
  } 
  catch(e:any) {
    console.log(e.message);
    res.sendStatus(500);
  }
}

export const postTodo = async (req:any, res:any) => {
  const { todo } = req.body
  try {
    const retVal = await todoService.postTodo(todo);
    res.json(retVal);
  } 
  catch(e:any) {
    console.log(e.message);
    res.sendStatus(500);
  }
}
