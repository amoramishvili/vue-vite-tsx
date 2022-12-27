import { defineComponent, onBeforeMount } from 'vue';
import { TodoItem, useTodoStore } from '../store/data';

const todoDiv = (props: { item: TodoItem }): HTMLDivElement => {
  return <div>{props.item.title}</div>;
};

export default defineComponent({
  setup() {
    const todoStore = useTodoStore();

    onBeforeMount(async () => {
      todoStore.setTodo();
    });

    return {
      todoStore,
    };
  },
  render() {
    const div = this.todoStore.todoItems.map((e: TodoItem) => {
      return <todoDiv item={e} />;
    });

    return (
      <>
        <SpaceButton>SpaceButton</SpaceButton>
        {div}
      </>
    );
  },
});
