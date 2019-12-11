import React, { useReducer } from 'react';
import './App.css';
import TodoList from './components/TodoList';
import { reducer, initialState } from './reducers/reducer';

function App() {
  const [todostate, dispatch] = useReducer(reducer, initialState);
  return (
    <div className="App">
     <TodoList/>
    </div>
  );
}

export default App;
