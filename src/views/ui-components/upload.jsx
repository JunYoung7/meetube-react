import React, { useState, useRef } from 'react';
import noImage from '../../assets/images/big/no-item.png';

import axios, { post } from 'axios';

import {

    Input,
    Badge,
    Card,
    CardImg,
    CardImgOverlay,
    CardText,
    CardBody,
    CardTitle,
    CardSubtitle,
    CardColumns,
    CardGroup,
    CardDeck,
    CardLink,
    CardHeader,
    CardFooter,
    Button,
    Row,
    Col
} from 'reactstrap';


const Upload = () => {
    // For Dismiss Button with Alert
    const [visible, setVisible] = useState(true);
    const [filePath, setFileName] = useState("Please Upload Video")
    const [titleHolder, setTitleHolder] = useState("Title")
    const inputFile = useRef(null)
    const [file,setFile] = useState(null)

    const onButtonClick = () => {
        // `current` points to the mounted file input element
        inputFile.current.click();
    };

    const onFileChange = (e) => {
        let basicName = e[0].name

        console.log(basicName)
        setFileName(basicName)
        setTitleHolder(basicName)
        setFile(e[0])
    };
    
    const onFormSubmit = (e)=>{
        e.preventDefault() // Stop form submit
        fileUpload(file).then((response)=>{
          console.log(response.data);
        })
    }

    const fileUpload = (file) => {
        const url = 'http://183.107.12.250:40404/upload';
        const formData = new FormData();
        formData.append('file',file)
        const config = {
            headers: {
                'content-type': 'multipart/form-data'
            }
        }
        return post(url, formData,config)
      }

    return (
        <div>
            <form onSubmit={(e) => onFormSubmit(e)}>
                <Row>
                    <Col sm="6">
                        <Card>
                            <input type='file' id='file' ref={inputFile} style={{ display: 'none' }} onChange={(e) => onFileChange(e.target.files)} />
                            <CardImg top width="50%" src={noImage} />

                            <CardBody>
                                <CardTitle>{filePath}</CardTitle>
                                <Button onClick={onButtonClick}>Upload</Button>
                            </CardBody>
                        </Card>
                        <Button type="submit" className="btn" color="primary" size="lg" block>  Submit    </Button>
                    </Col>
                    <Col sm="6">

                    </Col>
                </Row>
            </form>

        </div>
    );
}

export default Upload;
