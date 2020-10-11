import React, { useState, useEffect } from 'react';
import Detail from './detail';
import Video from '../../components/video/video'
import { Row, Form, Input, Button } from 'reactstrap';

const url = 'http://183.107.12.250:40404/video/video';

let sampleVideos = [
];

const Videos = () => {
    // TODO: 아래 sampleVideo는 예시를 위해 둔 것, 빈 배열([])로 바꿀 것
    const [videoList, setVideoList] = useState(sampleVideos);
    
    useEffect(() => {
        (async function () {
            try {
                const res = await fetch(url);
                sampleVideos = [];
                
                const result = await res.json();
                console.log(result);
                for (let i = 0; i < result.length; i++){
                    let newVideo = {
                        id: result[i].id,
                        title: result[i].title,
                        thumbnailUrl: result[i].thumbnailUrl,
                        keywords: result[i].keywords,
                        description: result[i].description,
                        caption: result[i].caption,
                        url: result[i].url
                    }
                    sampleVideos.push(newVideo);
                    setVideoList(sampleVideos);
                }
                
                // 결과값을 useState로 업데이트 => 리렌더링
            } catch (err) {
                console.log(err);
            }
        })();
    }, []);

    const keywordSearch = () => {
        let searchKeyword = '[' + document.getElementById('searchArea').value + ']';
        let keywordSearchUrl = 'http://183.107.12.250:40404/video/video?keywords=' + searchKeyword;

        (async function () {
            try {
                const res = await fetch(keywordSearchUrl);
                const result = await res.json();
                for (let i = 0; i < result.length; i++){
                    let newVideo = {
                        id: result[i].id,
                        title: result[i].title,
                        thumbnailUrl: result[i].thumbnailUrl,
                        keywords: result[i].keywords,
                        description: result[i].description,
                        caption: result[i].caption,
                        url: result[i].url
                    }
                    sampleVideos = [];
                    sampleVideos.push(newVideo);
                    setVideoList(sampleVideos);
                }
            } catch (err) {
                console.log(err);
            }
        })();
        //console.log(searchKeyword);
    }

    const titleSearch = () => {
        let searchTitle = document.getElementById('searchArea').value;
        let titleSearchUrl = 'http://183.107.12.250:40404/video/video?title=' + searchTitle;
        sampleVideos = [];

        (async function () {
            try {
                const res = await fetch(titleSearchUrl);
                const result = await res.json();
                console.log(result[0]);
                for (let i = 0; i < result.length; i++){
                    let newVideo = {
                        id: result[i].id,
                        title: result[i].title,
                        thumbnailUrl: result[i].thumbnailUrl,
                        keywords: result[i].keywords,
                        description: result[i].description,
                        caption: result[i].caption,
                        url: result[i].url
                    }
                    sampleVideos.push(newVideo);
                    setVideoList(sampleVideos);
                }
            } catch (err) {
                console.log(err);
            }
        })();
        console.log(searchTitle);
    }

    return (
        <div>
            <h5 className="mb-3">Basic Cards</h5>
            <Form className="app-search" id="search">
                <Input id = 'searchArea' type="text" placeholder="Search & click" />
                <Button onClick={keywordSearch}>keyword검색</Button>
                <Button onClick={titleSearch}>title검색</Button>
            </Form>
            <Row>
                {videoList.map(({ id, title, thumbnailUrl, keywords, description, caption, url }) => (
                    <Video
                        id={id}
                        title={title}
                        thumbnailUrl={thumbnailUrl}
                        keywords={keywords}
                        description={description}
                        caption={caption}
                        url={url} />
                ))}
            </Row>
        </div>
    );
}

export default Videos;