// repositories/TodoRepository.js (updated to use AsyncStorage)
import AsyncStorage from '@react-native-async-storage/async-storage';
export const defaultTodos = [
    { id: 1, title: 'Buy groceries', completed: false },
    { id: 2, title: 'Read a book', completed: false }
  ];

export const TodoRepository = {
  fetchTodos: async () => {
    const todos = await AsyncStorage.getItem('todos');
    return todos ? JSON.parse(todos) : defaultTodos;
  },

  toggleTodo: async (id: any) => {
    let todos = await TodoRepository.fetchTodos();
    todos = todos.map((todo: { id: any; completed: any; }) =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    );
    await AsyncStorage.setItem('todos', JSON.stringify(todos));
    return id;
  }
};
