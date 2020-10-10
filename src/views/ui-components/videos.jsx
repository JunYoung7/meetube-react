import React, { useState, useEffect } from 'react';
import Detail from './detail';
import Video from '../../components/video/video'
import { Row } from 'reactstrap';

const url = 'http://localhost:8080/videos';

const sampleVideos = [
    {
        title: "샘플 비디오 1",
        thumbnail: "",
        keyword: "샘플 비디오 키워드 1"
    },
    {
        title: "샘플 비디오 2",
        thumbnail: "",
        keyword: "샘플 비디오 키워드 2"
    },
    {
        title: "샘플 비디오 3",
        thumbnail: "",
        keyword: "샘플 비디오 키워드 3"
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
                {videoList.map(({ thumbnail, title, keyword }, idx) => (
                    <Video
                        key={`video_${idx}`}
                        thumbnail={thumbnail}
                        title={title}
                        keyword={keyword} />
                ))}
            </Row>
        </div>
    );
}

export default Videos;