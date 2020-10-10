import React, { useState, useRef, useEffect } from 'react';
import noImage from '../../assets/images/big/no-item.png';
import ReactPlayer from 'react-player'
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

const sampleVideo = {
    title: "샘플 비디오 1",
    thumbnail: "",
    keyword: [1,2,3,4],
    description: '샘플 description',
    fullContents: "풀컨텐츠",
    url: 'https://meetupmedia.blob.core.windows.net/meetup-media/mediaTest.mp4'
};

let url = 'http://localhost:8080/videos';

const Detail = ({match}) => {
    /*
    넘어온 파라미터 
    */

   let url = `http://localhost:8080/detail/${match.params.title}`;
   const [video, setVideo] = useState(sampleVideo);
   useEffect(() => {
       (async function () {
           try {
               const res = await fetch(url);
               const result = res.json();
               const newVideo = {
                title: result.title,
                thumbnail: result.thumbnail,
                keyword: result.keyword,
                description : result.description,
                fullContents: result.fullContents,
                url: result.url
            }
            setVideo(sampleVideo);
               // 결과값을 useState로 업데이트 => 리렌더링
           } catch (err) {
               console.log(err);
           }
       })();
   }, []);

    // For Dismiss Button with Alert
    const [visible, setVisible] = useState(true);
    const [title,setTitle] = useState("Title")
    const inputFile = useRef(null) 
    return (
        <div>

            <Row>
                <Col sm="6">
                    <Card>
                    <ReactPlayer
                            width = '100%' muted = 'false' url= {video.url} playing controls/>
                    <CardBody>
                        <CardTitle>{video.title}</CardTitle>
                    </CardBody>
                    </Card>
                </Col>
                <Col sm="6">
                    <Card>
                        <CardBody>
                            <CardTitle>Keyword</CardTitle>
                            {video.keyword.map((v) => (
                                <Badge href="" color="dark" className="ml-3">{v}</Badge>
                            ))}

                        </CardBody>
                    </Card>

                    <Card>
                        <CardBody>
                            <CardTitle>Description</CardTitle>
                            <CardText>{video.description}</CardText>
                        </CardBody>
                    </Card>

                    <Card>
                        <CardBody>
                            <CardTitle>Full Contents</CardTitle>
                            <CardText>{video.fullContents}</CardText>
                        </CardBody>
                    </Card>

                </Col>
            </Row>
        </div>
    );
}

export default Detail;
