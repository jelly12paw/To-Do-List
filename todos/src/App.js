import { useState } from 'react';
import './App.css';
import Status from './components/Status/Status';
import TodoList from './components/TodoList/TodoList';

const filters = ['all', 'act', 'done'];
function App() {
  // filters의 초기값은 all
  const [filters, setFilters] = useState(filters[0])
  return (
    <div>
      <Status filters={filters} onFilterChange={setFilters} />
      <TodoList />
    </div>
  );
}

export default App;
