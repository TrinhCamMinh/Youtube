import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useVideo } from '../hooks/useVideo';
import Card from '../components/Card';

export default function Search() {
    const { searchVideo } = useVideo();
    const [data, setData] = useState(null);
    const { query } = useParams();

    const fetchVideo = async () => {
        const data = await searchVideo(query);
        setData(data);
    };

    useEffect(() => {
        fetchVideo();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <>
            {data &&
                data.map((item, index) => {
                    return <Card key={index} item={item} />;
                })}
        </>
    );
}
