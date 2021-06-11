import './App.css';
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { endpoint, method } from './config'
import { fetchAPIData } from './redux/actions'
import DataTable from './components/DataTable'
import Pagination from './components/Pagination'

function App() {
  const dispatch = useDispatch()

  useEffect( () => {
    dispatch( fetchAPIData(endpoint, method) )
  }, []) 

  return (
    <div className="App">
      <h2>List of Restaurants Available</h2>
      <DataTable />
      <Pagination />
    </div>
  );
}

export default App;
