import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Components/Home';
import Login from './Components/Login';
import Register from './Components/Register';
import FileUpload from "./Components/FileUpload";
import FolderCreate from "./Components/Folders/FolderCreate";


function App() {
  return (
    <div className="App">

        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home/>}></Route>
                <Route path='/login' element={<Login/>}></Route>
                <Route path='/register' element={<Register/>}></Route>
                <Route path='/upload' element={<FileUpload/>}></Route>
                <Route path='/foldercreate' element={<FolderCreate/>}></Route>
            </Routes>
        </BrowserRouter>

    </div>
  );
}

export default App;
