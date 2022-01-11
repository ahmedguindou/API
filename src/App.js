import { Route,Routes } from 'react-router-dom';
import './App.css';
import Details from './components/Details';
import UserList from './components/UserList';

function App() {
  return (
    <div className="App">

    
    <Routes>
      <Route  path="/" element={<UserList/>} ></Route>
    <Route path="/details/:id" element={  <Details></Details>  }  >   </Route>
    </Routes>
     </div>
  );
}

export default App;
