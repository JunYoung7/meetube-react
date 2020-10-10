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

import sample from '../../assets/images/big/img1.jpg';

const video = ({ id, title, thumbnailUrl, keywords, description, caption, url }) => {
    
    const moveUrl = `#/ui-components/detail/${id}`
    return (
        <Col xs="12" md="4">
            <Card>
                <CardImg top width="100%" src={thumbnailUrl || sample} />
                <CardBody>
                    <CardTitle>{title}</CardTitle>
                        <CardText>
                        {keywords.map((v) => (
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