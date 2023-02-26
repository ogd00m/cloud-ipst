
import React,{Component} from 'react';
import axios from "axios";
import {Button, Typography} from "@mui/material";

class FileUpload extends Component {

    state = {

        selectedFile: null
    };

    onFileChange = event => {

        this.setState({ selectedFile: event.target.files[0] });

    };

    onFileUpload = () => {

        const formData = new FormData();
        //сделать гет запрос по папкам и брать оттуда айди
        formData.append('folderId', '63f456e9f4bc20b5769dff9c')
        formData.append('file', this.state.selectedFile)


        // const formData = {
        //     'id': 'root',
        //     'file': {
        //         'name': this.state.selectedFile.name,
        //         'filepath': this.state.selectedFile.webkitRelativePath
        //     }
        // }
        console.log(formData)
        console.log(this.state.selectedFile);



        // fetch("http://91.193.183.139:7000/drive/files",{
        //     method:'POST',
        //     headers:{'content-type':'multipart/form-data', 'Authorization': `Bearer ${sessionStorage.getItem('token')}`},
        //     body: formData,
        // }).then((res) => {
        //     return res.json();
        // })


        axios.defaults.headers.common['Authorization'] = `Bearer ${sessionStorage.getItem('token')}`;
        axios.post("http://91.193.183.139:7000/drive/files", formData, {
            headers: {
                "Content-type": "multipart/form-data",
            },
        })
            .then(response =>{
                console.log(response)
            })
            .catch(error => {
                console.log(error)
            })

    };

    // File content to be displayed after
    // file upload is complete
    fileData = () => {

        if (this.state.selectedFile) {

            return (
                <div>
                    <h2>File Details:</h2>
                    <p>File Name: {this.state.selectedFile.name}</p>

                    <p>File Type: {this.state.selectedFile.type}</p>

                    <p>
                        Last Modified:{" "}
                        {this.state.selectedFile.lastModifiedDate.toDateString()}
                    </p>

                </div>
            );
        } else {
            return (
                <div>
                    <br />
                    <Typography component="h1" variant="h5">Выберите файл прежде, чем нажать на кнопку загрузки</Typography>
                </div>
            );
        }
    };

    render() {

        return (
            <div>
                <Typography component="h1" variant="h3">
                    Загрузка файла
                </Typography>
                <div>
                    <input type="file" onChange={this.onFileChange} />
                    <Button type="submit"

                            variant="contained"
                            sx={{mt: 3, mb: 2}}
                            onClick={this.onFileUpload}>
                        Загрузить
                    </Button>
                </div>
                {this.fileData()}
            </div>
        );
    }
}

export default FileUpload;
