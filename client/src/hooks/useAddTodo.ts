import { useDispatch } from 'react-redux';
import { useCallback } from 'react';
import { addTodo } from '../modules/todos/action';

function useAddTodo() {
  const dispatch = useDispatch();
  return useCallback((text) => dispatch(addTodo(text)), [dispatch]);
}

export default useAddTodo;
