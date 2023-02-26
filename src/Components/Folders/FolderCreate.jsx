
import React, {useState} from 'react';
import axios, {get} from "axios";

const FolderCreate = () =>{
    const [inputOne, setInputOne] = useState('');

    console.log(inputOne)

    // state = {
    //
    //     selectedFolder: null
    // };
    //



    // onFileChange = event => {
    //
    //     this.setState({ selectedFolder: event.target.files[0] });
    //
    // };
    const getFolderId = () =>{
        let rootFolderId = ""
        let foldersName = ""
        axios.defaults.headers.common['Authorization'] = `Bearer ${sessionStorage.getItem('token')}`;
        axios.get(`http://91.193.183.139:7000/drive/folder/root`)
            .then(res => {
                const folders = res.data;
                rootFolderId = folders.data.id
                foldersName = folders.data.name
                console.log(folders)
            })
        return rootFolderId
    }


    async function onFolderCreate(){


        const formData = {
            'parentId': 'root',
            'name': inputOne,

        }



        console.log(formData)


        axios.defaults.headers.common['Authorization'] = `Bearer ${sessionStorage.getItem('token')}`;
        axios.post("http://91.193.183.139:7000/drive/folder", formData);

    };



        return (
            <div>
                <h1>
                    create folder
                </h1>
                <div>
                    <input type="text"
                           name='input2'
                           value={inputOne}
                           onChange={(event) => setInputOne(event.target.value)}/>

                    <button onClick={onFolderCreate}>
                        Upload!
                    </button>
                </div>
            </div>
        )
}

export default FolderCreate;
