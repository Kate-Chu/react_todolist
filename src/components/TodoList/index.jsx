import React, { useState, useCallback } from 'react';
import RenderTip from '../RenderTip';
import TodoForm from '../TodoForm';
import TodoItem from '../TodoItem';
import TodoFilter from '../TodoFilter';

type TodoType = {
  id: string,
  text: string,
  done: boolean,
};

const initialList: TodoType[] = [
  { id: 'id1', text: '學會React', done: true },
  { id: 'id2', text: '年薪百萬', done: false },
];

const TodoList = () => {
  const [list, setList] = useState(initialList);
  const [filterType, setFilterType] = useState('all');

  const atAddItem = useCallback(
    (text: string) => {
      const item: TodoType = {
        id: new Date().getTime().toString(),
        text,
        done: false,
      };
      setList(list.concat(item));
    },
    [list],
  );

  const atToggleItem = useCallback(
    (id: string) => {
      const newList = list.map((item: TodoType) => {
        if (item.id === id) {
          return {
            id: item.id,
            text: item.text,
            done: !item.done,
          };
        }
        return item;
      });
      setList(newList);
    },
    [list],
  );

  const atDeleteItem = useCallback((id: string) => {
    setList((prev) => {
      return prev.filter((item: TodoType) => item.id !== id);
    });
  }, []);

  const atFilterChange = useCallback((type: string) => {
    setFilterType(type);
  }, []);

  const filtersList = list.filter((todo: TodoType) => {
    if (filterType === 'completed') {
      return todo.done;
    }
    if (filterType === 'active') {
      return !todo.done;
    }
    return true;
  });

  return (
    <section className="todo-list" data-name="TodoList">
      <RenderTip />
      <TodoForm onAddItem={atAddItem} />
      <TodoFilter filterType={filterType} onFilterChange={atFilterChange} />
      <div>
        {filtersList.map((item) => (
          <TodoItem
            key={item.id}
            id={item.id}
            done={item.done}
            text={item.text}
            onToggleItem={atToggleItem}
            onDeleteItem={atDeleteItem}
          />
        ))}
      </div>
    </section>
  );
};

export default React.memo(TodoList);
