import React, { useState, useEffect } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import '../index.css';
import styled from 'styled-components';
import { Pagination, Navigation, Autoplay } from 'swiper';
import { useVideo } from '../hooks/useVideo';

const Container = styled.div`
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
`;

// import required modules
export default function Carousel() {
    const { getShortVideo } = useVideo();
    const [shortVideo, setShortVideo] = useState(null);

    const fetchShortVideo = async () => {
        const data = await getShortVideo();
        setShortVideo(data);
    };

    useEffect(() => {
        fetchShortVideo();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <Container>
            <Swiper
                slidesPerView={10}
                spaceBetween={20}
                navigation={true}
                loop={true}
                loopFillGroupWithBlank={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                modules={[Pagination, Navigation, Autoplay]}
                className='mySwiper'
            >
                {shortVideo &&
                    shortVideo.map((item, index) => {
                        return (
                            <SwiperSlide key={index}>
                                <img src={`http://localhost:7000${item.image}`} alt='youtube short' />
                            </SwiperSlide>
                        );
                    })}
            </Swiper>
        </Container>
    );
}
