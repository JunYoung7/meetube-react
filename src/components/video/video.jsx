import React from 'react';
import {Link, NavLink} from 'react-router-dom';
import ReactDOM from 'react-dom'
import {
    Card,
    CardImg,
    CardText,
    CardBody,
    CardTitle,
    CardSubtitle,
    Button,
    Col,
    Badge
} from 'reactstrap';

import sample0 from '../../assets/images/big/img1.png';
import sample1 from '../../assets/images/big/img2.png';
import sample2 from '../../assets/images/big/img3.png';

const video = ({ id, title, thumbnailUrl, keywords, description, caption, url }) => {
    
    const moveUrl = `#/ui-components/detail/${id}`
    let randomNum = Math.floor(Math.random() * 3);
    let samples = [sample0,sample1,sample2];
    return (
        <Col xs="12" md="4">
            <Card>
                <CardImg top width="100%" src={samples[randomNum]} />
                <CardBody>
                    <CardTitle>{title}</CardTitle>
                        <CardText>
                        {keywords?.map((v) => (
                                <Badge href="" color="dark" className="ml-3">{v}</Badge>
                            ))}
                        </CardText>
                        <a href = {moveUrl}>
                            <Button>Button</Button>
                        </a>
                </CardBody>
            </Card>
        </Col>
    );
}
export default video;