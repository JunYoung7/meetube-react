import React, { useState, useRef } from 'react';
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

const Detail = () => {
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
                            width = '100%' muted = 'false' url= 'https://meetupmedia.blob.core.windows.net/meetup-media/mediaTest.mp4' playing controls/>
                    <CardBody>
                        <CardTitle>{title}</CardTitle>
                    </CardBody>
                    </Card>
                </Col>
                <Col sm="6">
                    <Card>
                        <CardBody>
                            <CardTitle>Keyword</CardTitle>
                            <Badge href="" color="dark" className="ml-3">Meet</Badge>
                            <Badge href="" color="dark" className="ml-3">Meet</Badge>
                            <Badge href="" color="dark" className="ml-3">Meet</Badge>
                            <Badge href="" color="dark" className="ml-3">Meet</Badge>
                        </CardBody>
                    </Card>

                    <Card>
                        <CardBody>
                            <CardTitle>Description</CardTitle>
                            <CardText>Descript</CardText>
                        </CardBody>
                    </Card>

                    <Card>
                        <CardBody>
                            <CardTitle>Full Contents</CardTitle>
                            <CardText>DescriptDescriptDescriptDescript</CardText>
                            <Button>See More</Button>
                        </CardBody>
                    </Card>

                </Col>
            </Row>
        </div>
    );
}

export default Detail;
