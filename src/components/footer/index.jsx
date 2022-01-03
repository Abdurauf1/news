import React from 'react'
import { Container, FooterText, FooterWrapper, SecondSection, FirstSection } from './style.js'

function Footer() {
    return (
        <FooterWrapper>
            <Container>
                <FirstSection>
                    <a href="#">
                        <img src={"https://tmb-01.github.io/news/assets/img/logo/logo2_footer.png"} alt="" />
                    </a>
                    <p>Lorem ipsum dolor sit amet, nsectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.</p>
                    <p>198 West 21th Street, Suite 721 New York,NY 10010</p>
                    <p>Phone: +95 (0) 123 456 789 Cell: +95 (0) 123 456 789</p>
                </FirstSection>

                <SecondSection>
                    <p>Popular post</p>
                    <div>
                        <img src={"https://tmb-01.github.io/news/assets/img/gallery/footer_post1.png"} alt="" />
                        <FooterText style={{display: "block"}}>
                            <a href="#">Scarlett’s disappointment at latest accolade</a>
                            <p>Jhon | 2 hours ago</p>
                        </FooterText>
                    </div>
                    <div>
                        <img src={"https://tmb-01.github.io/news/assets/img/gallery/footer_post2.png"} alt="" />
                        <FooterText style={{display: "block"}}>
                            <a href="#">Scarlett’s disappointment at latest accolade</a>
                            <p>Jhon | 2 hours ago</p>
                        </FooterText>
                    </div>
                    <div>
                        <img src={"https://tmb-01.github.io/news/assets/img/gallery/footer_post3.png"} alt="" />
                        <FooterText style={{display: "block"}}>
                            <a href="#">Scarlett’s disappointment at latest accolade</a>
                            <p>Jhon | 2 hours ago</p>
                        </FooterText>
                    </div>
                </SecondSection>

                <img src={"https://tmb-01.github.io/news/assets/img/gallery/body_card4.png"} alt="" />
            </Container>
        </FooterWrapper>
    )
}

export default Footer
