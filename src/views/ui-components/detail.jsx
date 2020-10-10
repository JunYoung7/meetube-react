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
    uuid: '1',
    title: "샘플 비디오 1",
    thumbnailUrl: "",
    keywords: [1,2,3,4],
    description: '샘플 description',
    caption: "풀컨텐츠",
    url: 'https://meetupmedia.blob.core.windows.net/meetup-media/mediaTest.mp4',
};


const Detail = ({match}) => {
    /*
    넘어온 파라미터 
    */

   let url = `http://localhost:8080/video/${match.params.uuid}`;
   const [video, setVideo] = useState(sampleVideo);
   useEffect(() => {
       (async function () {
           try {
               const res = await fetch(url);
               const result = res.json();
               const newVideo = {
                uuid : result.uuid,
                title: result.title,
                thumbnailUrl: result.thumbnailUrl,
                keywords: result.keywords,
                description : result.description,
                caption: result.caption,
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
                        <CardTitle>{match.params.uuid}</CardTitle>
                    </CardBody>
                    </Card>
                </Col>
                <Col sm="6">
                    <Card>
                        <CardBody>
                            <CardTitle>Keyword</CardTitle>
                            {video.keywords.map((v) => (
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
                            <CardText>{video.caption}</CardText>
                        </CardBody>
                    </Card>

                </Col>
            </Row>
        </div>
    );
}

export default Detail;
