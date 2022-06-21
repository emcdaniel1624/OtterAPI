import { Todo } from "./models";
import { connectDB } from ".";

export const getTodos = async () => {
    connectDB();
    const posts = await Todo.find();
    return posts;
}

export const postTodo = () => {
    connectDB();
    return 1;
}