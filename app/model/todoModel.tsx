export const todos = [
    { id: 1, title: 'Buy groceries', completed: false },
    { id: 2, title: 'Read a book', completed: false }
  ];
  
  // Simulating API call to fetch todos
  export const fetchTodos = () => {
    return new Promise((resolve) => {
      setTimeout(() => resolve(todos), 1000);
    });
  }