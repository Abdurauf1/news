import { FooterCard, Container } from "./style.js"
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./style.scss"

function FooterCarousel() {

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        accessibility: true,
        autoplaySpeed: 3000,
        arrows: false,
        draggable: true,
    };

    return (
        <div style={{ width: "100%", backgroundColor: "#fff", padding: "80px 0" }}>
            <Container>
                <div>
                    <Slider {...settings}>
                        <div>
                            <FooterCard>
                                <img src={"https://tmb-01.github.io/news/assets/img/gallery/weekly2News1.png"} alt="" />
                                <a href="#">What to Expect From the 2020 Oscar Nomin ations</a>
                                <p>19 Jan 2020</p>
                            </FooterCard>
                        </div>
                        <div>
                            <FooterCard>
                                <img src={"https://tmb-01.github.io/news/assets/img/gallery/weekly2News2.png"} alt="" />
                                <a href="#">What to Expect From the 2020 Oscar Nomin ations</a>
                                <p>19 Jan 2020</p>
                            </FooterCard>
                        </div>
                        <div>
                            <FooterCard>
                                <img src={"https://tmb-01.github.io/news/assets/img/gallery/weekly2News3.png"} alt="" />
                                <a href="#">What to Expect From the 2020 Oscar Nomin ations</a>
                                <p>19 Jan 2020</p>
                            </FooterCard>
                        </div>
                        <div>
                            <FooterCard>
                                <img src={"https://tmb-01.github.io/news/assets/img/gallery/weekly2News4.png"} alt="" />
                                <a href="#">What to Expect From the 2020 Oscar Nomin ations</a>
                                <p>19 Jan 2020</p>
                            </FooterCard>
                        </div>
                        <div>
                            <FooterCard>
                                <img src={"https://tmb-01.github.io/news/assets/img/gallery/weekly2News2.png"} alt="" />
                                <a href="#">What to Expect From the 2020 Oscar Nomin ations</a>
                                <p>19 Jan 2020</p>
                            </FooterCard>
                        </div>
                        <div>
                            <FooterCard>
                                <img src={"https://tmb-01.github.io/news/assets/img/gallery/weekly2News1.png"} alt="" />
                                <a href="#">What to Expect From the 2020 Oscar Nomin ations</a>
                                <p>19 Jan 2020</p>
                            </FooterCard>
                        </div>
                    </Slider>
                </div>
            </Container>
        </div>
    )
}

export default FooterCarousel
