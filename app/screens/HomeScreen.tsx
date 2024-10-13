// views/TodoList.js
import React from 'react';
import { View, Text, Button, ActivityIndicator } from 'react-native';
import { useTodoViewModel } from '../viewmodels/todoViewModel';

const TodoList = () => {
  const { todos, loading, toggleComplete } = useTodoViewModel();

  if (loading) {
    return <ActivityIndicator size="large" />;
  }

  return (
    <View>
      {todos.map((todo:any) => (
        <View key={todo.id}>
          <Text style={{ textDecorationLine: todo.completed ? 'line-through' : 'none' }}>
            {todo.title}
          </Text>
          <Button title="Toggle" onPress={() => toggleComplete(todo.id)} />
        </View>
      ))}
    </View>
  );
};

export default TodoList;
