import React, { useState } from 'react';
import RenderTip from '../RenderTip';
import './TodoForm.scss';

type TodoFormProps = {
  onAddItem: (text: string) => void,
};
const TodoForm: React.FC<TodoFormProps> = (props) => {
  const { onAddItem } = props;

  const [input, setInput] = useState('');

  const atSubmit = (e) => {
    e.preventDefault();
    if (input === '') {
      return;
    }
    setInput('');
    onAddItem(input);
  };

  return (
    <section className="style-1" data-name="TodoForm">
      <RenderTip />
      <form className="todo-form" onSubmit={atSubmit}>
        <input
          type="text"
          value={input}
          onChange={(e) => {
            setInput(e.target.value);
          }}
        />
      </form>
    </section>
  );
};

export default React.memo(TodoForm);
