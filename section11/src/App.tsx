import React, { useReducer, useEffect, useRef, useContext } from 'react';
import './App.css';
import Editor from './components/Editor';
import TodoItem from './components/TodoItem';
import type { Todo } from './types';

type Action =
  | {
      type: 'CREATE';
      data: {
        id: number;
        content: string;
      };
    }
  | {
      type: 'DELETE';
      data: {
        id: number;
      };
    };

function reducer(state: Todo[], action: Action) {
  switch (action.type) {
    case 'CREATE':
      return [...state, action.data];
    case 'DELETE':
      return state.filter((it) => it.id !== action.data.id);
  }
}

export const TodoStateContext = React.createContext<Todo[] | null>(null);
export const TodoDispatchContext = React.createContext<{
  onClickAdd: (text: string) => void;
  onClickDelete: (id: number) => void;
} | null>(null);
export function useTodoDispatch() {
  const dispatch = useContext(TodoDispatchContext);
  if (!dispatch) throw new Error('TodoDispatchContext에 문제가 있따!');
  return dispatch;
}
function App() {
  const [todos, dispatch] = useReducer(reducer, []);
  const idRef = useRef(0);

  const onClickAdd = (text: string) => {
    dispatch({ type: 'CREATE', data: { id: idRef.current++, content: text } });
  };

  const onClickDelete = (id: number) => {
    dispatch({ type: 'DELETE', data: { id: id } });
  };

  useEffect(() => {
    console.log(todos);
  }, [todos]);

  return (
    <div className='App'>
      <h1>Todo</h1>
      <TodoStateContext.Provider value={todos}>
        <TodoDispatchContext.Provider value={{ onClickAdd, onClickDelete }}>
          <Editor/>
          <div>
          {todos.map((todo) => (
            <TodoItem key={todo.id} {...todo} />
            ))}
          </div>
        </TodoDispatchContext.Provider>
      </TodoStateContext.Provider>
    </div>
  );
}

export default App;
