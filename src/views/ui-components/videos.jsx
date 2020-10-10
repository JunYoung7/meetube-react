import React, { useState, useEffect } from 'react';
import Detail from './detail';
import Video from '../../components/video/video'
import { Row, Form, Input, Button } from 'reactstrap';

const url = 'http://183.107.12.250:40404/videos';

let sampleVideos = [
    {
        id: '1',
        title: "샘플 비디오 1",
        thumbnailUrl: "",
        keywords: [1,2,3,4],
        description: '샘플 description',
        caption: "풀컨텐츠",
        url: 'https://meetupmedia.blob.core.windows.net/meetup-media/mediaTest.mp4',
    },
    {
        id: '1',
        title: "샘플 비디오 2",
        thumbnailUrl: "",
        keywords: [1,2,3,4],
        description: '샘플 description',
        caption: "풀컨텐츠",
        url: 'https://meetupmedia.blob.core.windows.net/meetup-media/mediaTest.mp4',
    }

    
];

const Videos = () => {
    // TODO: 아래 sampleVideo는 예시를 위해 둔 것, 빈 배열([])로 바꿀 것
    const [videoList, setVideoList] = useState(sampleVideos);
    useEffect(() => {
        (async function () {
            try {
                const res = await fetch(url);
                const result = res.json();
                for (let i = 0; i < result.videos.length; i++){
                    const newVideo = {
                        id: result.videos[i].id,
                        title: result.videos[i].title,
                        thumbnailUrl: result.videos[i].thumbnailUrl,
                        keywords: result.videos[i].keywords,
                        description: result.videos[i].description,
                        caption: result.videos[i].caption,
                        url: result.videos[i].url
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

        const keywordSearchUrl = `http://localhost:8080/video?keywords="${searchKeyword}"`
        sampleVideos = [];
        (async function () {
            try {
                const res = await fetch(keywordSearchUrl);
                const result = res.json();
                for (let i = 0; i < result.videos.length; i++){
                    const newVideo = {
                        id: result.videos[i].id,
                        title: result.videos[i].title,
                        thumbnailUrl: result.videos[i].thumbnailUrl,
                        keywords: result.videos[i].keywords,
                        description: result.videos[i].description,
                        caption: result.videos[i].caption,
                        url: result.videos[i].url
                    }
                    
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
        const searchTitle = document.getElementById('searchArea').value;
        const titleSearchUrl = `http://localhost:8080/video?title="${searchTitle}"`
        sampleVideos = [];
        (async function () {
            try {
                const res = await fetch(titleSearchUrl);
                const result = res.json();
                for (let i = 0; i < result.videos.length; i++){
                    const newVideo = {
                        id: result.videos[i].id,
                        title: result.videos[i].title,
                        thumbnailUrl: result.videos[i].thumbnailUrl,
                        keywords: result.videos[i].keywords,
                        description: result.videos[i].description,
                        caption: result.videos[i].caption,
                        url: result.videos[i].url
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