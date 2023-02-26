import React, {useEffect} from 'react';
import axios from "axios";
const src = "http://91.193.183.139:7000/drive/folder/"
const ChildrenFolder = () => {

    useEffect(() => {
        axios
            .get(`http://91.193.183.139:7000/drive/folder/`)
            .then(res => {
                const reqData = res.data
                console.log(reqData)
            })
            .catch(error => {
                if(error.response.status === 401){
                    window.location.replace('/login')
                }
            })
    }, [])

    return (
        <div>
            
        </div>
    );
};

export default ChildrenFolder;