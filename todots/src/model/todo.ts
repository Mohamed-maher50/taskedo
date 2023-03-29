import { useReducer } from "react";

export interface Todo {
  _id: number;
  todo: string;
  isDone: boolean;
}
type Actions =
  | { type: "add"; payload: string }
  | { type: "remove"; payload: number }
  | { type: "done"; payload: number };
const TodoReducer = (state: Todo[], action: Actions) => {
  switch (action.type) {
    case "add":
      return [
        ...state,
        { id: Date.now(), todo: action.payload, isDone: false },
      ];
    case "remove":
      return state.filter((todo) => todo._id !== action.payload);
    case "done":
      return state.map((todo) =>
        todo._id === action.payload ? { ...todo, isDone: true } : todo
      );
    default:
      return state;
  }
};
// const ReducerExample = () => {
//   const [state, dispatch] = useReducer(TodoReducer, []);
// };
