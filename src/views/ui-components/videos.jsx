import React, {useState} from 'react';
import Detail from './detail';
import Video from '../../components/video/video'
import ReactDOM from 'react-dom'
import {
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


import img1 from '../../assets/images/big/img1.jpg';
import img2 from '../../assets/images/big/img2.jpg';
import img3 from '../../assets/images/big/img3.jpg';
import img4 from '../../assets/images/big/img4.jpg';
import img5 from '../../assets/images/big/img5.jpg';
import img6 from '../../assets/images/big/img6.jpg';
import img7 from '../../assets/images/background/img5.jpg';

const Videos = () => {

    const thumbnail = 0;
    const title = 'test';
    const keyword = 0;

    const newVideo = Video(thumbnail, title, keyword);
    const newVideo2 = Video(thumbnail, "yes", keyword);
    console.log(newVideo);

    const getVideos = () => {
        const url = 'http://localhost:8080/videos';
        //const formData = new FormData();
        //formData.append('file',file)
        fetch(url)
            .then(res => res.json())
            .then(data => console.log(data))
    }

    //getVideos();
    
    window.onload = () => {
        //document.querySelector('.row').appendChild(newVideo);
        ReactDOM.render(newVideo, document.querySelector('.row'));
    }
    
    

    return (
        <div>
            {/* --------------------------------------------------------------------------------*/}
            {/* Row*/}
            {/* --------------------------------------------------------------------------------*/}
            <h5 className="mb-3">Basic Cards</h5>
            <Row>
            </Row>
            
            {/* --------------------------------------------------------------------------------*/}
            {/* Row*/}
            {/* --------------------------------------------------------------------------------*/}
            {/* --------------------------------------------------------------------------------*/}
            {/* End Inner Div*/}
            {/* --------------------------------------------------------------------------------*/}
        </div>

    );
}

export default Videos;


