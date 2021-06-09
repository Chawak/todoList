import './App.css';
import Form from './components/Form';
import Tab from './components/Tab';
import Button from './components/Button';

import React ,{useContext} from 'react';
import {ThemeContext} from './theme-context'

function App() {
  const { theme, toggle } = useContext(ThemeContext);

  return (
    <div className="App">
      
      <body className="App-header" style={{ background: theme.background, color: theme.color }}>
      <h1 >
          Todo List Sud cool
        </h1>
        <Button value="Toggle Theme" onClick={toggle}/>
        <Form/>
        <Tab value="Overdue" />
        <Tab value="Task" />
        <Tab value="Done" />
      </body>
    </div>
  );
}

export default App;
