import React, {useEffect, useMemo, useState} from 'react';

import {Alert, Box, Button} from "@mui/material";
import axios from "axios";
import GetFolders from "./Folders/getFolders";
import Login from "./Login";
import {NavLink} from "react-router-dom";
import FileUpload from "./FileUpload";




const Home = () => {




    // useEffect(() => {axios.get(`http://91.193.183.139:7000/drive/folder/root`)
    //     .then(res => {
    //         const folders = res.data;
    //         rootFolderId = folders.data.id
    //         foldersChildren = folders.data.children
    //         console.log(folders);
    //         console.log(foldersChildren)
    //         console.log(rootFolderId)
    //     })}, [foldersChildren])



    let userName = sessionStorage.getItem('login')



        return (
            <div>
                <h1>Hello, {userName}!</h1>
                <h4>Here is your folders list</h4>
                <GetFolders />

                <NavLink to="/upload">Загрузить файл</NavLink>
                <NavLink to="/foldercreate">Создать папку</NavLink>

            </div>
        )

    // if(!sessionStorage.getItem('token')) {
    //     return (
    //
    //         <div>
    //             <h1>ПРИВЕТ!</h1>
    //             <Button variant="outlined" href={'/login'}>Login</Button>
    //             <Button variant="outlined" href={'/register'}>Register</Button>
    //         </div>
    //     );
    // }else if(axios.defaults.headers.common['Authorization'] === `Bearer ${sessionStorage.getItem('token')}`){
    //     return(
    //     <div>
    //     <h1>Welcome, {userName}</h1>
    //         <button onClick={logOut}>logout</button>
    //         <h3>Your Folders</h3>
    //         {zv}
    //         <GetFolders props={foldersChildren} />
    //     </div>
    //     )
    // }
};

export default Home;