import React from 'react'
import Slider from 'react-slick'
import { VideosWrapper, VideoCard, Video, Container, VideoSectionWrapper } from './style'
import Vid1 from "../assets/images/news1.mp4"
import Vid2 from "../assets/images/news2.mp4"
import Vid3 from "../assets/images/news3.mp4"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function VideoSection() {

    var settings = {
        infinite: true,
        speed: 1000,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 10000,
        dots: false,
        arrows: false,
    };

    return (
        <VideoSectionWrapper>
            <Container>
                <Video controls src={Vid2}></Video>

                <VideosWrapper>
                    <Slider {...settings}>
                        <VideoCard>
                            <video controls src={Vid1}></video>
                            <p>Spondon News - 2019</p>
                        </VideoCard>
                        <VideoCard>
                            <video controls src={Vid2}></video>
                            <p>Latest Video - 2020</p>
                        </VideoCard>
                        <VideoCard>
                            <video controls src={Vid3}></video>
                            <p>Old Spondon News - 2020</p>
                        </VideoCard>
                        <VideoCard>
                            <video controls src={Vid1}></video>
                            <p>Banglades News Video</p>
                        </VideoCard>
                        <VideoCard>
                            <video controls src={Vid2}></video>
                            <p>Spondon News - 2019</p>
                        </VideoCard>
                        <VideoCard>
                            <video controls src={Vid3}></video>
                            <p>Latest Video - 2020</p>
                        </VideoCard>
                        <VideoCard>
                            <video controls src={Vid1}></video>
                            <p>Old Spondon News - 2020</p>
                        </VideoCard>
                        <VideoCard>
                            <video controls src={Vid2}></video>
                            <p>Banglades News Video</p>
                        </VideoCard>
                        <VideoCard>
                            <video controls src={Vid3}></video>
                            <p>Spondon News - 2019</p>
                        </VideoCard>
                        <VideoCard>
                            <video controls src={Vid1}></video>
                            <p>Latest Video - 2020</p>
                        </VideoCard>
                    </Slider>
                </VideosWrapper>
            </Container>
        </VideoSectionWrapper>
    )
}

export default VideoSection