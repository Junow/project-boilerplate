import { addTodo, toggleTodo, removeTodo } from './action';

export type TodosAction =
| ReturnType<typeof addTodo>
| ReturnType<typeof toggleTodo>
| ReturnType<typeof removeTodo>;

export type Todo = {
    id: number;
    text: string;
    done: boolean;
}
export type TodosState = Todo[];
