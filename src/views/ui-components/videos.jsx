import React, { useState, useEffect } from 'react';
import Detail from './detail';
import Video from '../../components/video/video'
import { Row } from 'reactstrap';

const url = 'http://localhost:8080/videos';

const sampleVideos = [
    {
        title: "sample1",
        thumbnail: "",
        keyword: "sample keyword 1",
        uuid: '123123'
    },
    {
        title: "sample2",
        thumbnail: "",
        keyword: "sample keyword 2",
        uuid: '123123'
    },
    {
        title: "sample3",
        thumbnail: "",
        keyword: "sample keyword 3",
        uuid: '123123'
    },
    {
        title: "sample3",
        thumbnail: "",
        keyword: "sample keyword 3",
        uuid: '123123'
    },
    {
        title: "sample3",
        thumbnail: "",
        keyword: "sample keyword 3",
        uuid: '123123'
    },
    
];

const Videos = () => {
    // TODO: 아래 sampleVideo는 예시를 위해 둔 것, 빈 배열([])로 바꿀 것
    const [videoList, setVideoList] = useState(sampleVideos);
    useEffect(() => {
        (async function () {
            try {
                const res = await fetch(url);
                const result = res.json();
                const newVideo = {
                    title: result.title,
                    thumbnail: result.thumbnail,
                    keyword: result.keyword,
                    uuid: result.uuid
                }
                sampleVideos.push(newVideo);
                setVideoList(sampleVideos);
                // 결과값을 useState로 업데이트 => 리렌더링
            } catch (err) {
                console.log(err);
            }
        })();
    }, []);

    return (
        <div>
            <h5 className="mb-3">Basic Cards</h5>
            <Row>
                {videoList.map(({ thumbnail, title, keyword, uuid }, idx) => (
                    <Video
                        key={`video_${idx}`}
                        thumbnail={thumbnail}
                        title={title}
                        keyword={keyword}
                        uuid={uuid} />
                ))}
            </Row>
        </div>
    );
}

export default Videos;