import React from 'react'
import Footer from '../components/footer'
import FooterAdd from '../components/footer-add'
import FooterCarousel from '../components/footer-carousel'
import Header from '../components/header'
import LastFooter from '../components/last-footer'
import MostPopular from '../components/most-popular'
import MostRecent from '../components/most-recent'
import Navbar from '../components/navbar'
import SocialLinks from '../components/social-links'
import Top from '../components/top'
import Top2 from '../components/top2'
import TrendingNews from '../components/trending-news'
import VideoSection from '../components/videos-section'
import WhatsNew from '../components/whats-new'
import { WrapperNews, Container } from "./style.js"

function MainPage() {
    return (
        <div>
            <Top />
            <Top2 />
            <Navbar />
            <Header />
            <Container>
                <WrapperNews>
                    <WhatsNew />
                    <div>
                        <SocialLinks />
                        <MostRecent />
                    </div>
                </WrapperNews>
            </Container>
            <MostPopular />
            <TrendingNews />
            <VideoSection />
            <FooterCarousel />
            <FooterAdd />
            <Footer />
            <LastFooter />
        </div>
    )
}

export default MainPage
