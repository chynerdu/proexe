// import logo from './logo.svg';
import './App.css';
import UserList from './pages/user/userList'
import Header from './components/header'
import {   Routes,
  Route } from "react-router-dom";
  import CreateUser from './pages/user/createUser'
  import EditUser from './pages/user/editUser'

function App() {
  return (
    <div className="App">
      <Header/>

 <Routes>
      <Route path="/" element={<UserList/>} />
      <Route path="/create-user" element={<CreateUser />} />
      <Route path="/edit-user/:id" element={<EditUser />} />
      
    </Routes>
      {/* <UserList/> */}
    </div>
  );
}

export default App;
