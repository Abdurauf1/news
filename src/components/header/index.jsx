import React, { useEffect, useState } from 'react'
import { Container, Add, RightSecondText, ImgCard2, RightFirtsText, ImgCard, HeaderLeftText, HeaderLeftShadow, HeaderLeftContent, HeaderWrapper, ChangeableImg, HeaderRightContent } from "./style.js"
import HeadImg1 from "../assets/images/headimg1.jpg";
import HeadImg2 from "../assets/images/headimg2.jpg";
import HeadImg3 from "../assets/images/headimg3.jpg";
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import HeaderRightImage1 from "../assets/images/headerRightImg1.jpg"
import HeaderRightImage2 from "../assets/images/headerRightImg2.jpg"
import add from "../assets/images/add.png"
import axios from 'axios';
import { baseLink } from "../../baselink/index"

function Header() {

    const [header, setheader] = useState([])

    

    const getData = () => {
        axios
            .get(baseLink + "header-news")
            .then((res) => {
                setheader(res.data)
                console.log(res.data);
            })
            .catch((err) => {
                console.log(err);
            })
    }

    useEffect(() => {
        getData()
    }, [])

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        accessibility: true,
        autoplaySpeed: 3000,
        autoplayDelay: 4000,
        arrows: false,
        draggable: false,
        fade: true,
    };

    return (
        <Container>
            <HeaderWrapper>
                <HeaderLeftContent>
                    <Slider {...settings}>
                        <div>
                            <div>
                                <ChangeableImg src={HeadImg1} alt="" />
                            </div>
                            <HeaderLeftShadow></HeaderLeftShadow>
                            <HeaderLeftText>
                                <div>business</div>
                                <a href="#">anna lora stuns in white at her australian premiere</a>
                                <p>by Alice cloe - Jun 19, 2020</p>
                            </HeaderLeftText>
                        </div>
                        <div>
                            <div>
                                <ChangeableImg src={HeadImg2} alt="" />
                            </div>
                            <HeaderLeftShadow></HeaderLeftShadow>
                            <HeaderLeftText>
                                <div>business</div>
                                <a href="#">anna lora stuns in white at her australian premiere</a>
                                <p>by Alice cloe - Jun 19, 2020</p>
                            </HeaderLeftText>
                        </div>
                        <div>
                            <div>
                                <ChangeableImg src={HeadImg3} alt="" />
                            </div>
                            <HeaderLeftShadow></HeaderLeftShadow>
                            <HeaderLeftText>
                                <div>business</div>
                                <a href="#">anna lora stuns in white at her australian premiere</a>
                                <p>by Alice cloe - Jun 19, 2020</p>
                            </HeaderLeftText>
                        </div>
                    </Slider>
                </HeaderLeftContent>




                <HeaderRightContent>
                    <ImgCard>
                        <div></div>
                        <RightFirtsText>
                            <p>fashion</p>
                            <a href="#">Secretart for Economic Air plane that looks like</a>
                            <p>by Alice cloe - Jun 19, 2020</p>
                        </RightFirtsText>
                        <img src={HeaderRightImage1} alt="" />
                    </ImgCard>

                    <ImgCard2>
                        <div>
                        </div>
                        <RightSecondText>
                            <p>tech</p>
                            <a href="#">Secretart for Economic Air plane that looks like</a>
                            <p>by Alice cloe - Jun 19, 2020</p>
                        </RightSecondText>
                        <img src={HeaderRightImage2} alt="" />
                    </ImgCard2>
                </HeaderRightContent>
                <Add src={add} alt="" />
            </HeaderWrapper>
        </Container>
    )
}

export default Header


