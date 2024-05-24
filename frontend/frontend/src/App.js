import logo from './logo.svg';
import './App.css';
import TaskList from './pages/TaskList';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom"
import NavBar from './pages/NavBar';
import CreateTask from './pages/CreateTask';
import Login from './pages/Login';
import Signup from './pages/signup';
import Dashboard from './pages/Dashboard';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/Login" element={<Login />}></Route>
          <Route path="/signup" element={<Signup />}></Route>
          <Route path="/" element={<Dashboard />}>
            <Route path="/tasks" element={<TaskList />}></Route>
            <Route path="/create-task" element={<CreateTask />}></Route>
          </Route>
          <Route path="/Dashboard" element={< Dashboard/>}></Route>

        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
