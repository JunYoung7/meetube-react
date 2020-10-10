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
    Col
} from 'reactstrap';

import sample from '../../assets/images/big/img1.jpg';

const video = ({ thumbnail, title, keyword, uuid }) => {
    
    const moveUrl = `#/ui-components/detail/${uuid}`
    return (
        <Col xs="12" md="4">
            <Card>
                <CardImg top width="100%" src={thumbnail || sample} />
                <CardBody>
                    <CardTitle>{title}</CardTitle>
                    <CardSubtitle>{keyword}</CardSubtitle>
                        <CardText>Description ...</CardText>
                        <a href = {moveUrl}>
                            <Button>Button</Button>
                        </a>
                </CardBody>
            </Card>
        </Col>
    );
}
export default video;