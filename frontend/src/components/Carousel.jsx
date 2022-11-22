import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import '../index.css';
import styled from 'styled-components';
import { Pagination, Navigation, Autoplay } from 'swiper';

const Container = styled.div`
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
`;

// import required modules

export default function Carousel() {
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
                <SwiperSlide>
                    <img src='https://media.istockphoto.com/id/1009725920/photo/astronaut-in-space-giving-thumbs-up-cosmonaut-floating-above-planet-earth-3d-render.jpg?s=612x612&w=0&k=20&c=1znqU-HXeZ4o6OeyOejUxGrnBC_aEIb0lVQSuuIbIBE=' />
                </SwiperSlide>
                <SwiperSlide>
                    <img src='https://img.freepik.com/premium-photo/astronaut-outer-space-planet-earth-stars-provide-background-erforming-space-planet-earth-sunrise-sunset-our-home-iss-elements-this-image-furnished-by-nasa_150455-13360.jpg?w=2000' />
                </SwiperSlide>
                <SwiperSlide>
                    <img src='https://img.freepik.com/premium-photo/astronaut-outer-open-space-planet-earth-stars-provide-background-erforming-space-planet-earth-sunrise-sunset-our-home-iss-elements-this-image-furnished-by-nasa_150455-16829.jpg?w=2000'></img>
                </SwiperSlide>
                <SwiperSlide>
                    <img src='https://media.istockphoto.com/id/1009725920/photo/astronaut-in-space-giving-thumbs-up-cosmonaut-floating-above-planet-earth-3d-render.jpg?s=612x612&w=0&k=20&c=1znqU-HXeZ4o6OeyOejUxGrnBC_aEIb0lVQSuuIbIBE=' />
                </SwiperSlide>
                <SwiperSlide>
                    <img src='https://img.freepik.com/premium-photo/astronaut-outer-space-planet-earth-stars-provide-background-erforming-space-planet-earth-sunrise-sunset-our-home-iss-elements-this-image-furnished-by-nasa_150455-13360.jpg?w=2000' />
                </SwiperSlide>
                <SwiperSlide>
                    <img src='https://img.freepik.com/premium-photo/astronaut-outer-open-space-planet-earth-stars-provide-background-erforming-space-planet-earth-sunrise-sunset-our-home-iss-elements-this-image-furnished-by-nasa_150455-16829.jpg?w=2000'></img>
                </SwiperSlide>
                <SwiperSlide>
                    <img src='https://media.istockphoto.com/id/1009725920/photo/astronaut-in-space-giving-thumbs-up-cosmonaut-floating-above-planet-earth-3d-render.jpg?s=612x612&w=0&k=20&c=1znqU-HXeZ4o6OeyOejUxGrnBC_aEIb0lVQSuuIbIBE=' />
                </SwiperSlide>
                <SwiperSlide>
                    <img src='https://img.freepik.com/premium-photo/astronaut-outer-space-planet-earth-stars-provide-background-erforming-space-planet-earth-sunrise-sunset-our-home-iss-elements-this-image-furnished-by-nasa_150455-13360.jpg?w=2000' />
                </SwiperSlide>
                <SwiperSlide>
                    <img src='https://img.freepik.com/premium-photo/astronaut-outer-open-space-planet-earth-stars-provide-background-erforming-space-planet-earth-sunrise-sunset-our-home-iss-elements-this-image-furnished-by-nasa_150455-16829.jpg?w=2000'></img>
                </SwiperSlide>
                <SwiperSlide>
                    <img src='https://media.istockphoto.com/id/1009725920/photo/astronaut-in-space-giving-thumbs-up-cosmonaut-floating-above-planet-earth-3d-render.jpg?s=612x612&w=0&k=20&c=1znqU-HXeZ4o6OeyOejUxGrnBC_aEIb0lVQSuuIbIBE=' />
                </SwiperSlide>
                <SwiperSlide>
                    <img src='https://img.freepik.com/premium-photo/astronaut-outer-space-planet-earth-stars-provide-background-erforming-space-planet-earth-sunrise-sunset-our-home-iss-elements-this-image-furnished-by-nasa_150455-13360.jpg?w=2000' />
                </SwiperSlide>
                <SwiperSlide>
                    <img src='https://img.freepik.com/premium-photo/astronaut-outer-open-space-planet-earth-stars-provide-background-erforming-space-planet-earth-sunrise-sunset-our-home-iss-elements-this-image-furnished-by-nasa_150455-16829.jpg?w=2000'></img>
                </SwiperSlide>
                <SwiperSlide>
                    <img src='https://media.istockphoto.com/id/1009725920/photo/astronaut-in-space-giving-thumbs-up-cosmonaut-floating-above-planet-earth-3d-render.jpg?s=612x612&w=0&k=20&c=1znqU-HXeZ4o6OeyOejUxGrnBC_aEIb0lVQSuuIbIBE=' />
                </SwiperSlide>
                <SwiperSlide>
                    <img src='https://img.freepik.com/premium-photo/astronaut-outer-space-planet-earth-stars-provide-background-erforming-space-planet-earth-sunrise-sunset-our-home-iss-elements-this-image-furnished-by-nasa_150455-13360.jpg?w=2000' />
                </SwiperSlide>
                <SwiperSlide>
                    <img src='https://img.freepik.com/premium-photo/astronaut-outer-open-space-planet-earth-stars-provide-background-erforming-space-planet-earth-sunrise-sunset-our-home-iss-elements-this-image-furnished-by-nasa_150455-16829.jpg?w=2000'></img>
                </SwiperSlide>
            </Swiper>
        </Container>
    );
}
