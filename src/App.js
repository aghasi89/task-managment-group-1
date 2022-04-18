
import './App.css';
import LogIn from './pages/login/LogIn';
import AddProject from './components/ProjectCreator';
import Main  from './pages/main/Main';
import Projectinfo from './pages/projectInfo/ProjectInfo';
import  { BrowserRouter,Route, Routes } from 'react-router-dom';


function App() {
  return (
    <div className='App'>
      <Routes>
        <Route path="/" element = {<Main/>} />,
        <Route path = "/login" element = {<LogIn/>}/>,
        <Route path ="/addproject" element = {<AddProject/>} />,
        <Route path = "/projectinfo" component = {<Projectinfo/>}/>
      </Routes>
  
</div>
  ); 
}

export default App;
