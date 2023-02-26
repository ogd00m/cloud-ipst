import React, {useEffect, useState} from 'react';
import axios from "axios";
import {NavLink, Route} from "react-router-dom";



const src = "http://91.193.183.139:7000/drive/folder/root"
const src2 = "http://91.193.183.139:7000/drive/folder"


const GetFolders = (props) => {

    const [folderNames, setFolderNames] = useState([]);
    const [current, setCurrent] = useState('root')
    const [current2, setCurrent2] = useState('')

    axios.defaults.headers.common['Authorization'] = `Bearer ${sessionStorage.getItem('token')}`;
    let folderId = ""
    useEffect(() => {
        axios
            .get(`${src2}/${current}`)
            .then(res => {
                const reqData = res.data
                setFolderNames(reqData.data.children)
                console.log(reqData)
                console.log(res)
            })
            .catch(error => {
                if(error.response.status === 401){
                    window.location.replace('/login')
                }
            })
    }, [current])

    const getFolderData = (e) =>{

            axios
                .get(`${src}/${current}`)
                .then(res => {
                    const reqData = res.data
                    console.log(reqData)
                    setCurrent(reqData.id)
                })
    }

    return (
        <div>
            {folderNames.map((folder) => {
                return (
                    <NavLink onClick={getFolderData} onChange={current}>{folder.name}</NavLink>
                );
            })}
        </div>
    );
};

export default GetFolders;