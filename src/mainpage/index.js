import Footer from '../components/footer/index'
import FooterAdd from '../components/footer-add/index'
import FooterCarousel from '../components/footer-carousel/index'
import Header from '../components/header/index'
import LastFooter from '../components/last-footer/index'
import MostPopular from '../components/most-popular/index'
import MostRecent from '../components/most-recent/index'
import Navbar from '../components/navbar/index'
import SocialLinks from '../components/social-links/index'
import Top from '../components/top/index'
import Top2 from '../components/top2/index'
import TrendingNews from '../components/trending-news/index'
import VideoSection from '../components/videos-section/index'
import WhatsNew from '../components/whats-new/index'
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
