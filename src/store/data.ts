import { defineStore } from 'pinia';
import http from './http';

export interface TodoItem {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

interface TodoStoreState {
  todo: TodoItem[];
}

export const useTodoStore = defineStore('todoStore', {
  state: (): TodoStoreState => {
    return {
      todo: [],
    };
  },
  getters: {
    todoItems: (state) => state.todo,
  },
  actions: {
    async setTodo(): Promise<TodoItem[]> {
      const todo = await http
        .request!.get('/todos/')
        .then((r) => {
          return r.data;
        })
        .catch(() => []);

      this.todo = todo;

      return todo;
    },
  },
});
