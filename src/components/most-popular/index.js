import { Container, Card, CarouselCards, MostPopularWrapper } from "./style.js"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

function MostPopular() {

    var settings = {
        dots: true,
        infinite: true,
        speed: 1000,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        dots: false,
        arrows: false,
    };

    return (
        <Container>
            <MostPopularWrapper>
                <img src={"https://tmb-01.github.io/news/assets/img/gallery/body_card2.png"} alt="" />

                <CarouselCards>
                    <p>Most Popular</p>
                    <Slider {...settings}>
                        <div>
                            <Card>
                                <img src={"https://tmb-01.github.io/news/assets/img/gallery/weeklyNews1.png"} alt="" />
                                <p>Scarlett's disappointment at latest accolade</p>
                                <p>John | 2 hours ago</p>
                            </Card>
                        </div>
                        <div>
                            <Card>
                                <img src={"https://tmb-01.github.io/news/assets/img/gallery/weeklyNews3.png"} alt="" />
                                <p>Scarlett's disappointment at latest accolade</p>
                                <p>John | 2 hours ago</p>
                            </Card>
                        </div>
                        <div>
                            <Card>
                                <img src={"https://tmb-01.github.io/news/assets/img/gallery/weeklyNews2.png"} alt="" />
                                <p>Scarlett's disappointment at latest accolade</p>
                                <p>John | 2 hours ago</p>
                            </Card>
                        </div>
                        <div>
                            <Card>
                                <img src={"https://tmb-01.github.io/news/assets/img/gallery/weeklyNews3.png"} alt="" />
                                <p>Scarlett's disappointment at latest accolade</p>
                                <p>John | 2 hours ago</p>
                            </Card>
                        </div>
                        <div>
                            <Card>
                                <img src={"https://tmb-01.github.io/news/assets/img/gallery/weeklyNews1.png"} alt="" />
                                <p>Scarlett's disappointment at latest accolade</p>
                                <p>John | 2 hours ago</p>
                            </Card>
                        </div>
                        <div>
                            <Card>
                                <img src={"https://tmb-01.github.io/news/assets/img/gallery/weeklyNews2.png"} alt="" />
                                <p>Scarlett's disappointment at latest accolade</p>
                                <p>John | 2 hours ago</p>
                            </Card>
                        </div>
                    </Slider>
                </CarouselCards>
            </MostPopularWrapper>
        </Container>
    )
}

export default MostPopular
