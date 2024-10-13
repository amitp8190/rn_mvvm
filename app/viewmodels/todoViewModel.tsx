// viewmodels/TodoViewModel.js
import { useState, useEffect } from 'react';
import { TodoRepository } from '../services/Todorepository';

export const useTodoViewModel = () => {
  const [todos, setTodos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadTodos();
  }, []);

  const loadTodos = async () => {
    const data = await TodoRepository.fetchTodos();
    setTodos(data);
    setLoading(false);
  };

  const toggleComplete = async (id: any) => {
    await TodoRepository.toggleTodo(id);
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  return { todos, loading, toggleComplete };
};
